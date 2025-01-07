import TasksAdd from '../components/TasksAdd'
import Tasks from '../components/Tasks'
import { useState } from 'react'
import { v4 } from 'uuid'

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

    function addTask(title, description){
        const newTask = {
            id: v4(),
            title: title,
            description: description,
            checker: false,
        }
        setTasks([...tasks, newTask])
    }
    
    function deleteTasks(taskId){
        const newTasks = tasks.filter(ele => ele.id !== taskId)
        setTasks(newTasks)
    }

    function checkTask(taskId){
        const newTask = tasks.map((ele)=>{
            if(ele.id === taskId){
                return {...ele, checker: !ele.checker}
            }
            return ele
        })
        setTasks(newTask)
    }

    return (
        <>
            <main className='w-full min-h-screen flex items-center justify-center bg-teal-50'>
                <div className='w-full max-w-lg flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-3xl font-bold text-teal-900'>Gerenciador de Tarefas</h1>
                    <TasksAdd propAddTask={addTask} />
                    <Tasks propTasks={tasks} propDeleteTasks={deleteTasks} propCheckTask={checkTask} />
                </div>
            </main>
        </>
    )
}

export default Home