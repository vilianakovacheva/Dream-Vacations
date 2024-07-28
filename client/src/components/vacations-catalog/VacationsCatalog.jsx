import { useGetAllVacations } from '../../hooks/useVacations';
import styles from './VacationsCatalog.module.css'
import VacationListItem from './vacations-catalog-item/VacationsCatalogItem';

export default function VacationsCatalog() {
    const [vacations] = useGetAllVacations();

    return (
        <>
            <p className={styles.vacations}>Vacations:</p>
            {vacations.length > 0
                ? <div className={styles["cards-container"]}>{vacations.map(vacation => <VacationListItem key={vacation._id} {...vacation} />)}</div>
                : <h2 className={styles["noFound-vacations"]}>There are no vacations to offer you yet!</h2>
            }
        </>

    );
}