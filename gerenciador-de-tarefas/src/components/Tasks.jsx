import Chevron from '../assets/icons/chevron-right.svg'

function Tasks(props){

    return (
        <>
            <section>
                <ul className="p-4 space-y-4 rounded-md bg-red-400">
                    {props.propTasks.map((ele)=>(
                        <li key={ele.id} className='flex space-x-2'>

                            <p className="w-full px-4 py-2 rounded-md italic text-white bg-red-500">
                                {ele.title}
                            </p>

                            <img src={Chevron} alt="Chevron Right" className='px-2 rounded-md italic text-white bg-red-500' />
                        </li>
                        
                    ))}
                </ul>
            </section>
        </>
    )
}
export default Tasks