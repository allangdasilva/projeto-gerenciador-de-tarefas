import { useState } from 'react';
import AddTasks from './components/AddTasks';
import Tasks from './components/Tasks';

function App(){
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar React',
      description: 'Estudar sobre hooks e media queries',
      checker: false,
    },
    {
      id: 2,
      title: 'Estudar Tailwind',
      description: 'Estudar sobre media queries',
      checker: false,
    },
    {
      id: 3,
      title: 'Projetos',
      description: 'Projetos com React',
      checker: false,
    },
  ])

  return (
    <>
      <div className='w-full min-h-screen flex flex-col items-center justify-center p-4 bg-red-300'>
        <div className='w-full max-w-lg space-y-4'>
          <h1 className='text-3xl font-bold text-center text-white'>Gerenciador de Tarefas</h1>
          <AddTasks />
          <Tasks propTasks={tasks} />
        </div>
      </div>
      
    </>
  )
};

export default App