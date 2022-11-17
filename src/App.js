import styled from 'styled-components';
import { InputText } from './componentes/InputText';
import { useState } from 'react';
import { ElementList } from './componentes/ElementList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const List = styled.div `
 background: #000;
 border: 2px solid #fff;
 width: 80%;
 margin-left: auto;
 margin-right: auto;
 margin-top: 10px;
`;

const Title = styled.h2 `
  color: #fff;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
`;

const EmptyTasks = styled.p `
  text-align: center;
  font-weight: 600;
`;


function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    if(!e.target.classList.contains("button-send")) return;
    let inputText = document.querySelector(".input-text");
    const newTask = {
      id:uuidv4(),
      text:inputText.value
    }
    const task = [...tasks,newTask];
    setTasks(task)
    inputText.value = "";
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  };

  return (
    <div className="App">
      <List>
        <Title>To Do List</Title>
        <InputText handleClick={addTask} />
        <ul>
          {tasks.length === 0 ?
            <EmptyTasks>No hay tareas</EmptyTasks>:
            tasks.map((task) =>
            <ElementList 
              key={task.id}
              task={task.text}
              id={task.id}
              deleteTask={deleteTask}
            />)
          }
        </ul>
      </List>
    </div>
  );
}

export default App;
