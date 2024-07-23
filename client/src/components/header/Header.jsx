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
                {/**Guest */}
                <li>
                    <a href="#">Login</a>
                </li>
                <li>
                    <a href="#">Register</a>
                </li>
                {/**User */}
                <li>
                    <a href="#">Create Vacation</a>
                </li>
                <li>
                    <a href="#">Profile</a>
                </li>
                <li>
                    <a href="#">Logout</a>
                </li>
            </ul>
        </header>

    );
}