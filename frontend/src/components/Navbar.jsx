import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Import CSS file for Navbar styles
import logoimg from "./logo.jpg";
import { Context } from "../index";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  const handleLogout = async () => {
    try {
      const response = await axios.get("your_logout_endpoint", {
        withCredentials: true,
      });
      toast.success(response.data.message);
      setIsAuthenticated(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logoimg} alt="Logo" />
        </div>
        <div className="navbar-buttons">
          <Link to="/">
            <button>Home</button>
          </Link>
          {isAuthenticated && (
            <Link to="/bookticket">
              <button>Book ticket</button>
            </Link>
          )}
          {!isAuthenticated && !isLoginPage && !isRegisterPage && (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
          {!isAuthenticated && !isRegisterPage && !isLoginPage && (
            <Link to="/register">
              <button>Register</button>
            </Link>
          )}

          {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
