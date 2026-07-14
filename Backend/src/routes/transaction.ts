import { Router } from "express";
import { auth } from "../middleware/auth";
import {
  getTransactions,
  addTransaction
} from "../controllers/transactionsController";

const router = Router();

router.get("/", auth, getTransactions);
router.post("/", auth, addTransaction);

export default router;