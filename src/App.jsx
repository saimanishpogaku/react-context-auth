
// import './App.css'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { Otp } from './components/Otp';
import ProductList from "./components/ProductList";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mfa" element={<Otp />} />
          <Route path="/products" element={<ProductList/>} />
          <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
