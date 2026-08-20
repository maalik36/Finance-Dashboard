import { useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../api/client";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await client.post("/auth/register", { name, email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch {
      setError("Registration failed");
    }
  };

  return (
    <>
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
    </>
  );
};

export default RegisterPage;
        