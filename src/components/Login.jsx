import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

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
    <div>
      Username: <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}></input>
      Password: <input type="text" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>

      <button onClick={() => handleLogin()}>
        Login
      </button>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Login;