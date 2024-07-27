import withAuth from '../../HOC/withAuth';
import { useAuthContext } from '../../contexts/AuthContext';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header({
    auth
}) {
    //const { isAuthenticated } = useAuthContext(); {/* Without HOC */}
    const {isAuthenticated} = auth;

    return (
        <header>
            <Link to="/" className={styles.logo}>
                <img src="https://www.pngall.com/wp-content/uploads/8/Vector-Travel-PNG-Free-Download.png" className={styles['logo-img']} alt="Travel Logo" />
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
                {isAuthenticated
                    ? (
                        <>
                            <li>
                                <Link to="/vacations/create">Create Vacation</Link>
                            </li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/logout">Logout</Link>
                            </li>
                        </>)
                    : (
                        <>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </>
                    )}

            </ul>
        </header>

    );
}

const EnhancedHeader = withAuth(Header);

export default EnhancedHeader;