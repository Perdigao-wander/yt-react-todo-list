import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";
import Title from "./components/Title.jsx";
import {useEffect, useState} from "react";
import {v4} from 'uuid'
import {useNavigate} from "react-router-dom";

function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
                const data = await response.json();
               setTasks(data);
            } catch (error) {
                console.error("Erro ao buscar os dados:", error);
            }
        };

        //fetchData();
    }, []);


    function onTaskReadMore(taskId) {
        const task = tasks.filter((task => task.id === taskId));
        navigate(`/task`, { state: { task } });
    }

    function onTaskClick(taskId) {
        const newTask = tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task, isCompleted: !task.isCompleted
                }
            }

            return task;
        })

        setTasks(newTask);
    }

    function onTaskDelete(taskId) {
        if (confirm("Deseja deletar a tarrefa?")) {
            const newTask = tasks.filter((task => task.id !== taskId));

            setTasks(newTask);
        }
    }

    function onAddTask(title, description) {
        const newTask = {
            id: v4(),
            title,
            description,
            isCompleted: false
        }
        setTasks([...tasks, newTask]);
    }

    return (
        <div className="w-full h-screen bg-slate-500 flex justify-center p-4">
            <div className="w-[500px] space-y-4">
                <Title>Gerenciador de Tarefas</Title>
                <AddTask onAddTask={onAddTask}/>
                <Tasks tasks={tasks} onTaskDelete={onTaskDelete} onTaskReadMore={onTaskReadMore} onTaskClick={onTaskClick}/>
            </div>
        </div>
    )
}

export default App