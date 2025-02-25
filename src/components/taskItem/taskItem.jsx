// Ce composant est utilisé pour afficher une tâche.
import styles from "./taskItem.module.css";

export const TaskItem = ({ task, editTask, deleteTask }) => {
    console.log(task); // Debug: Affiche la tâche dans la console

    return (
        // Élément de liste représentant une tâche, change de style selon son état (complétée ou non)
        <li
            className={`${styles.container} ${task.completed ? styles.success : styles.default}`}
            onClick={() => editTask(task.id, !task.completed)} // Permet de modifier l'état de complétion d'une tâche en cliquant dessus
        >
            <div className={styles.item}>
                {/* Affichage de l'ID de la tâche */}
                <div className={`${styles.id} ${styles.idDefault}`}>
                    {task.id}
                </div>
                {/* Affichage du titre de la tâche avec un style différent si elle est complétée */}
                <div className={task?.completed ? styles.contentSuccess : styles.contentDefault}>
                    {task.title}
                </div>
            </div>
            {/* Bouton de suppression de la tâche */}
            <button
                className="button-primary"
                onClick={(e) => {
                    e.stopPropagation(); // Empêche le déclenchement de l'événement onClick du <li>
                    deleteTask(task.id); // Supprime la tâche en appelant la fonction passée en prop
                }}
            >
                Supprimer
            </button>
        </li>
    );
};
