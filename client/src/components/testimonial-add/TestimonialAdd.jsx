import { useNavigate } from 'react-router-dom';
import styles from './TestimonialAdd.module.css'
import { useCreateTestimonial } from '../../hooks/useTestimonials';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

const initialValues = {
    testimonial: ''
}

export default function TestimonialAdd() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const createTestimonial = useCreateTestimonial();

    const createHandler = async (values) => {
        if (!values.testimonial) {
            setError('Please write your testimonial!');
            return;
        }

        try {
            await createTestimonial(values);
            navigate('/testimonials');
        } catch (err) {
            setError(err.message);
        }
    }

    const { values, changeHandler, submitHandler } = useForm(initialValues, createHandler);

    return (
        <>
            <h1 className={styles["testimonial-heading"]}>Add Testimonial:</h1>
            <p className={styles["testimonial-paragraph"]}>
                Write your opinion about us.
                <br />
                Are you satisfied with us and our organization?
            </p>
            <form className={styles["testimonial-container"]} onSubmit={submitHandler}>
                <textarea
                    className={styles["testimonial-input"]}
                    name="testimonial"
                    value={values.testimonial}
                    onChange={changeHandler}
                    placeholder="Write your testimonial..."
                />

                {error && (
                    <p>
                        <span style={{ fontSize: '18px', color: 'red' }}>
                            {error}
                        </span>
                    </p>
                )}

                <input className={styles["add-testimonial-btn"]} type="submit" value="Add Testimonial" />
            </form>
        </>


    );
}