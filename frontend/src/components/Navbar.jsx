import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Import CSS file for Navbar styles
import logoimg from './logo.jpg'


const Navbar = () => {
  const location = useLocation();

  // Function to determine if we are on the login or register page
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
        <img
            src={logoimg}
        />
        </div>

        <div className="navbar-buttons">
          {/* Render buttons based on current page */}
          {!isLoginPage && !isRegisterPage && (
            <Link to="/login">
              <button>Log in</button>
            </Link>
          )}
          {!isRegisterPage && !isLoginPage && (
            <Link to="/register">
              <button>Register</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



