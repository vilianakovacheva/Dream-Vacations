import { Link } from 'react-router-dom';
import styles from './VacationsListItem.module.css';

export default function VacationListItem({
    _id,
    imageUrl,
    price,
    destination,
    period,
    stars,
    accommodation
}) {
    return (
        <div className={styles.card}>
            <img
                src={imageUrl}
                alt=""
                className={styles["card-image"]}
            />
            <div className={styles["card-content"]}>
                <div className={styles.price}>💵 ${price}</div>
                <div className={styles.destination}>📍 {destination}</div>
                <div className={styles.details}>🌟 {period} nights, {stars}-star hotel</div>
                <div className={styles.accommodation}>🏨 {accommodation}</div>
                <Link to={`/vacations/${_id}/details`} className={styles.button}>
                    📃 More Details
                </Link>
            </div>
        </div>
    );
}