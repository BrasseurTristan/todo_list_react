// Ce composant est utilisé pour afficher la liste des tâches.
import { TaskItem } from "../taskItem/taskItem";
import styles from "./taskList.module.css";

export const TaskList = ({ tasksList, incompletedTasks, editTask, deleteTask }) => {
    // Génère la liste des tâches en mappant chaque élément à un composant TaskItem
    const taskList = tasksList.map((task) => (
        <TaskItem key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} />
    ));

    // Vérifie si la liste de tâches contient au moins un élément
    if (taskList && taskList.length > 0) {
        return (
            <div className="box">
                {/* Affiche un message avec le nombre de tâches restantes */}
                <h2 className={styles.title}>
                    Il te reste encore <span className="important">{incompletedTasks}</span> tâches à accomplir !
                </h2>
                {/* Affiche la liste des tâches si elle existe et n'est pas vide */}
                {tasksList && tasksList.length > 0 && (
                    <ul className={styles.container}>{taskList}</ul>
                )}
            </div>
        );
    }

    // Affiche un message lorsque la liste de tâches est vide
    return (
        <div className="box">
            <h2 className={styles.emptyStates}> Tu n'as rien à faire ici ! Profite de ta journée</h2>
        </div>
    );
};
