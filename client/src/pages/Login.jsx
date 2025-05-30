import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setIsLoggedIn  }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      alert("Login failed: " + (err.response?.data?.error || "Sunucu hatası"));
    }
  };

  return (
    <div className="form-container">
      <h2 style={{ textAlign: "center" }}>Giriş Yap</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Giriş</button>
      </form>
    </div>
  );
}

export default Login;
