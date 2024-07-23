import styles from './VacationDetails.module.css'

export default function VacationDetails() {
    return (
        <section className={styles['vacation-details']}>
            <h1 className={styles.destination}>PARIS</h1>
            <img
                src="https://i.pinimg.com/originals/35/33/ad/3533adba2e1983f7c8b9809e1d2b82ea.jpg"
                className={styles["destination-img"]}
                alt=""
            />
            <div className={styles["first-description"]}>
                <p className={styles["first-description-p"]}>💵 Price: $1630</p>
                <p className={styles["first-description-p"]}>📍 Destination: Paris</p>
                <p className={styles["first-description-p"]}>🏨 Accommodation: Altona</p>
                <p className={styles["first-description-p"]}>🌟 Stars: 4-star</p>
                <p className={styles["first-description-p"]}>🌑 Period: 7 nights</p>
            </div>
            <div className={styles["second-description"]}>
                <h3 className={styles["heading"]}>Description of the accommodation</h3>
                <p className={styles["description-paragraph"]}>
                    Quiet Paris, practical Paris, this is what the Altona hotel offers you,
                    ideally located near the Gare du Nord and Gare de l'Est, a few minutes
                    from Place de la République. The Sacré-Coeur basilica and Montmartre are
                    also within walking distance of the hotel. In short, Paris is at your
                    feet! In a beautiful building from the beginning of the century, the
                    Altona hotel offers you a personalized welcome!
                </p>
                <h3 className={styles['heading']}>What you can do there:</h3>
                <p className={styles["activities-paragraph"]}>
                    You can visit the Eiffel Tower, Louvre Museum, Arc de Triomphe, Palace of
                    Versailles.
                </p>
            </div>
            <p className={styles.likes}>👍🏼 Likes: 3</p>
            <div className={styles["author-buttons"]}>
                <button id="edit-button">Edit</button>
                <button id="delete-button">Delete</button>
            </div>
            <div className={styles["nonauthor-button"]}>
                <button id="like-button">Like</button>
            </div>
            <p className={styles["liked-vacation"]}>You already liked this vacation!</p>
            </section>

    );
}