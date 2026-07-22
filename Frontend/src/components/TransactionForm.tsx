import { useState } from "react";
import client from "../api/client";

const TransactionForm = ({ onCreated }: { onCreated: () => void }) => {
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const categories = ["Food", "Rent", "Utilities", "Entertainment", "Travel"];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await client.post("/transactions", {
      amount,
      category,
      type,
      description,
      date
    });
    onCreated();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="number"
        placeholder=<select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select category</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value as "income" | "expense")}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TransactionForm;