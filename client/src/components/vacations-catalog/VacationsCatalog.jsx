import styles from './VacationsCatalog.module.css'

export default function VacationsCatalog() {
    return (
        <>
            <p className={styles.vacations}>Vacations:</p>
            <div className={styles["cards-container"]}>
                <div className={styles.card}>
                    <img
                        src="https://www.travelandleisure.com/thmb/nDDNqO2EctQhiIfZrxeXTF47zhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-koh-phi-phi-PLACESTHAILAND1023-09b9d347b3cd4844b4ae19e4e06a9a6d.jpg"
                        alt=""
                        className={styles["card-image"]}
                    />
                    <div className={styles["card-content"]}>
                        <div className={styles.price}>💵 $2993</div>
                        <div className={styles.destination}>📍 Thailand</div>
                        <div className={styles.details}>🌟 9 nights, 4-star hotel</div>
                        <div className={styles.accommodation}>🏨 Anantara Layan</div>
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
                        <div className={styles.price}>💵 $700</div>
                        <div className={styles.destination}>📍 Bansko</div>
                        <div className={styles.details}>🌟 5 nights, 5-star hotel</div>
                        <div className={styles.accommodation}>🏨 Grand Hotel Therme</div>
                        <a href="#" className={styles.button}>
                            📃 More Details
                        </a>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="https://i.pinimg.com/originals/35/33/ad/3533adba2e1983f7c8b9809e1d2b82ea.jpg"
                        alt=""
                        className={styles["card-image"]}
                    />
                    <div className={styles["card-content"]}>
                        <div className={styles.price}>💵 $1630</div>
                        <div className={styles.destination}>📍 Paris</div>
                        <div className={styles.details}>🌟 7 nights, 2-star hotel</div>
                        <div className={styles.accommodation}>🏨 Altona</div>
                        <a href="#" className={styles.button}>
                            📃 More Details
                        </a>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="https://www.turismoroma.it/sites/default/files/Roma%20in%20breve.jpg"
                        alt=""
                        className={styles["card-image"]}
                    />
                    <div className={styles["card-content"]}>
                        <div className={styles.price}>💵 $1700</div>
                        <div className={styles.destination}>📍 Rome</div>
                        <div className={styles.details}>🌟 6 nights, 3-star hotel</div>
                        <div className={styles.accommodation}>🏨 Madison Hotel</div>
                        <a href="#" className={styles.button}>
                            📃 More Details
                        </a>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="https://www.h-hotels.com/_Resources/Persistent/2/d/7/f/2d7f391e75e332135fab20f9d2b4d4ea2c9fa505/wien-hofburg-kutsche-01-2400x1349.jpg"
                        alt=""
                        className={styles["card-image"]}
                    />
                    <div className={styles["card-content"]}>
                        <div className={styles.price}>💵 $1699</div>
                        <div className={styles.destination}>📍 Wien</div>
                        <div className={styles.details}>🌟 7 nights, 4-star hotel</div>
                        <div className={styles.accommodation}>🏨 JUFA Hotel Wien City</div>
                        <a href="#" className={styles.button}>
                            📃 More Details
                        </a>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="https://meditravel.com/wp-content/uploads/2019/07/istanbul-a-city-that-never-sleeps.jpg"
                        alt=""
                        className={styles["card-image"]}
                    />
                    <div className={styles["card-content"]}>
                        <div className={styles.price}>💵 $990</div>
                        <div className={styles.destination}>📍 Istanbul</div>
                        <div className={styles.details}>🌟 5 nights, 5-star hotel</div>
                        <div className={styles.accommodation}>🏨 Green Park Pendik</div>
                        <a href="#" className={styles.button}>
                            📃 More Details
                        </a>
                    </div>
                </div>
            </div>
        </>

    );
}