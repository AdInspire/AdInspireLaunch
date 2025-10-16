import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs"; // <-- added for safety check

dotenv.config(); // Load .env

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// --- Enable CORS for frontend ---
app.use(cors({
  origin: process.env.FRONTEND_URL || "https://adinspire.in",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// --- Logging middleware ---
app.use((req, res, next) => {
  const start = Date.now();
  const pathUrl = req.path;
  let capturedJsonResponse: Record<string, any> | undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (pathUrl.startsWith("/api")) {
      let logLine = `${req.method} ${pathUrl} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      if (logLine.length > 120) logLine = logLine.slice(0, 119) + "…";
      log(logLine);
    }
  });

  next();
});

(async () => {
  // --- Connect to MongoDB ---
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) throw new Error("MONGO_URI is not defined in .env");
    await mongoose.connect(mongoUri);
    log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    log(`❌ Error connecting to MongoDB: ${error}`);
    process.exit(1);
  }

  const server = await registerRoutes(app);

  // --- Global error handler ---
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    log(`❌ Error: ${message}`);
  });

  // --- Serve React build in production ---
  if (process.env.NODE_ENV === "production") {
    // Find the correct client build path dynamically
    const possiblePaths = [
      path.resolve(__dirname, "../client/dist"),
      path.resolve(__dirname, "../../client/dist"),
      path.resolve(process.cwd(), "client/dist"),
    ];

    let clientBuildPath: string | null = null;
    for (const p of possiblePaths) {
      if (fs.existsSync(path.join(p, "index.html"))) {
        clientBuildPath = p;
        break;
      }
    }

    if (clientBuildPath) {
      app.use(express.static(clientBuildPath));
      app.get("*", (_req, res) => {
        res.sendFile(path.join(clientBuildPath!, "index.html"));
      });
      log(`✅ Serving React app from ${clientBuildPath}`);
    } else {
      log("⚠️ No client build found. API routes only.");
    }
  } else {
    await setupVite(app, server);
  }

  // --- Use Render-assigned port ---
  const port = process.env.PORT || 5000;
  server.listen(Number(port), () => log(`🚀 Server running on port ${port}`));
})();
