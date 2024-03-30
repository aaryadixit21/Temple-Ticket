import { Link } from "react-router-dom";
import "./Login.css"; // Import the CSS file where you define your styles

export default function Login() {
    return (
        <div className="login-container">
            <div className="login-form">
                <h4>Login</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            autoComplete="off"
                            name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            id="password" 
                        />
                    </div>
                    <button type="submit">Login</button>
                    <p>New to this website?</p>
                    <Link to="/register">
                        <button className="register-button">Register new account</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}
