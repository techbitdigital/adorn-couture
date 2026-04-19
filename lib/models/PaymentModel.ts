import mongoose, { Schema, Document } from "mongoose";

export interface IPayment extends Document {
  studentName: string;
  email: string;
  phone: string;
  course: string;
  amount: number;
  paymentMethod: "bank_transfer" | "cash" | "pos" | "online";
  status: "pending" | "confirmed" | "failed";
  reference: string;
  notes?: string;
  createdAt: Date;
}

const PaymentSchema = new Schema<IPayment>(
  {
    studentName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    course: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentMethod: {
      type: String,
      enum: ["bank_transfer", "cash", "pos", "online"],
      default: "bank_transfer",
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "failed"],
      default: "pending",
    },
    reference: { type: String, required: true },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Payment ||
  mongoose.model<IPayment>("Payment", PaymentSchema);