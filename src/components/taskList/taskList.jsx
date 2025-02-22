// Ce composant est utilisé pour afficher la liste des tâches.

import { TaskItem } from "../taskItem/taskItem";
import styles from "./taskList.module.css";

export const TaskList = ({ tasksList, incompletedTasks, editTask, deleteTask }) => {

    const taskList = tasksList.map((task) => <TaskItem key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} />);

    if (taskList && taskList.length > 0) {

        return (

            <div className="box">
                <h2 className={styles.title}> Il te reste encore <span className="important"> </span> tâches à accomplir !</h2>
                {tasksList && tasksList.length > 0 && (
                    <ul className={styles.container}>{taskList}</ul>
                )}
            </div>

        );
    }
    return (
        <div className="box">
            <h2 className={styles.emptyStates}> Tu n'as rien à faire ici ! Profite de ta journée</h2>
        </div>
    );

}