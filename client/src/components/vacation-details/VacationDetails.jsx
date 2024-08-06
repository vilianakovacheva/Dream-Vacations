import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './VacationDetails.module.css'
import { useAuthContext } from '../../contexts/AuthContext';
import { useGetOneVacation } from '../../hooks/useVacations';
import * as vacationsAPI from '../../api/vacations-api';
import { useAddLike, useGetAllLikes } from '../../hooks/useLikes';

export default function VacationDetails() {
    const navigate = useNavigate();
    const { vacationId } = useParams();
    const { userId } = useAuthContext();
    const [vacation] = useGetOneVacation(vacationId);
    const { isAuthenticated } = useAuthContext();
    const addLike = useAddLike();
    const [likes, dispatch] = useGetAllLikes(vacationId);

    const [error, setError] = useState('');

    const [show, setShow] = useState(false);

    const isOwner = userId === vacation._ownerId;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const gameDeleteHandler = async () => {
        try {
            await vacationsAPI.remove(vacationId);

            navigate('/vacations');
        } catch (err) {
            setError(err.message);
        }
    }

    const likeHandler = (like) => {
        dispatch({ type: "LIKE", payload: like });
    }

    const onLike = async () => {
        try {
            const like = await addLike(vacationId);

            likeHandler(like);
        } catch (err) {
            alert(err.message);
        }
    }

    const hasLiked = !!likes.find((like) => like._ownerId == userId);

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
                <p className={styles["first-description-p"]}>📞 Contact: {vacation.contact}</p>
                <p className={styles["first-description-p"]}>📧 Email: {vacation.email}</p>
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

            <p className={styles.likes}>👍🏼 Likes: {likes.length}</p>

            {isOwner && (
                <div className={styles["author-buttons"]}>
                    <Link to={`/vacations/${vacationId}/edit`} className={styles["edit-button"]} id="edit-button">Edit</Link>
                    <button className={styles["delete-button"]} onClick={handleShow} id="delete-button">Delete</button>

                    {show && (
                        <div className={styles['delete-modal']}>
                            <div className={styles['modal-content']}>
                                <button className={styles['close-btn']} onClick={handleClose}>
                                    &times;
                                </button>
                                <h5 className={styles.confirm}>Are you sure you want to delete the vacation to {vacation.destination}?</h5>
                                <p className={styles.caution}>This action cannot be undone!</p>
                                <button className={styles['yes-btn']} onClick={gameDeleteHandler}>
                                    Delete
                                </button>
                                <button className={styles['cancel-btn']} onClick={handleClose}>
                                    Cancel
                                </button>
                                {error && (
                                    <p>
                                        <span style={{ fontSize: '18px', color: 'red' }}>
                                            {error}
                                        </span>
                                    </p>
                                )}
                            </div>
                        </div>
                    )}

                </div>
            )}

            {isAuthenticated && !isOwner && !hasLiked && (
                <div className={styles["nonauthor-button"]}>
                    <button onClick={onLike} id="like-button">Like</button>
                </div>
            )}

            {hasLiked && (
                <p className={styles["liked-vacation"]}>You already liked this vacation!</p>
            )}
        </section>

    );
}