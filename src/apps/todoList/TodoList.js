import styled from 'styled-components';
import { InputText } from './InputText';
import { ElementList } from './ElementList';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import Context from '../context/Context';

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

export const TodoList = () => {

  const { tasks, setTasks } = useContext(Context);

  const addTask = (e) => {
    if(!e.target.classList.contains("button-send")) return;
    let inputText = document.querySelector(".input-text");
    if(inputText.value.trim() === "") return;
    const newTask = {
      id:uuidv4(),
      text:inputText.value
    }
    const task = [...tasks,newTask];
    localStorage.setItem('taskList', JSON.stringify(task))
    setTasks(task)
    inputText.value = "";
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    localStorage.setItem('taskList', JSON.stringify(filteredTasks))
    setTasks(filteredTasks)
  };


  return(
    <div>
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
  )
}