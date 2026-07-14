import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from "recharts";

interface Transaction {
  amount: number;
  type: "income" | "expense";
  date: string;
}

const Charts = ({ transactions }: { transactions: Transaction[] }) => {
  const monthlyData = [
    // TODO: aggregate transactions by month
  ];

  const incomeTotal = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenseTotal = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const pieData = [
    { name: "Income", value: incomeTotal },
    { name: "Expenses", value: expenseTotal }
  ];

  const colors = ["#52c41a", "#ff4d4f"];

  return (
    <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
      <div style={{ width: 400, height: 300 }}>
        <h3>Income vs Expenses</h3>
        <PieChart>
          <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100}>
            {pieData.map((entry, index) => (
              <Cell key={entry.name} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div style={{ width: 400, height: 300 }}>
        <h3>Monthly Trend (placeholder)</h3>
        <ResponsiveContainer>
          <LineChart data={monthlyData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="expenses" stroke="#ff4d4f" />
            <Line type="monotone" dataKey="income" stroke="#52c41a" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;