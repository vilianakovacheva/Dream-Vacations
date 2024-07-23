import styles from './TestimonialAdd.module.css'

export default function TestimonialAdd() {
    return (
        <>
            <h1 className={styles["testimonial-heading"]}>Add Testimonial:</h1>
            <p className={styles["testimonial-paragraph"]}>
                Write your opinion about us.
                <br />
                Are you satisfied with us and our organization?
            </p>
            <div className={styles["testimonial-container"]}>
                <textarea
                    className={styles["testimonial-input"]}
                    placeholder="Write your testimonial..."
                    defaultValue={""}
                />
                <button className={styles["add-testimonial-btn"]}>Add Testimonial</button>
            </div>
        </>


    );
}