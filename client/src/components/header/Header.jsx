import styles from './Header.module.css';

export default function Header() {
    return (
        <header>
            <a href="#" className={styles.logo}>
                🌴
            </a>
            <div className={styles['bx bx-menu']} id="menu-icon" />
            <ul className={styles.navbar}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Vacations</a>
                </li>
                <li>
                    <a href="#">Search</a>
                </li>
                <li>
                    <a href="#">About us</a>
                </li>
                <li>
                    <a href="#">Testimonials</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
                <li>
                    <a href="#">Register</a>
                </li>
            </ul>
        </header>

    );
}