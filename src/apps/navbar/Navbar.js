import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from 'react';
import  Context from "../context/Context"

const NavContainer = styled.nav`
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
`;

const LinkStyled = styled(Link)`
  font-size: 2rem;
  margin: 1rem;
  font-weight: 700;
  color:#fff;
  text-decoration: none;
  transition: 1s ;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  :hover {
    color: #07aae9;
  }
`;

const LinkStyledEmpty = styled(Link)`
  font-size: 2rem;
  margin: 1rem;
  font-weight: 700;
  color:red;
  text-decoration: none;
  transition: 1s ;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  :hover {
    color: #07aae9;
  }
`;


export const Navbar = () => {
  const { tasks } = useContext(Context);

  return(
    <header>
      <NavContainer>
        <div>
          <h2>Ejercicio 2: React</h2>
        </div>
        <div>
          <LinkStyled to="/">Home</LinkStyled>
          {(tasks.length === 0) ?
            <LinkStyledEmpty to="/todolist">To Do List</LinkStyledEmpty> :
            <LinkStyled to="/todolist">To Do List</LinkStyled>}
          <LinkStyled to="/apipokemon">Api Pokemon</LinkStyled>
        </div>
      </NavContainer>
    </header>   
  )
}