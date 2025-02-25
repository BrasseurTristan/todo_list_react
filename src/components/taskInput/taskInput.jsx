// Ce composant est utilisé pour afficher le champ de saisie de tâche.
import { useState } from 'react';
import styles from './TaskInput.module.css';
import { TaskList } from '../taskList/taskList';

export const TaskInput = ({ addTask }) => {
    // État local pour stocker le titre de la tâche en cours de saisie
    const [taskTitle, setTaskTitle] = useState("");

    // Fonction qui met à jour le titre de la tâche lorsque l'utilisateur tape
    const handleInputChange = (e) => {
        setTaskTitle(e.target.value);
    };

    // Fonction pour ajouter une nouvelle tâche
    const handleAddTask = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page lors de la soumission

        if (taskTitle.trim()) { // Vérifie que le champ n'est pas vide
            addTask(taskTitle); // Ajoute la tâche via la fonction passée en prop
            setTaskTitle(""); // Réinitialise le champ de saisie après l'ajout
        }
    };

    return (
        <div className={`box ${styles.element}`}>
            <h2 className={styles.title}>Ajoute ta nouvelle tâche</h2>
            {/* Formulaire de saisie de tâche */}
            <form className={styles.container} onSubmit={handleAddTask}>
                {/* Champ de saisie avec gestion de l'état en temps réel */}
                <input
                    className={styles.input}
                    type="text"
                    placeholder='Indiquez un titre de tâche explicite.'
                    onChange={handleInputChange}
                    value={taskTitle}
                />
                <button className="button-primary" type='submit'>Ajouter</button>
            </form>
        </div>
    );
};
