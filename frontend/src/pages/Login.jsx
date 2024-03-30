import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div>
            <div>
                <h4>Login</h4>
                <form>
                    
                    <div>
                        <label htmlFor="email"></label>
                        <input
                            type="text"
                            placeholder="email"
                            autoComplete="off"
                            name="email"
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
                    <button type="submit">Login</button>
                    <p>New to this website ?</p>
                    <Link to="/register">
                        <button>Register new account</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}