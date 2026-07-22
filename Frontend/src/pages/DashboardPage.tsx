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
const [monthlySummary, setMonthlySummary] = useState([]);

useEffect(() => {
  client.get("/transactions/monthly-summary")
    .then((res) => setMonthlySummary(res.data));
}, []);
  return (
    <div>
      <h2>Dashboard</h2>
      <Charts transactions={transactions} />
    </div>
    <div className="dashboard-container">
  <div className="chart-card">
    <h3>Income vs Expenses</h3>
    <Charts ... />
  </div>

  <div className="chart-card">
    <h3>Monthly Trend</h3>
    <Charts ... />
  </div>
</div>
  );
};

export default DashboardPage;