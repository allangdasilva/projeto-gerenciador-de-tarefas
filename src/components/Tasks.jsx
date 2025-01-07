import ChevronRightIcon from '../assets/icons/chevron-right.svg'
import TrashIcon from '../assets/icons/trash-2.svg'
import CheckIcon from '../assets/icons/check.svg'

function Tasks(props){
    const tasks = props.propTasks
    return (
        <>
            <section className="w-full p-4 rounded-md shadow-md bg-teal-300">
                <ul className="flex flex-col gap-4">
                    {tasks.length < 1 ? <li className='p-2 text-center text-white'>Adicione suas Tarefas</li> : ''}
                    {props.propTasks.map((ele)=>(
                        <li key={ele.id} className='flex items-center gap-2'>
                            <button className={`w-full flex gap-2 p-2 text-left rounded-md text-white bg-teal-500 ${ele.checker ? 'italic line-through' : ''}`} onClick={()=> props.propCheckTask(ele.id)}>
                                {ele.checker ? <img src={CheckIcon} /> : ''}
                                {ele.title}
                            </button>
                            <a href="/details" className='w-full max-w-fit p-2 rounded-md bg-teal-500'>
                                <img src={ChevronRightIcon} alt="Chevron Right" />
                            </a>
                            <button 
                            className='w-full max-w-fit p-2 rounded-md bg-teal-500'
                            onClick={()=> props.propDeleteTasks(ele.id)}>
                                <img src={TrashIcon} alt="Trash" />
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default Tasks