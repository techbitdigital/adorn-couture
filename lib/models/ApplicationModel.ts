import mongoose, { Schema, Document } from "mongoose";

export interface IApplication extends Document {
  fullName: string;
  email: string;
  phone: string;
  course: string;
  experienceLevel: string;
  message?: string;
  status: "pending" | "approved" | "enrolled" | "rejected";
  createdAt: Date;
}

const ApplicationSchema = new Schema<IApplication>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    course: { type: String, required: true },
    experienceLevel: { type: String, required: true },
    message: { type: String },
    status: {
      type: String,
      enum: ["pending", "approved", "enrolled", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Application ||
  mongoose.model<IApplication>("Application", ApplicationSchema);