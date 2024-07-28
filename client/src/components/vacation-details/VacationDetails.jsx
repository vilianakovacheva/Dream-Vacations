import { useParams } from 'react-router-dom';
import styles from './VacationDetails.module.css'
import { useAuthContext } from '../../contexts/AuthContext';
import { useGetOneVacation } from '../../hooks/useVacations';

export default function VacationDetails() {
    const { vacationId } = useParams();
    const { userId } = useAuthContext();
    const [vacation] = useGetOneVacation(vacationId);
    const { isAuthenticated } = useAuthContext();

    const isOwner = userId === vacation._ownerId;

    return (
        <section className={styles['vacation-details']}>
            <h1 className={styles.destination}>{vacation.destination}</h1>
            <img
                src={vacation.imageUrl}
                className={styles["destination-img"]}
                alt=""
            />
            <div className={styles["first-description"]}>
                <p className={styles["first-description-p"]}>💵 Price: ${vacation.price}</p>
                <p className={styles["first-description-p"]}>📍 Destination: {vacation.destination}</p>
                <p className={styles["first-description-p"]}>🏨 Accommodation: {vacation.accommodation}</p>
                <p className={styles["first-description-p"]}>🌟 Stars: {vacation.stars}-star</p>
                <p className={styles["first-description-p"]}>🌑 Period: {vacation.period} nights</p>
            </div>
            <div className={styles["second-description"]}>
                <h3 className={styles["heading"]}>Description of the accommodation</h3>
                <p className={styles["description-paragraph"]}>
                    {vacation.description}
                </p>
                <h3 className={styles['heading']}>What you can do there:</h3>
                <p className={styles["activities-paragraph"]}>
                    {vacation.entertainment}
                </p>
            </div>
            {/*<p className={styles.likes}>👍🏼 Likes: 3</p>*/}
            {isOwner && (
                <div className={styles["author-buttons"]}>
                    <button id="edit-button">Edit</button>
                    <button id="delete-button">Delete</button>
                </div>
            )}

            {isAuthenticated && !isOwner && (
                <div className={styles["nonauthor-button"]}>
                    <button id="like-button">Like</button>
                </div>
            )}
            {/*<p className={styles["liked-vacation"]}>You already liked this vacation!</p>*/}
        </section>

    );
}