import {CheckIcon, ChevronRightIcon, TrashIcon} from "lucide-react";
import Button from "./Button.jsx";

function Tasks({tasks, onTaskDelete, onTaskClick, onTaskReadMore}) {

    if (tasks.length === 0) {
        return <h2 className="text-2xl bg-slate-200">Nehuma tarrefa adicionada!</h2>
    }

    return (
        <ul className="space-y-3 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button
                        onClick={() => onTaskClick(task.id)}
                        className={`bg-slate-400 text-left w-full cursor-pointer text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}>
                        {task.isCompleted && <CheckIcon/>}
                        {task.title}
                    </button>
                    <Button onClick={() => onTaskReadMore(task.id)}>
                        <ChevronRightIcon/>
                    </Button>
                    <Button onClick={() => onTaskDelete(task.id)}>
                        <TrashIcon/>
                    </Button>
                </li>
            ))}
        </ul>
    )
}


export default Tasks;