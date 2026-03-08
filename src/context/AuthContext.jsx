import { createContext, useState, useEffect, useLayoutEffect } from "react";

// create context
export const AuthContext = createContext();

// provider component
export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user,setUser] = useState(null);
  const [loading, setLoading] = useState(true);  // NEW
  
  // Load user from localStorage only once
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      console.log("isAuthenticated",isAuthenticated)
    }

    setLoading(false);  // Done loading
  }, []);

  const login = (username, password) => {
    const users = [
      {
        id: 1,
        username: "SAI",
        password: "vite",
        phone: "90xxxxxxxx"
      },
      {
        id: 2,
        username: "MANISH",
        password: "momy",
        phone: "90xxxxxxxx"
      },
    ]
    setUsername(username);
    setPassword(password);
    console.log(username,"....",password)
    let user = users.find((u) => (u.username === username && u.password === password))
    if(user != null){
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const isAuthenticated = !!user
  console.log(isAuthenticated)

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};