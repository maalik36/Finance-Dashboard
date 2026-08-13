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
{transactions.length === 0 && (
  <p className="text-gray-500">No transactions yet. Add one above.</p>
)}
  return (
    <div>
      <h2>Transactions</h2>
      <TransactionForm onCreated={load} />
      <ul>
        <button onClick={() => client.delete(`/transactions/${t.id}`).then(load)}>
        Delete
        </button>
        <button
          className="text-blue-600"
          onClick={() => setEditing(t)}
          >
          Edit
        </button>
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