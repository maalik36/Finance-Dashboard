import { Router } from "express";
import { auth } from "../middleware/auth";
import { getBudgets, addBudget } from "../controllers/budgetsController";

const router = Router();

router.get("/", auth, getBudgets);
router.post("/", auth, addBudget);

export default router;