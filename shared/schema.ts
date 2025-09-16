import { z } from 'zod';
import mongoose, { Schema, Document } from 'mongoose';

// Schema for data coming IN from the contact form
export const insertContactSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  projectDetails: z.string().min(1, { message: "Project details are required." }),
  company: z.string().optional(),
});

// Schema for the full contact document as it exists IN THE DATABASE
// This creates a single source of truth for our main 'Contact' type.
const fullContactSchema = insertContactSchema.extend({
  _id: z.string(), 
  createdAt: z.date(),
  updatedAt: z.date(),
});

// TypeScript type for the data you insert
export type InsertContact = z.infer<typeof insertContactSchema>;

// TypeScript type for the full document you get back from the database
export type Contact = z.infer<typeof fullContactSchema>;

// Mongoose schema
const mongooseContactSchema = new Schema<Contact & Document>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  projectDetails: { type: String, required: true },
  company: { type: String },
}, {
  timestamps: true 
});

// Mongoose model (checks if model exists before creating)
export const ContactModel = mongoose.models.Contact || mongoose.model<Contact & Document>('Contact', mongooseContactSchema);