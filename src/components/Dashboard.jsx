import { useAuth } from "../hooks/useAuth";

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Welcome {user?.username}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;