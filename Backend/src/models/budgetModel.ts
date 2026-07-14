import { pool } from "../config/db";

export const getBudgetsByUser = async (userId: number) => {
  const result = await pool.query(
    `SELECT * FROM budgets WHERE user_id = $1`,
    [userId]
  );
  return result.rows;
};

export const createBudget = async (
  userId: number,
  category: string,
  monthlyLimit: number
) => {
  const result = await pool.query(
    `INSERT INTO budgets (user_id, category, monthly_limit)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [userId, category, monthlyLimit]
  );
  return result.rows[0];
};