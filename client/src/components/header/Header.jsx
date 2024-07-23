import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link to="/" className={styles.logo}>
                🌴
            </Link>
            <div className={styles['bx bx-menu']} id="menu-icon" />
            <ul className={styles.navbar}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/vacations">Vacations</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
                <li>
                    <Link to="/about-us">About us</Link>
                </li>
                <li>
                    <Link to="/testimonials">Testimonials</Link>
                </li>
                {/**Guest */}
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                {/**User */}
                <li>
                    <Link to="/vacations/create">Create Vacation</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            </ul>
        </header>

    );
}