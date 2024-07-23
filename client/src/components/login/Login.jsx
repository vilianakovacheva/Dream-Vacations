import styles from './Login.module.css'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className={styles.container}>
            <h1 className={styles.login}>Login</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="john@abv.bg" />
                <br />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="****" />
                <br />
                <br />
                <input type="submit" defaultValue="Login" />
            </form>
            <p className={styles.account}>
                Don't have an account? <Link to="/register">Sign up</Link>
            </p>
        </div>
    );
}