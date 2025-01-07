import { useState } from "react"

function TasksAdd(props){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <>
            <section className="w-full flex flex-col items-center gap-4 p-4 rounded-md shadow-md bg-teal-400">
                <input 
                type="text" 
                placeholder="Título da tarefa" 
                className="w-full p-2 rounded-md outline-none"
                value={title}
                onChange={(event)=> setTitle(event.target.value)}/>
                <input 
                type="text" 
                placeholder="Descrição da tarefa" 
                className="w-full p-2 rounded-md outline-none"
                value={description}
                onChange={(event)=> setDescription(event.target.value)}/>
                
                <button 
                className="transition w-full p-2 rounded font-semibold text-white bg-teal-700 hover:bg-teal-300 hover:text-teal-900"
                onClick={()=> {
                    if(!title.trim() || !description.trim()){
                        return alert('Preencha todos os campos!')
                    }
                    props.propAddTask(title, description)
                    setTitle('')
                    setDescription('')
                }}
                >Adicionar</button>
            </section>
        </>
    )
}

export default TasksAdd