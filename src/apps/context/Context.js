import { createContext } from "react";
import { useState } from "react";


export const Context = createContext();

const TodoListProvider = ({ children }) => {
    const localUser = JSON.parse(localStorage.getItem('taskList')) || [];
    const [tasks, setTasks] = useState(localUser);

    const data = {tasks, setTasks};

    return <Context.Provider value={data}> { children } </Context.Provider>
}

export { TodoListProvider };

export default Context;