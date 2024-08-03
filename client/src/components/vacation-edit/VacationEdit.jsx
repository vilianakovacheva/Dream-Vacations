import { useNavigate, useParams } from 'react-router-dom';
import styles from './VacationEdit.module.css'
import { useGetOneVacation } from '../../hooks/useVacations';
import { useForm } from '../../hooks/useForm';
import * as vacationsAPI from '../../api/vacations-api';
import { useState } from 'react';

export default function VacationEdit() {
    const navigate = useNavigate();
    const { vacationId } = useParams();
    const [vacation] = useGetOneVacation(vacationId);

    const [error, setError] = useState('');

    const { values, changeHandler, submitHandler } = useForm(vacation, async (values) => {
        if (!values.price || !values.destination || !values.accommodation || !values.stars || !values.period || !values.description || !values.entertainment || !values.contact || !values.email) {
            setError('All fields are required!');
            return;
        }

        if (!/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp))$/.test(values.imageUrl)) {
            setError('A valid image url is required!')
            return;
        }

        if (values.price < 0) {
            setError('The price cannot be a negative value!');
            return;
        }

        if (values.price > 9999999999) {
            setError('The price has a maximum value of $9999999999');
            return;
        }

        if (values.destination.length > 15) {
            setError('The destination must be a maximum 15 characters long!');
            return;
        }

        if (values.stars > 5 || values.stars < 1) {
            setError('The stars have minimum value of 1 and a maximum value of 5!');
            return;
        }

        if (values.period < 1) {
            setError('The nights have a minimum value of 1!');
            return;
        }

        if (values.period > 1000) {
            setError('The nights have a maximum value of 1000!');
            return;
        }

        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
            setError('This is not a valid email!');
            return;
        }

        try {
            await vacationsAPI.update(vacationId, values);

            navigate(`/vacations/${vacationId}/details`);
        } catch (err) {
            setError(err.message);
        }
    }, true);

    return (
        <div className={styles.container}>
            <h1 className={styles.edit}>Edit Vacation</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="imageUrl">Image:</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    onChange={changeHandler}
                    value={values.imageUrl}
                    placeholder="https:...." />
                <br />
                <br />
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    onChange={changeHandler}
                    value={values.price}
                    placeholder={1630}
                />
                <br />
                <br />
                <label htmlFor="destination">Destination:</label>
                <input
                    type="text"
                    id="destination"
                    name="destination"
                    onChange={changeHandler}
                    value={values.destination}
                    placeholder="Paris"
                />
                <br />
                <br />
                <label htmlFor="accommodation">Accommodation:</label>
                <input
                    type="text"
                    id="accommodation"
                    name="accommodation"
                    onChange={changeHandler}
                    value={values.accommodation}
                    placeholder="Altona"
                />
                <br />
                <br />
                <label htmlFor="stars">Stars:</label>
                <input
                    type="number"
                    id="stars"
                    name="stars"
                    onChange={changeHandler}
                    value={values.stars}
                    placeholder={4}
                />
                <br />
                <br />
                <label htmlFor="period">Period(number of nights):</label>
                <input
                    type="number"
                    id="period"
                    name="period"
                    onChange={changeHandler}
                    value={values.period}
                    placeholder={7}
                />
                <br />
                <br />
                <label htmlFor="description">Descrption of the accommodation:</label>
                <textarea
                    id="description"
                    name="description"
                    onChange={changeHandler}
                    value={values.description}
                    cols={56}
                    rows={7}
                    placeholder="Quiet Paris, practical Paris, this is what the Altona hotel offers you, ideally located near the Gare du Nord and Gare de l'Est, a few minutes from Place de la République. The Sacré-Coeur basilica and Montmartre are also within walking distance of the hotel. In short, Paris is at your feet! In a beautiful building from the beginning of the century, the Altona hotel offers you a personalized welcome!"
                />
                <label htmlFor="entertainment">What can you do there?:</label>
                <textarea
                    id="entertainment"
                    name="entertainment"
                    onChange={changeHandler}
                    value={values.entertainment}
                    cols={56}
                    rows={2}
                    placeholder="You can visit the Eiffel Tower, Louvre Museum, Arc de Triomphe, Palace of Versailles."
                />
                <label htmlFor="contact">Contact:</label>
                <input
                    type="text"
                    id="contact"
                    name="contact"
                    onChange={changeHandler}
                    value={values.contact}
                    placeholder="0877777777" />
                <br />
                <br />
                <label htmlFor="email">Hotel's email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={changeHandler}
                    value={values.email}
                    placeholder="hotel@gmail.com" />
                <br />
                <br />

                {error && (
                    <p>
                        <span style={{ fontSize: '18px', color: 'red' }}>
                            {error}
                        </span>
                    </p>
                )}
                <input type="submit" defaultValue="Edit Vacation" />
            </form>
        </div>

    );
}