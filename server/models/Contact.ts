import { Schema, model, Document } from 'mongoose';
import { z } from 'zod';

// 1. Zod schema for validating incoming data from your contact form
export const insertContactSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  projectDetails: z.string().min(1, { message: "Project details are required." }),
  company: z.string().optional(),
});

// 2. TypeScript type for inserting a contact (inferred from Zod schema)
export type InsertContact = z.infer<typeof insertContactSchema>;

// 3. TypeScript type for a full contact document from the database
export type Contact = InsertContact & {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
};

// 4. Mongoose schema defining the structure of the data in MongoDB
const contactSchema = new Schema<Contact & Document>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  projectDetails: { type: String, required: true },
  company: { type: String },
}, {
  // Mongoose automatically adds `createdAt` and `updatedAt` timestamps
  timestamps: true 
});

// 5. Mongoose model to interact with the 'contacts' collection in the database
export const ContactModel = model<Contact & Document>('Contact', contactSchema);