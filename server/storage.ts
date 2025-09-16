import { type Contact, type InsertContact } from "@shared/schema";
import { ContactModel } from "./models/Contact";

export interface IStorage {
  getContact(id: string): Promise<Contact | null>;
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
}

export class MongoStorage implements IStorage {
  async getContact(id: string): Promise<Contact | null> {
    return await ContactModel.findById(id).lean();
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const newContact = new ContactModel(insertContact);
    await newContact.save();
    return newContact.toObject();
  }

  async getAllContacts(): Promise<Contact[]> {
    return await ContactModel.find({}).lean();
  }
}

export const storage = new MongoStorage();