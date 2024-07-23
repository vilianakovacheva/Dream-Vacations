import styles from './AboutUs.module.css'

export default function AboutUs() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>Why choose Dream Vacations</h1>
                <img
                    src="https://wallpapercave.com/wp/wp10611386.jpg"
                    alt="lighthouse"
                    width={500}
                    height={300}
                />
                <p>
                    Explore our extensive list of accommodations, find exciting destinations,
                    and book your stay with ease. Join our community and make your dream
                    vacation a reality with Dream Vacations. Whether you're planning your next
                    trip, looking to offer your property to travelers, or creating vacations
                    for others, Dream Vacations is your go-to platform. Start your journey
                    with us today!
                </p>
                <img
                    src="https://yesofcorsa.com/wp-content/uploads/2018/08/Indian-Ocean-High-Quality-Wallpaper.jpg"
                    alt="lighthouse"
                    width={500}
                    height={300}
                />
            </div>
            <div className={styles.right}>
                <h1>6 Reasons why you will be SATISFIED:</h1>
                <p>★ ☆ ★ ☆ ★</p>
                <ul className={styles.list}>
                    <li>
                        <h2>Diverse Selection</h2>
                        <p>
                            From serene beach resorts to bustling city stays, find the perfect
                            spot for your next vacation.
                        </p>
                    </li>
                    <li>
                        <h2>Best Rates</h2>
                        <p>Competitive pricing ensures you get the best value.</p>
                    </li>
                    <li>
                        <h2>Exceptional Service</h2>
                        <p>
                            Our team is here to help you 24/7 for a seamless booking experience.
                        </p>
                    </li>
                    <li>
                        <h2>Easy Listing Process</h2>
                        <p>Get your property listed in just a few steps.</p>
                    </li>
                    <li>
                        <h2>Reach More Travelers</h2>
                        <p>Connect with a global audience looking for great stays.</p>
                    </li>
                    <li>
                        <h2>Maximize Bookings</h2>
                        <p>Utilize our marketing and support to fill your rooms.</p>
                    </li>
                    <img
                        src="https://www.wallpaperflare.com/static/189/104/965/earth-world-tour-illustration-wallpaper.jpg"
                        alt="lighthouse"
                        width={500}
                        height={300}
                    />
                </ul>
            </div>
        </div>

    );
}