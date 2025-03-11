import {useLocation, useNavigate} from "react-router-dom";
import {ChevronLeftIcon} from "lucide-react";
import Title from "../components/Title.jsx";

function TaskPage() {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state || !state.task) {
        return <h2>Notícia não encontrada!</h2>;
    }

    function onBackMainPage() {
        navigate(`/`);
    }

    const task = state.task[0];
    const title = task.title;
    const description = task.description;
    return (
        <div className="w-full h-screen flex justify-center bg-slate-500 p-4">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative">
                    <button
                        onClick={onBackMainPage}
                        className="absolute text-slate-100 left-0 top-0 bottom-0 cursor-pointer">
                        <ChevronLeftIcon/>
                    </button>
                    <Title>Detalhe da Tarefa</Title>
                </div>

                <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
                    <p className="text-slate-600">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TaskPage;