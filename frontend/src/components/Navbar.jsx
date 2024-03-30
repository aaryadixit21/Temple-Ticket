import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Function to determine if we are on the login or register page
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  return (
    <nav>
      <div>
        <div>
          <Link to="/">icon</Link>
          <div></div>
        </div>

        <div>
          {/* Render buttons based on current page */}
          {!isLoginPage && !isRegisterPage &&(
            <Link to="/login">
              <button>Log in</button>
            </Link>
          )}
          {!isRegisterPage && !isLoginPage &&(
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
