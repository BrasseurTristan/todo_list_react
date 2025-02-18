import { Header } from './header/header'
import { TaskInput } from './taskInput/taskInput'
// Ce composant est utilisé pour afficher l'intégralité de la liste de tâches

export const TaskContainer = () => {
    return (
        <main>
            <Header />
            <TaskInput />
        </main>
    )
}