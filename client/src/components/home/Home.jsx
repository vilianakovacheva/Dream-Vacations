import styles from './Home.module.css'

export default function Home() {
    return (
        <section className={styles.home} id="home">
            <div className={styles["home-text"]}>
                <h1>Dream Vacations</h1>
                <p className={styles["first-paragraph"]}>
                    Discover your perfect getaway with Dream Vacations, where we connect
                    travelers with amazing stays and unforgettable experiences.
                    <br /> Whether you're looking for a luxurious hotel, a cozy guest house,
                    or a budget-friendly motel,
                    <br /> we've got you covered.
                </p>
                <h2>Have a Property to List?</h2>
                <p className={styles["second-paragraph"]}>
                    If you own a hotel, guest house, or motel, <br /> join Dream Vacations to
                    reach a wider <br /> audience. Benefit from our platform to attract <br />{" "}
                    more guests and boost your bookings.
                </p>
                <a href="#" className={styles["home-btn"]}>
                    Explore Vacations
                </a>
            </div>
        </section>
    );
}