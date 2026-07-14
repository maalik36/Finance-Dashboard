import { pool } from "../config/db";

export const getTransactionsByUser = async (userId: number) => {
  const result = await pool.query(
    `SELECT * FROM transactions WHERE user_id = $1 ORDER BY date DESC`,
    [userId]
  );
  return result.rows;
};

export const createTransaction = async (
  userId: number,
  amount: number,
  category: string,
  type: "income" | "expense",
  description: string,
  date: string
) => {
  const result = await pool.query(
    `INSERT INTO transactions (user_id, amount, category, type, description, date)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING *`,
    [userId, amount, category, type, description, date]
  );
  return result.rows[0];
};