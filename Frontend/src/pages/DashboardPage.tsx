import { useEffect, useState } from "react";
import client from "../api/client";
import Charts from "../components/Charts";

interface Transaction {
  id: number;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string;
}

const DashboardPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    client.get("/transactions").then((res) => setTransactions(res.data));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <Charts transactions={transactions} />
    </div>
  );
};

export default DashboardPage;