import {useState} from "react";
import Input from "./Input.jsx";

function AddTask({onAddTask}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md flex flex-col  shadow">
            <Input
                type="text"
                placeholder="Digite o titulo da tarrefa"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Digite da descição da tarrefa"
            />
            <button onClick={() => {
                if (!title.trim() || !description.trim()) {
                    alert("Adicione algo!");
                    return
                }
                onAddTask(title,description);
                setTitle("");
                setDescription("");
            }}
                className="bg-slate-500 cursor-pointer text-white px-4 py-2 rounded-md font-medium"
            >Adicionar</button>
        </div>
    )
}

export default AddTask