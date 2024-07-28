import { useForm } from '../../hooks/useForm';
import { useCreateVacation } from '../../hooks/useVacations';
import { useNavigate } from 'react-router-dom';
import styles from './VacationCreate.module.css'
import { useState } from 'react';


const initialValues = {
    imageUrl: '',
    price: '',
    destination: '',
    accommodation: '',
    stars: '',
    period: '',
    description: '',
    entertainment: ''
}

export default function VacationCreate() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const createVacation = useCreateVacation();

    const createHandler = async (values) => {
        if(!values.price || !values.destination || !values.accommodation || !values.stars || !values.period || !values.description || !values.entertainment) {
            setError('All fields are required!');
            return;
        }

        if(!/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp))$/.test(values.imageUrl)) {
            setError('A valid image url is required!')
            return;
        }

        if(values.price < 0) {
            setError('The price cannot be a negative value!');
            return;
        }

        if(values.price > 9999999999) {
            setError('The price has a maximum value of $9999999999');
            return;
        }

        if(values.destination.length > 10) {
            setError('The destination must be a maximum 10 characters long!');
            return;
        }

        if(values.stars > 5 || values.stars < 1) {
            setError('The stars have minimum value of 1 and a maximum value of 5!');
            return;
        }

        if(values.period < 1) {
            setError('The nights have a minimum value of 1!');
            return;
        }

        if(values.period > 1000) {
            setError('The nights have a maximum value of 1000!');
            return;
        }

        try {
            await createVacation(values);
            navigate('/vacations');
        } catch (err) {
            setError(err.message);
        }
    }

    const { values, changeHandler, submitHandler } = useForm(initialValues, createHandler);

    return (
        <div className={styles.container}>
            <h1 className={styles["add-vacation"]}>Add Vacation</h1>
            <form onSubmit={submitHandler}>
            <label htmlFor="imageUrl">Image:</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={values.imageUrl}
                    onChange={changeHandler}
                    placeholder="https:...." />
                <br />
                <br />
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={values.price}
                    onChange={changeHandler}
                    placeholder={1630} />
                <br />
                <br />
                <label htmlFor="destination">Destination:</label>
                <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={values.destination}
                    onChange={changeHandler}
                    placeholder="Paris"
                />
                <br />
                <br />
                <label htmlFor="accommodation">Accommodation:</label>
                <input
                    type="text"
                    id="accommodation"
                    name="accommodation"
                    value={values.accommodation}
                    onChange={changeHandler}
                    placeholder="Altona"
                />
                <br />
                <br />
                <label htmlFor="stars">Stars:</label>
                <input
                    type="number"
                    id="stars"
                    name="stars"
                    value={values.stars}
                    onChange={changeHandler}
                    placeholder={4} />
                <br />
                <br />
                <label htmlFor="period">Period(number of nights):</label>
                <input
                    type="number"
                    id="period"
                    name="period"
                    value={values.period}
                    onChange={changeHandler}
                    placeholder={7} />
                <br />
                <br />
                <label htmlFor="description">Description of the accommodation:</label>
                <textarea
                    id="description"
                    name="description"
                    value={values.description}
                    onChange={changeHandler}
                    cols={56}
                    rows={7}
                    placeholder="Quiet Paris, practical Paris, this is what the Altona hotel offers you, ideally located near the Gare du Nord and Gare de l'Est, a few minutes from Place de la République. The Sacré-Coeur basilica and Montmartre are also within walking distance of the hotel. In short, Paris is at your feet! In a beautiful building from the beginning of the century, the Altona hotel offers you a personalized welcome!"
                />
                <label htmlFor="entertainment">What can you do there?:</label>
                <textarea
                    id="entertainment"
                    name="entertainment"
                    value={values.entertainment}
                    onChange={changeHandler}
                    cols={56}
                    rows={2}
                    placeholder="You can visit the Eiffel Tower, Louvre Museum, Arc de Triomphe, Palace of Versailles."
                />

                {error && (
                    <p>
                        <span style={{ fontSize: '18px', color: 'red' }}>
                            {error}
                        </span>
                    </p>
                )}

                <input type="submit" defaultValue="Add Vacation" />
            </form>
        </div>

    );
}