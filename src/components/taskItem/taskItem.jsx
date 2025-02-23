// Ce composant est utilisé pour afficher une tâche.

import styles from "./taskItem.module.css";

export const TaskItem = ({ task, editTask, deleteTask }) => {
    console.log(task);
    return (

        <li className={`${styles.container} ${task.completed ? styles.success : styles.default}`}
            onClick={() => editTask(task.id, !task.completed)} >
            <div className={styles.item}>
                <div className={`${styles.id} ${styles.idDefault}`}>
                    {task.id}
                </div>
                <div className={task?.completed ? styles.contentSuccess : styles.contentDefault}>
                    {task.title}
                </div>
            </div>
            <button className="button-primary" onClick={(e) => {
                e.stopPropagation();
                deleteTask(task.id)
            }}>
                Supprimer
            </button>
        </li>

    );
}