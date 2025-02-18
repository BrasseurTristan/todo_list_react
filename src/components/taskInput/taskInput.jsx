// Ce composant sera utilisé pour afficher le champ de saisie de tâche.

import { useState } from 'react';
import styles from './TaskInput.module.css'
import { TaskList } from '../taskList/taskList';

export const TaskInput = ({ addTask }) => {

    const [taskTitle, setTaskTitle] = useState("");

    const handleInputChange = (e) => {
        // On insère chaque changement capturer dans taskTitle grâce à setTaskTitle
        setTaskTitle(e.target.value);
    }
    const handleAddTask = (e) => {
        // on empêche le rechargement de la page 
        e.preventDefault();
        if (taskTitle.trim()) {
            // on utilise la fonction qu'on a importer de taskContainer pour y insérer le titre
            addTask(taskTitle);
            // On vide setTaskTitle
            setTaskTitle("");
        }
    }
    return (
        <div className={`box ${styles.element}`}>
            <h2 className={styles.title}> Ajoute ta nouvelle tâche</h2>
            {/* On éxécute la fonction handleAddTask lors de la soumission du formulaire  */}
            <form className={styles.container} onSubmit={handleAddTask}>
                {/* Dans l'input la fonction handleInputChange capture chaques changements */}
                <input className={styles.input} type="text" placeholder='Indiquez un titre de tâche explicite.' onChange={handleInputChange} value={taskTitle} />
                <button className="button-primary" type='submit'>Ajouter</button>
            </form>
        </div>
    );
};