import { useAuthContext } from '../../contexts/AuthContext';
import { useGetAllTestimonials } from '../../hooks/useTestimonials';
import styles from './Testimonials.module.css'
import { Link } from 'react-router-dom';
import TestimonialListItem from './testimonial-list-item/TestimonialListItem';

export default function Testimonials() {
    const [testimonials] = useGetAllTestimonials();
    const { isAuthenticated } = useAuthContext();
    return (
        <>
            <h1 className={styles.heading}>Testimonials:</h1>
            {isAuthenticated
                ? (
                    <Link to="/testimonials/add" className={styles["btn-add-testimonial"]}>
                        Add Testimonial
                    </Link>
                )
                : (
                    <p className={styles.guest}>
                        Login or register(if you don't have an account) to write your testimonial!
                    </p>
                )
            }

            {testimonials.length > 0
                ? <div className={styles["testimonials-container"]}>{testimonials.map(testimonial => <TestimonialListItem key={testimonial._id} {...testimonial} email={testimonial._ownerId.email}/>)}</div>
                : <h2 className={styles["noFound-testimonials"]}>There are no testimonials yet!</h2>
            }
        </>

    );
}