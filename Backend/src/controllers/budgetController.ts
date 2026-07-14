import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import { getBudgetsByUser, createBudget } from "../models/budgetModel";

export const getBudgets = async (req: AuthRequest, res: Response) => {
  try {
    const budgets = await getBudgetsByUser(req.user!.id);
    return res.json(budgets);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

export const addBudget = async (req: AuthRequest, res: Response) => {
  const { category, monthlyLimit } = req.body;
  try {
    const budget = await createBudget(req.user!.id, category, monthlyLimit);
    return res.status(201).json(budget);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};