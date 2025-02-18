import { useState } from 'react'
import { Footer } from './footer/footer'
import { Header } from './header/header'
import { TaskInput } from './taskInput/taskInput'
import { TaskList } from './taskList/taskList'
// Ce composant est utilisé pour afficher l'intégralité de la liste de tâches

export const TaskContainer = () => {

    const [tasksList, setTasksList] = useState([]);

    const addTask = (title) => {
        const newTask = {
            id: tasksList.length + 1,
            title: title,
            completed: false,
        }
        //On met à jour l'état de Tasklist avec tout ce qu'elle contient déjà + une nouvelle entrée qui est newTask
        setTasksList([...tasksList, newTask])
    }

    return (
        <main>
            <Header />
            <TaskInput addTask={addTask} />
            <TaskList />
            <Footer />
        </main>
    )
}