import Tasks from "./components/tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";


//utilizando estado para passar as tasks
function App(){
  let [tasks, setTasks] = useState([{
    id: 1,
    title: "Estudar programacao",
    description: "Estudar pgromacao para ser um programador front-end",
    isCompleted: false,

  },
  {
    id: 2,
    title: "Estudar ingles",
    description: "Estudar ingles para se tornar fluente",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Estudar matematica",
    description: "Estudar matematica para desenvolver",
    isCompleted: false,
  }])


  function onTaskClick(taskId){
    let newTasks = tasks.map(task => {
      //PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId){
        return {...task, isCompleted: !task.isCompleted};
      }


      //NAO PRECISO ATUALIZAR A TAREFA
      return task;
    })
    setTasks(newTasks)
  }

  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] ">

        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>

        <AddTask/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick}/>


      </div>


    </div>
  );
}


export default App