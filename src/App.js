import './App.css';
import { TodoList } from './apps/todoList/TodoList';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './apps/navbar/Navbar';
import ApiPokemon from "./apps/apiPokemon/ApiPokemon";
import Home from "./apps/home/Home";
import Error404 from './apps/error404/Error404';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='todolist' element={<TodoList />} />
        <Route path='apipokemon' element={<ApiPokemon />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
