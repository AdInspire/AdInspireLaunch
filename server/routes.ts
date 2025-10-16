import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { log } from "./vite";
import { Resend } from "resend";

// Initialize Resend client using API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(app: Express): Promise<Server> {

  // --- Contact Form Submission ---
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);

      try {
        const emailRecipients = process.env.EMAIL_RECIPIENTS?.split(",") || [];
        const fromEmail = "onboarding@resend.dev";

        await resend.emails.send({
          from: fromEmail,
          to: [process.env.EMAIL_USER || "naman.jain@adinspire.in", ...emailRecipients],
          subject: `🚀 New Lead from ${validatedData.fullName}`,
          html: `
            <h1>New Contact Form Submission</h1>
            <p><strong>Name:</strong> ${validatedData.fullName}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Company:</strong> ${validatedData.company || 'N/A'}</p>
            <hr>
            <p><strong>Project Details:</strong></p>
            <p>${validatedData.projectDetails}</p>
          `,
        });

        log("✅ Email sent successfully via Resend!");
        return res.status(201).json({
          success: true,
          message: "Contact form submitted successfully",
          contact: validatedData, // send the actual form data back
        });

      } catch (emailError) {
        log(`❌ Could not send email via Resend: ${emailError}`);
        return res.status(500).json({
          success: false,
          message: "Failed to send email. Please try again later.",
        });
      }

    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors,
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
    }
  });

  // --- Get All Contacts ---
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      return res.json(contacts);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  return createServer(app);
}
