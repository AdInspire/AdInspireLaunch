import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from 'nodemailer'; // 1. Import Nodemailer
import { log } from "./vite";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);

      // --- 2. REPLACED TWILIO BLOCK WITH NODEMAILER BLOCK ---
      try {
        const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_RECIPIENTS } = process.env;

        if (EMAIL_HOST && EMAIL_PORT && EMAIL_USER && EMAIL_PASS && EMAIL_RECIPIENTS) {
          const transporter = nodemailer.createTransport({
            host: EMAIL_HOST,
            port: parseInt(EMAIL_PORT, 10),
            secure: parseInt(EMAIL_PORT, 10) === 465, // only true for 465
            auth: {
              user: EMAIL_USER,
              pass: EMAIL_PASS,
            },
          });

          const mailOptions = {
            from: `"ADINSPIRE Leads" <${EMAIL_USER}>`,
            to: `${EMAIL_USER},${EMAIL_RECIPIENTS}`, // Sending the email to yourself and to recipients
            subject: `🚀 New Lead from ${contact.fullName}`,
            html: `
              <h1>New Contact Form Submission</h1>
              <p><strong>Name:</strong> ${contact.fullName}</p>
              <p><strong>Email:</strong> ${contact.email}</p>
              <p><strong>Company:</strong> ${contact.company || 'N/A'}</p>
              <hr>
              <p><strong>Project Details:</strong></p>
              <p>${contact.projectDetails}</p>
            `
          };

          await transporter.sendMail(mailOptions);
          log("✅ Email notification sent successfully.");

        } else {
          log("❌ Email environment variables not configured. Skipping notification.");
        }
      } catch (emailError) {
        log(`❌ Could not send email notification: ${emailError}`);
      }
      // ---------------------------------------------------

      return res.status(201).json({ message: "Contact form submitted successfully", contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        return res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      return res.json(contacts);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  
  const httpServer = createServer(app);

  //this is to check if the mail is being received by backend or not

  app.get("/test-mail", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "465", 10),
      secure: parseInt(process.env.EMAIL_PORT || "465", 10) === 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Test" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENTS,
      subject: "Test Email from Render",
      text: "✅ If you got this, Render SMTP works!",
    });

    res.send("✅ Test email sent successfully!");
  } catch (err) {
    res.status(500).send(`❌ Email test failed: ${err}`);
  }
});

  return httpServer;
}