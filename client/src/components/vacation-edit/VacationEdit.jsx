import styles from './VacationEdit.module.css'

export default function VacationEdit() {
    return (
        <div className={styles.container}>
            <h1 className={styles.edit}>Edit Vacation</h1>
            <form>
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder={1630}
                    defaultValue={1630}
                />
                <br />
                <br />
                <label htmlFor="destination">Destination::</label>
                <input
                    type="text"
                    id="destination"
                    name="destination"
                    placeholder="Paris"
                    defaultValue="Paris"
                />
                <br />
                <br />
                <label htmlFor="accommodation">Accommodation:</label>
                <input
                    type="text"
                    id="accommodation"
                    name="accommodation"
                    placeholder="Altona"
                    defaultValue="Altona"
                />
                <br />
                <br />
                <label htmlFor="stars">Stars:</label>
                <input
                    type="number"
                    id="stars"
                    name="stars"
                    placeholder={4}
                    defaultValue={4}
                />
                <br />
                <br />
                <label htmlFor="period">Period(number of nights):</label>
                <input
                    type="number"
                    id="period"
                    name="period"
                    placeholder={7}
                    defaultValue={7}
                />
                <br />
                <br />
                <label htmlFor="description">Descrption of the accommodation:</label>
                <textarea
                    id="description"
                    name="description"
                    cols={56}
                    rows={7}
                    placeholder="Quiet Paris, practical Paris, this is what the Altona hotel offers you, ideally located near the Gare du Nord and Gare de l'Est, a few minutes from Place de la République. The Sacré-Coeur basilica and Montmartre are also within walking distance of the hotel. In short, Paris is at your feet! In a beautiful building from the beginning of the century, the Altona hotel offers you a personalized welcome!"
                    defaultValue={
                        "Quiet Paris, practical Paris, this is what the Altona hotel offers you, ideally located near the Gare du Nord and Gare de l'Est, a few minutes from Place de la République. The Sacré-Coeur basilica and Montmartre are also within walking distance of the hotel. In short, Paris is at your feet! In a beautiful building from the beginning of the century, the Altona hotel offers you a personalized welcome!"
                    }
                />
                <label htmlFor="entertainment">What can you do there?:</label>
                <textarea
                    id="entertainment"
                    name="entertainment"
                    cols={56}
                    rows={2}
                    placeholder="You can visit the Eiffel Tower, Louvre Museum, Arc de Triomphe, Palace of Versailles."
                    defaultValue={
                        "You can visit the Eiffel Tower, Louvre Museum, Arc de Triomphe, Palace of Versailles."
                    }
                />
                <input type="submit" defaultValue="Edit Vacation" />
            </form>
        </div>

    );
}