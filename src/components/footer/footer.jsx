// Ce composant est utilisé pout afficher le message de tâche fini.
import styles from './Footer.module.css';

export const Footer = ({ completedTasks }) => {
    if (completedTasks) {
        return (
            <footer>
                <code className={styles.footer}>
                    Avec TaskFlow tu as éliminé {completedTasks} {completedTasks > 1 ? "taches." : 'tache.'}
                </code>
            </footer>
        );
    }
    return null;

};