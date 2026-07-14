import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import {
  getTransactionsByUser,
  createTransaction
} from "../models/transactionModel";

export const getTransactions = async (req: AuthRequest, res: Response) => {
  try {
    const transactions = await getTransactionsByUser(req.user!.id);
    return res.json(transactions);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

export const addTransaction = async (req: AuthRequest, res: Response) => {
  const { amount, category, type, description, date } = req.body;
  try {
    const tx = await createTransaction(
      req.user!.id,
      amount,
      category,
      type,
      description,
      date
    );
    return res.status(201).json(tx);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};