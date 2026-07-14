import { useState } from "react";
import client from "../api/client";

const BudgetForm = ({ onCreated }: { onCreated: () => void }) => {
  const [category, setCategory] = useState("");
  const [monthlyLimit, setMonthlyLimit] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await client.post("/budgets", {
      category,
      monthlyLimit
    });
    onCreated();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Monthly limit"
        value={monthlyLimit}
        onChange={(e) => setMonthlyLimit(Number(e.target.value))}
      />
      <button type="submit">Add Budget</button>
    </form>
  );
};

export default BudgetForm;