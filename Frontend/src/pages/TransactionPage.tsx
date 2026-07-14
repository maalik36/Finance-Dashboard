import { useEffect, useState } from "react";
import client from "../api/client";
import TransactionForm from "../components/TransactionForm";

interface Transaction {
  id: number;
  amount: number;
  type: "income" | "expense";
  category: string;
  description: string;
  date: string;
}

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const load = () => {
    client.get("/transactions").then((res) => setTransactions(res.data));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <TransactionForm onCreated={load} />
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.date} — {t.category} — {t.type} — ${t.amount} ({t.description})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsPage;