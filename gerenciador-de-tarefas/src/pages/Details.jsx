import { useSearchParams } from "react-router-dom"
import Chevron from '../assets/icons/chevron-right.svg'

function Details(){
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const description = searchParams.get('description');

    return (
        <>
            <div className="w-full min-h-screen flex items-center justify-center p-4 bg-red-200">
                <div className="w-full max-w-lg space-y-4">
                    <div className="relative">
                        <h1 className="text-3xl font-bold text-center text-white">Detalhes da Tarefa</h1>
                        <a href="/" className="absolute flex items-center left-0 top-0 bottom-0 rotate-180">
                            <img src={Chevron} alt="Chevron left" />
                        </a>
                    </div>
                    <div className="w-full p-4 space-y-4 rounded-md shadow-md bg-red-400">
                        <h2 className="text-white font-bold text-lg">{title}</h2>
                        <p className="text-white">{description}</p>
                    </div>
                </div>
                
            </div>
            
        </>
    )
}

export default Details