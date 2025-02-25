import { useState } from 'react'
import { Footer } from './footer/footer'
import { Header } from './header/header'
import { TaskInput } from './taskInput/taskInput'
import { TaskList } from './taskList/taskList'
// Ce composant est le conteneur principal qui gère l'état des tâches
export const TaskContainer = () => {

    // État local pour stocker la liste des tâches
    const [tasksList, setTasksList] = useState([]);

    // Fonction pour ajouter une nouvelle tâche
    const addTask = (title) => {
        const newTask = {
            id: tasksList.length ? tasksList[tasksList.length - 1].id + 1 : 1, // Génère un ID unique
            title: title,
            completed: false, // Par défaut, la tâche n'est pas complétée
        };

        // Mise à jour de l'état avec la nouvelle tâche ajoutée
        setTasksList([...tasksList, newTask]);
    };

    // Fonction pour modifier l'état de complétion d'une tâche
    const editTask = (id, completedValue) => {
        setTasksList(
            tasksList.map((task) =>
                task.id === id ? { ...task, completed: completedValue } : task
            )
        );
    };

    // Fonction pour supprimer une tâche de la liste
    const deleteTask = (id) => {
        setTasksList(tasksList.filter((task) => task.id !== id));
    };

    // Fonction pour obtenir le nombre de tâches complétées et non complétées
    const getTaskCount = () => {
        const completedTasks = tasksList.filter((task) => task?.completed).length;
        const incompletedTasks = tasksList.length - completedTasks;
        return { completedTasks, incompletedTasks };
    };

    // Extraction des données de comptage des tâches
    const { completedTasks, incompletedTasks } = getTaskCount();

    return (
        <main>
            <Header /> {/* Affiche l'en-tête de l'application */}
            <TaskInput addTask={addTask} /> {/* Champ de saisie pour ajouter une tâche */}
            <TaskList
                tasksList={tasksList}
                editTask={editTask}
                deleteTask={deleteTask}
                incompletedTasks={incompletedTasks}
            /> {/* Affiche la liste des tâches */}
            <Footer completedTasks={completedTasks} /> {/* Affiche le pied de page avec le nombre de tâches complétées */}
        </main>
    );
};
