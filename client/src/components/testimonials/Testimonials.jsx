import styles from './Testimonials.module.css'
import { Link } from 'react-router-dom';

export default function Testimonials() {
    return (
        <>
            <h1 className={styles.heading}>Testimonials:</h1>
            <p className={styles.guest}>
                Login or register(if you don't have an account) to write your testimonial!
            </p>
            <Link to="/testimonials/add" className={styles["btn-add-testimonial"]}>
                Add Testimonial
            </Link>
            <div className={styles["testimonials-container"]}>
                <div className={styles.testimonial}>
                    <h1 className={styles.quote}>❝</h1>
                    <p>
                        Dream Vacations made planning our family holiday a breeze! The variety
                        of accommodations available meant we found the perfect guest house that
                        felt like a home away from home. The booking process was seamless, and
                        we couldn't be happier with our experience.
                    </p>
                    <p>--john@abv.bg--</p>
                </div>
                <div className={styles.testimonial}>
                    <h1 className={styles.quote}>❝</h1>
                    <p>
                        As a hotel owner, listing my property on Dream Vacations was one of the
                        best decisions I've made. The platform is user-friendly, and I've seen a
                        significant increase in bookings. The support team is fantastic and
                        always ready to help.
                    </p>
                    <p>--mary@abv.bg--</p>
                </div>
                <div className={styles.testimonial}>
                    <h1 className={styles.quote}>❝</h1>
                    <p>
                        Staying at one of the motels listed on Dream Vacations was a great
                        experience. It was affordable, comfortable, and exactly what I needed
                        for my road trip. I'll definitely use Dream Vacations for my future
                        travels!
                    </p>
                    <p>--anna@abv.bg--</p>
                </div>
                <div className={styles.testimonial}>
                    <h1 className={styles.quote}>❝</h1>
                    <p>
                        Dream Vacations offers an incredible range of destinations and
                        accommodations. I booked a luxurious beach resort for my anniversary,
                        and it exceeded all our expectations. The best part was the competitive
                        pricing and exceptional customer service.
                    </p>
                    <p>--carlos@abv.bg--</p>
                </div>
                <div className={styles.testimonial}>
                    <h1 className={styles.quote}>❝</h1>
                    <p>
                        I used Dream Vacations to book a mountain retreat, and it was the
                        perfect escape. The detailed property descriptions and photos helped me
                        choose the right place, and the entire process was smooth and
                        hassle-free. Highly recommend!
                    </p>
                    <p>--rachel@abv.bg--</p>
                </div>
            </div>
        </>

    );
}