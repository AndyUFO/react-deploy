import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

// eslint-disable-next-line react/prop-types
export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className={"max-w-md mx-auto"}>
      <form className={"bg-slate-800 p-10 mb-4"} onSubmit={handleSubmit}>
        <h1 className={"text-2xl font-bold text-white mb-3"}>Crea tu tarea</h1>
        <input
          className={"bg-slate-300 p-3 w-full mb-2"}
          placeholder={"escribe tu tarea"}
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className={"bg-slate-300 p-3 w-full mb-2"}
          placeholder={"Escribe la descripcion de la tarea"}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          value={description}
        ></textarea>
        <button className={"bg-indigo-500 px-3 py-1 text-white"}>
          Guardar
        </button>
      </form>
    </div>
  );
}
