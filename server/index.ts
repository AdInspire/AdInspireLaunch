import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config(); // Load variables from .env file

// Create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });

  next();
});

(async () => {
  // 🔹 Connect to MongoDB Atlas
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in the .env file. Please check your configuration.");
    }
    await mongoose.connect(mongoUri);
    log("✅ Successfully connected to MongoDB Atlas");
  } catch (error) {
    log(`❌ Error connecting to MongoDB: ${error}`);
    process.exit(1);
  }

  const server = await registerRoutes(app);

  // 🔹 Error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // 🔹 Serve React build in production
  if (process.env.NODE_ENV === "production") {
    const clientBuildPath = path.join(__dirname, "../client/dist");
    app.use(express.static(clientBuildPath));

    app.get("*", (_req, res) => {
      res.sendFile(path.resolve(clientBuildPath, "index.html"));
    });
  } else {
    await setupVite(app, server);
  }

  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen(port, () => {
    log(`🚀 serving on http://localhost:${port}`);
  });
})();
