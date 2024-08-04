import styles from './Profile.module.css'

export default function Profile() {
    return (
        <>
            <div className={styles.profile}>
                <img
                    src="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png"
                    className={styles.profileImg}
                    alt=""
                />
                <p className={styles["user-email"]}>~~peter@abv.bg~~</p>
                <h1 className={styles.added}>Added vacations:</h1>
            </div>
            <h1 className={styles["no-added"]}>🌴 There are no added vacations from you yet! 🌴</h1>
            <div className={styles["vacation-container"]}>

                <div className={styles.card}>
                    <img
                        src="https://meditravel.com/wp-content/uploads/2019/07/istanbul-a-city-that-never-sleeps.jpg"
                        alt=""
                        className={styles["card-image"]}
                    />
                    <div className={styles["card-content"]}>
                        <div className={styles.destination}>📍 Istanbul</div>
                        <a href="#" className={styles.button}>
                            📃 More Details
                        </a>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="https://bgrodina.com/wp-content/uploads/2021/12/verbier-swiss-winter.jpg"
                        alt=""
                        className={styles["card-image"]}
                    />
                    <div className={styles["card-content"]}>
                        <div className={styles.destination}>📍 Bansko</div>
                        <a href="#" className={styles.button}>
                            📃 More Details
                        </a>
                    </div>
                </div>
            </div>
        </>


    );
}