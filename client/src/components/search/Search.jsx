import styles from './Search.module.css'
import { useState, useEffect } from 'react';
import { get } from '../../api/requester';
import { Link } from 'react-router-dom';

//const BASE_URL = 'http://localhost:3030/data/vacations';
const BASE_URL = `${import.meta.env.VITE_BASE_URL}/data/vacations`;

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [filteredVacations, setFilteredVacations] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await get(`${BASE_URL}`);
            setFilteredVacations(response);
        })();
    }, []);

    const handleSearch = async () => {
        if (searchValue) {
            const response = await get(`${BASE_URL}?where=destination%20LIKE%20%22${searchValue}%22`);
            setFilteredVacations(response);
        } else {
            alert('Please write the destination you want to search for first');
        }
    };

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <>
            <div className={styles["search-container"]}>
                <input type="search" className={styles["search-input"]} placeholder="Search for Vacations" value={searchValue} onChange={handleInputChange} />
                <button className={styles["search-button"]} onClick={handleSearch}>Search</button>
            </div>
            <h1 className={styles.condition}>Search by Destination:</h1>
            {filteredVacations.length > 0
                ? (
                    <div className={styles["cards-container"]}>
                        {filteredVacations.map((vacation) => (
                            <div className={styles.card} key={vacation._id}>
                                <img
                                    src={vacation.imageUrl}
                                    alt=""
                                    className={styles["card-image"]}
                                />
                                <div className={styles["card-content"]}>
                                    <div className={styles.price}>💵 ${vacation.price}</div>
                                    <div className={styles.destination}>📍 {vacation.destination}</div>
                                    <div className={styles.details}>🌟 {vacation.period} nights, {vacation.stars}-star hotel</div>
                                    <div className={styles.accommodation}>🏨 {vacation.accommodation}</div>
                                    <Link to={`/vacations/${vacation._id}/details`} className={styles.button}>
                                        📃 More Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )
                : (
                    <h2 className={styles["no-vacations"]}>
                        No vacations found...
                    </h2>
                )}
        </>

    );
}