// Ce composant sera utilisé pour afficher le champ de saisie de tâche.

import styles from './TaskInput.module.css'
export const TaskInput = () => {
    return (
        <div className={`box ${styles.element}`}>
            <h2 className={styles.title}> Ajoute ta nouvelle tâche</h2>
            <form className={styles.container}>
                <input className={styles.input} type="text" placeholder='Indiquez un titre de tâche explicite.' />
                <button className="button-primary" type='submit'>Ajouter</button>
            </form>

        </div>
    );
};