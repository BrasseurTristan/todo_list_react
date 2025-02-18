import { Footer } from './footer/footer'
import { Header } from './header/header'
import { TaskInput } from './taskInput/taskInput'
import { TaskList } from './taskList/taskList'
// Ce composant est utilisé pour afficher l'intégralité de la liste de tâches

export const TaskContainer = () => {
    return (
        <main>
            <Header />
            <TaskInput />
            <TaskList />
            <Footer />
        </main>
    )
}