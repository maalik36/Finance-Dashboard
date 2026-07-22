import { Router } from "express";
import { auth } from "../middleware/auth";
import {
  getTransactions,
  addTransaction
} from "../controllers/transactionsController";
import { getMonthlySummaryController } from "../controllers/transactionsController";
const router = Router();

router.get("/", auth, getTransactions);
router.post("/", auth, addTransaction);
router.get("/monthly-summary", auth, getMonthlySummaryController);
router.put("/:id", auth, updateTransaction);
router.delete("/:id", auth, deleteTransaction);

export default router;