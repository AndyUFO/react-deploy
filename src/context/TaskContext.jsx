import {createContext, useEffect, useState} from "react";
import {task as data} from "../data/Task.js";

export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    return () => {
      setTasks(data)
    };
  }, []);
  function createTask(task) {
    setTasks([...tasks,{
      title: task.title,
      id: tasks.length,
      description: task.description
    }]);
  }

  function deleteTask(taskId) {
    console.log(tasks);
    console.log(taskId)
    setTasks(tasks.filter(task => task.id!== taskId));
  }

  return (
      <TaskContext.Provider value={{
        tasks ,
        deleteTask ,
        createTask
  }}>
        {props.children}
      </TaskContext.Provider>
  );
}
