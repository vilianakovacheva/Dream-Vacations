import { useAuthContext } from '../../contexts/AuthContext';
import styles from './Profile.module.css'
import { useGetAllVacationsForUser } from '../../hooks/useVacations';
import Vacation from './vacation/Vacation';

export default function Profile() {
    const { userId, email } = useAuthContext();

    const [vacations] = useGetAllVacationsForUser(userId);
    return (
        <>
            <div className={styles.profile}>
                <img
                    src="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png"
                    className={styles.profileImg}
                    alt=""
                />
                <p className={styles["user-email"]}>~~{email}~~</p>
                <h1 className={styles.added}>Vacations created by you:</h1>
            </div>

            {vacations.length > 0
                ? (<div className={styles["vacation-container"]}>{vacations.map(vacation => <Vacation key={vacation._id} {...vacation} />)}</div>)
                : (<h1 className={styles["no-added"]}>🌴 There are no vacations created by you yet! 🌴</h1>)}
        </>


    );
}