function TasksAdd(){

    return (
        <>
            <section className="w-full flex flex-col items-center gap-4 p-4 rounded-md shadow-md bg-teal-300">
                <input type="text" placeholder="Título da tarefa" className="w-full p-2 rounded-md outline-none"/>
                <input type="text" placeholder="Descrição da tarefa" className="w-full p-2 rounded-md outline-none"/>
                <button className="w-full p-2 rounded font-semibold text-white bg-teal-600">Adicionar</button>
            </section>
        </>
    )
}

export default TasksAdd