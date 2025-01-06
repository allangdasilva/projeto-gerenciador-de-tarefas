import TasksAdd from '../components/TasksAdd'
import Tasks from '../components/Tasks'
import { useState } from 'react'

function Home(){
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Estudar React',
            description: 'Estudar react todos os dias',
            checker: false,
        },
        {
            id: 2,
            title: 'Projeto React',
            description: 'Projeto publico e Projeto privado',
            checker: false,
        },
        {
            id: 3,
            title: 'Estudar Tailwind',
            description: 'Estudar tailwind em tempo livre',
            checker: false,
        },
    ])


    return (
        <>
            <main className='w-full min-h-screen flex items-center justify-center bg-teal-50'>
                <div className='w-full max-w-lg flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-3xl font-bold text-teal-900'>Gerenciador de Tarefas</h1>
                    <TasksAdd />
                    <Tasks propTasks={tasks} />
                </div>
            </main>
        </>
    )
}

export default Home