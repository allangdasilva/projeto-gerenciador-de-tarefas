import { useState } from 'react';
import AddTasks from '../components/AddTasks';
import Tasks from '../components/Tasks';

function Home(){
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
  ]);

  function validateTask(taskId){
    const newTasks = tasks.map((ele)=>{
      if(taskId === ele.id){
        return {...ele, checker: !ele.checker};
      };
      return ele;
    });
    setTasks(newTasks);
  };

  function deleteTask(taskId){
    const newTasks = tasks.filter(ele => ele.id !== taskId);
    setTasks(newTasks);
  };

  function addTask(title, description){
    const addNewTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      checker: false,
    };
    setTasks([...tasks, addNewTask]);
  };

  return (
    <>
      <div className='w-full min-h-screen flex flex-col items-center justify-center p-4 bg-red-200'>
        <div className='w-full max-w-lg space-y-4'>
          <h1 className='text-3xl font-bold text-center text-white'>Gerenciador de Tarefas</h1>
          <AddTasks propAddTask={addTask} />
          <Tasks propTasks={tasks} propValidateTask={validateTask} propDeleteTask={deleteTask} />
        </div>
      </div>
    </>
  )
};

export default Home