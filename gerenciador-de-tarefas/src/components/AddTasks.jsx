function AddTaks(){

    return (
        <>
            <section className="flex flex-col space-y-4 p-4 bg-red-400 rounded-md">
                <input 
                    type="text" placeholder="Insira o titulo da tarefa" className="px-4 py-2 rounded-md outline-red-500"
                />

                <input 
                    type="text" placeholder="Insira a descrição da tarefa" className="px-4 py-2 rounded-md outline-red-500"
                />

                <button className="w-full px-4 py-2 rounded-md font-bold text-white bg-red-600">
                    Adicionar
                </button>
            </section>
        </>
    )
}
export default AddTaks