import styles from './Home.module.css'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className={styles.home} id="home">
            <div className={styles["home-text"]}>
                <h1 className={styles.name}>Dream Vacations</h1>
                <p className={styles["first-paragraph"]}>
                    Discover your perfect getaway with Dream Vacations, where we connect
                    travelers with amazing stays and unforgettable experiences.
                    <br /> Whether you're looking for a luxurious hotel, a cozy guest house,
                    or a budget-friendly <br /> motel, we've got you covered.
                </p>
                <h2 className={styles.question}>Have a Property to List?</h2>
                <p className={styles["second-paragraph"]}>
                    If you own a hotel, guest house, or motel, <br /> join Dream Vacations to
                    reach a wider <br /> audience. Benefit from our platform to attract <br />{" "}
                    more guests and boost your bookings.
                </p>
                <Link to="/vacations" className={styles["home-btn"]}>
                    Explore Vacations
                </Link>
            </div>
        </section>
    );
}