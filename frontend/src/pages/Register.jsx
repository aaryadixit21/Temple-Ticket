// Register.js

import { Link, useLocation } from "react-router-dom";
import "./Register.css"; // Import the CSS file

export default function Register() {
  const location = useLocation();

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="firstName"></label>
            <input
              type="text"
              placeholder="First Name"
              autoComplete="off"
              name="firstName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName"></label>
            <input
              type="text"
              placeholder="Last Name"
              autoComplete="off"
              name="lastName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
          </div>
          {location.pathname === '/register' && (
            <button className="register-button" type="submit">Register</button>
          )}
        </form>
        <h5>Already have an account?</h5>
        <Link to="/login">
          <button className="secondary">Log in</button>
        </Link>
      </div>
    </div>
  );
}
