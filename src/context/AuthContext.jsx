import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock login logic
    // Accept any email/password for demo, or hardcode specific ones
    // For this demo: assume success if email is provided
    if (!email || !password)
      return { success: false, message: "Email and password required" };

    const newUser = { email, name: email.split("@")[0], isLoggedIn: true };
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);
    return { success: true };
  };

  const signup = (name, email, password) => {
    if (!name || !email || !password)
      return { success: false, message: "All fields required" };

    const newUser = { email, name, isLoggedIn: true };
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
