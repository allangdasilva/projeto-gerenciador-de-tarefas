import ChevronLeft from '../assets/icons/chevron-left.svg'

function Details(){

    return (
        <>
            <main className='w-full min-h-screen flex items-center justify-center p-2 bg-teal-50'>
                <div className='w-full max-w-lg flex flex-col items-center justify-center gap-4'>
                    <div className='relative w-full flex items-center justify-center'>
                        <h1 className='text-3xl font-bold text-teal-900'>Detalhes da Tarefa</h1>
                        <button className='absolute left-0'>
                            <img src={ChevronLeft} alt="Chevron left" />
                        </button>
                    </div>
                    <section className='w-full flex flex-col gap-4 p-4 rounded-md shadow-md bg-teal-500'>
                        <h2 className='text-lg font-semibold text-white'>Titulo</h2>
                        <p className='text-white'>Descrição</p>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Details