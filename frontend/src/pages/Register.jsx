import { Link, useLocation } from "react-router-dom";

export default function Login() {
  const location = useLocation();

  return (
    <div>
        <h2>Register</h2>
      <form>
        <div>
          <label htmlFor="username"> </label>
          <input
            type="text"
            placeholder="First Name"
            autoComplete="off"
            name="First Name"
          />
        </div>
        <div>
          <label htmlFor="username"> </label>
          <input
            type="text"
            placeholder="Last Name"
            autoComplete="off"
            name="Last Name"
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            placeholder="email"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            placeholder="password"
            name="password"
            id="password"
          />
        </div>
        {location.pathname === '/register' && (
          <button type="submit">Register</button>
        )}
      </form>
        <h5>Already have an account ?</h5>
        <Link to="/login">
            <button>Log in</button>
        </Link>
    </div>
  );
}
