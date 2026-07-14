import { useEffect, useState } from "react";
import client from "../api/client";
import BudgetForm from "../components/BudgetForm";

interface Budget {
  id: number;
  category: string;
  monthly_limit: number;
}

const BudgetsPage = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);

  const load = () => {
    client.get("/budgets").then((res) => setBudgets(res.data));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h2>Budgets</h2>
      <BudgetForm onCreated={load} />
      <ul>
        {budgets.map((b) => (
          <li key={b.id}>
            {b.category}: ${b.monthly_limit} / month
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetsPage;