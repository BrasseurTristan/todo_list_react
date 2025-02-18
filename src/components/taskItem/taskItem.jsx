// Ce composant est utilisé pour afficher une tâche.

import styles from "./taskItem.module.css";

export const TaskItem = () => {

    return (

        <li className={`${styles.container} ${styles.default}`}>
            <div className={styles.item}>
                <div className={`${styles.id} ${styles.idDefault}`}>
                    Id
                </div>
                <div className={styles.contentDefault}>
                    Titre
                </div>
            </div>
            <button className="button-primary">
                Supprimer
            </button>
        </li>

    );
}