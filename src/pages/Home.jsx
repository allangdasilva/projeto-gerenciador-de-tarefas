import TasksAdd from '../components/TasksAdd'
import Tasks from '../components/Tasks'
import { useState } from 'react'

function Home(){
    const [tasks, setTasks] = useState()
    
    return (
        <>
            <main className='w-full min-h-screen flex items-center justify-center bg-teal-50'>
                <div className='w-full max-w-lg flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-3xl font-bold text-teal-900'>Gerenciador de Tarefas</h1>
                    <TasksAdd />
                    <Tasks />
                </div>
            </main>
        </>
    )
}

export default Home