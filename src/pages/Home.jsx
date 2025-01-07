import TasksAdd from '../components/TasksAdd'
import Tasks from '../components/Tasks'
import { useEffect, useState } from 'react'
import { v4 } from 'uuid'

function Home(){
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem('tasks')) || []
    )

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

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },
    [tasks])

    return (
        <>
            <main className='w-full min-h-screen flex items-center justify-center p-2 bg-teal-50'>
                <div className='w-full max-w-lg flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-center text-3xl font-bold text-teal-900'>Gerenciador de Tarefas</h1>
                    <TasksAdd propAddTask={addTask} />
                    <Tasks propTasks={tasks} propDeleteTasks={deleteTasks} propCheckTask={checkTask} />
                </div>
            </main>
        </>
    )
}

export default Home