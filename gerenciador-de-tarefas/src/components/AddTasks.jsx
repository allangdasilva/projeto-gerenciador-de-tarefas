import { useState } from "react"

function AddTaks(props){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <>
            <section className="flex flex-col space-y-4 p-4 bg-red-400 rounded-md">
                <input 
                    type="text" placeholder="Insira o titulo da tarefa" className="px-4 py-2 rounded-md outline-red-500"
                    value={title}
                    onChange={(event)=> setTitle(event.target.value)}
                />

                <input 
                    type="text" placeholder="Insira a descrição da tarefa" className="px-4 py-2 rounded-md outline-red-500"
                    value={description}
                    onChange={(event)=> setDescription(event.target.value)}
                />

                <button className="w-full px-4 py-2 rounded-md font-bold text-white bg-red-600"
                onClick={()=> {
                    if(!title.trim() || !description.trim()){
                        return alert('Preencha os campos')
                    }
                    props.propAddTask(title, description);
                    setTitle('');
                    setDescription('');
                }}
                >
                    Adicionar
                </button>
            </section>
        </>
    )
}
export default AddTaks