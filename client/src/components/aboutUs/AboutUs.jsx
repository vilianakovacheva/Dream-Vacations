import styles from './AboutUs.module.css'

export default function AboutUs() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.whyChoose}>Why choose Dream Vacations</h1>
                <img
                    src="https://wallpapercave.com/wp/wp10611386.jpg"
                    className={styles.leftImg}
                    alt="lighthouse"
                    width={500}
                    height={300}
                />
                <p className={styles.aboutUs}>
                    Explore our extensive list of accommodations, find exciting destinations,
                    and book your stay with ease. Join our community and make your dream
                    vacation a reality with Dream Vacations. Whether you're planning your next
                    trip, looking to offer your property to travelers, or creating vacations
                    for others, Dream Vacations is your go-to platform. Start your journey
                    with us today!
                </p>
                <img
                    src="https://wallpapers.com/images/hd/most-beautiful-places-in-the-world-ixted75dnonldfh8.jpg"
                    className={styles.leftImg}
                    alt="lighthouse"
                    width={500}
                    height={300}
                />
            </div>
            <div className={styles.right}>
                <h1 className={styles.reasons}>6 Reasons why you will be SATISFIED:</h1>
                <p className={styles.stars}>★ ☆ ★ ☆ ★</p>
                <ul className={styles.list}>
                    <li className={styles.advantages}>
                        <h2 className={styles.topic}>Diverse Selection</h2>
                        <p className={styles.explanation}>
                            From serene beach resorts to bustling city stays, find the perfect
                            spot for your next vacation.
                        </p>
                    </li>
                    <li className={styles.advantages}>
                        <h2 className={styles.topic}>Best Rates</h2>
                        <p className={styles.explanation}>
                            Competitive pricing ensures you get the best value.
                        </p>
                    </li>
                    <li className={styles.advantages}>
                        <h2 className={styles.topic}>Exceptional Service</h2>
                        <p className={styles.explanation}>
                            Our team is here to help you 24/7 for a seamless booking experience.
                        </p>
                    </li>
                    <li className={styles.advantages}>
                        <h2 className={styles.topic}>Easy Listing Process</h2>
                        <p className={styles.explanation}>
                            Get your property listed in just a few steps.
                        </p>
                    </li>
                    <li className={styles.advantages}>
                        <h2 className={styles.topic}>Reach More Travelers</h2>
                        <p className={styles.explanation}>
                            Connect with a global audience looking for great stays.
                        </p>
                    </li>
                    <li className={styles.advantages}>
                        <h2 className={styles.topic}>Maximize Bookings</h2>
                        <p className={styles.explanation}>
                            Utilize our marketing and support to fill your rooms.
                        </p>
                    </li>
                    <img
                        src="https://www.wallpaperflare.com/static/189/104/965/earth-world-tour-illustration-wallpaper.jpg"
                        className={styles.rightImg}
                        alt="lighthouse"
                        width={500}
                        height={300}
                    />
                </ul>
            </div>
        </div>


    );
}