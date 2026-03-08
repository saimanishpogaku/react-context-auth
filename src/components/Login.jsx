import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login() {
  const { user, login, logout } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    login(username, password)
    // After login, redirect to dashboard
    navigate("/dashboard");
  }

  return (
    <div className="login-container">
      <form className="login-card">
        Username: <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}></input>
        Password: <input type="text" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>

        <button onClick={() => handleLogin()}>Login</button>
      </form> 
    </div>
  );
}

export default Login;