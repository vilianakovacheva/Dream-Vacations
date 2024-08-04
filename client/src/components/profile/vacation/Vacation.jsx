import { Link } from 'react-router-dom';
import styles from '../Profile.module.css'

export default function Vacation({
    imageUrl,
    destination,
    _id
}) {
    return (
        <div className={styles.card}>
            <img
                src={imageUrl}
                alt=""
                className={styles["card-image"]}
            />
            <div className={styles["card-content"]}>
                <div className={styles.destination}>📍{destination}</div>
                <Link to={`/vacations/${_id}/details`} className={styles.button}>
                    📃 More Details
                </Link>
            </div>
        </div>
    );
}