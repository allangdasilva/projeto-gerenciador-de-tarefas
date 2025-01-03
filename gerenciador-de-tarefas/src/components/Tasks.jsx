import ChevronIcon from '../assets/icons/chevron-right.svg'
import TrashIcon from '../assets/icons/trash-2.svg'
import CheckIcon from '../assets/icons/check.svg'

function Tasks(props){
    

    return (
        <>
            <section>
                <ul className="p-4 space-y-4 rounded-md shadow-md bg-red-400">
                    {props.propTasks.map((ele)=>(
                        <li key={ele.id} className='flex space-x-2'>
                            <button className={`flex space-x-4 w-full px-4 py-2 rounded-md text-left text-white bg-red-500 ${ele.checker ? 'line-through italic' : ''} gap-2`} 
                            onClick={()=> props.propValidateTask(ele.id)}
                            >
                                {ele.checker ? <img src={CheckIcon} alt="Check"/> : ''}
                                {ele.title}
                            </button>
                            <a href={`/details?title=${ele.title}&description=${ele.description}`} className='flex items-center px-2  cursor-pointer rounded-md italic text-white bg-red-500'>
                                <img src={ChevronIcon} alt="Chevron Right"/>
                            </a>
                            <button 
                            className='px-2 rounded-md italic text-white bg-red-500'
                            onClick={()=> props.propDeleteTask(ele.id)}
                            >
                                <img src={TrashIcon} alt="Trash"/>
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
export default Tasks