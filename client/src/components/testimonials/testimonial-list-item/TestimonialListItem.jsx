import styles from './TestimonialListItem.module.css';

export default function TestimonialListItem({
    testimonial,
    author
}) {
    return (
        <div className={styles.testimonial}>
            <h1 className={styles.quote}>❝</h1>
            <p>
                {testimonial}
            </p>
            <p>--{author}--</p>
        </div>
    )
}