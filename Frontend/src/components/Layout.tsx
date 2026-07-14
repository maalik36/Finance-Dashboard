import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="app">
      <nav style={{ padding: "1rem", borderBottom: "1px solid #eee" }}>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/transactions">Transactions</Link> |{" "}
        <Link to="/budgets">Budgets</Link> |{" "}
        <button onClick={logout}>Logout</button>
      </nav>
      <main style={{ padding: "1rem" }}>{children}</main>
    </div>
  );
};

export default Layout;