//props sendo usada para renderizar o estado

import { ChevronRightIcon } from "lucide-react"

function Tasks(props){


    return(
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {props.tasks.map((tasks) => (
            <li key={tasks.id} className="flex gap-2 ">
                <button 
                    onClick={() => props.onTaskClick(tasks.id)}
                    className="bg-slate-400 text-left text-white p-2 rounded-md  w-full pr-60">
                    {tasks.title}</button>
                    {tasks.isCompleted ? "COMPLETE" : "INCOMPLETE"}
                <button className="bg-slate-400 p-2 rounded-md text-white">
                    <ChevronRightIcon></ChevronRightIcon>
                </button>
            </li>
            ))}
        </ul>
    )
}

export default Tasks