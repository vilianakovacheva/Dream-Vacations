import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/404-page-6102826-5052781.png"
                className={styles["notFound-img"]}
                alt=""
            />
            <h1 className={styles.problem}>OOPSS...</h1>
            <p className={styles["notFound-p"]}>The page you were looking for doesn't exist!</p>
            <Link to="/" className={styles["notFound-a"]}>
                Go Back To Home
            </Link>
        </>

    );
}