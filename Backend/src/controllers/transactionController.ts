import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import {
  getTransactionsByUser,
  createTransaction
} from "../models/transactionModel";
import { getMonthlySummary } from "../models/transactionModel";
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
export const getMonthlySummaryController = async (req: AuthRequest, res: Response) => {
  try {
    const summary = await getMonthlySummary(req.user!.id);
    return res.json(summary);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};
export const deleteTransaction = async (req: AuthRequest, res: Response) => {
  await pool.query(`DELETE FROM transactions WHERE id = $1 AND user_id = $2`, [
    req.params.id,
    req.user!.id
  ]);
  return res.json({ message: "Deleted" });
};