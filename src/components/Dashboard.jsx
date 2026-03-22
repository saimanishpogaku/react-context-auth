import "../css/Dashboard.css";
import { useAuth } from "../hooks/useAuth";
import ProductList from "./ProductList";
import SearchBox from "./SearchBox";

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-container">
      <header>
        <h1>Welcome {user?.username}</h1>
        <SearchBox />
        <button onClick={logout} className="logout-btn-icon">
          <span className="icon">⎋</span>
          Logout
        </button>
      </header>
      <ProductList/>
    </div>
  );
}

export default Dashboard;