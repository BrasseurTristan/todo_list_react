// Ce composant est utilisé pout afficher le message de tâche fini.
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer>
            <code className={styles.footer}>
                Avec TaskFlow tu as éliminé X tâche
            </code>
        </footer>
    );
};