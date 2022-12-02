import { useState } from "react";
import Loader from "./loader/Loader";
import styled from "styled-components";
import RenderCard from "./rendercard/RenderCard";
import { FetchPokemons } from "./hook/FetchPokemons";


const ContainerTitle = styled.div`
  margin-top: 30px;
  display: grid;
  place-items: center;
  color: white;
  font-family: sans-serif;
  background-color: #222;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px 10px 0px 0px;
`;

const StyledForm = styled.form`
  padding-top: 30px;
  text-align: center;
  width: 80%;
  height: 20vh;
  margin-left: auto;
  margin-right: auto;
  background-color: #222;
  border-radius: 0px 0px 10px 10px;
`;

const StyledInput = styled.input`
  padding: 0.8rem;
`;

const StyledButton= styled.button`
  width: 100px;
  margin-left: 15px;
  padding: 0.8rem;
  border: 2px solid white;
  border-radius: 10px;
  background-color: blueviolet;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const ApiPokemon = () => {
  const [pokemon, setPokemon] = useState("");

  const { data, isLoading, error, handleSubmit} = FetchPokemons();

  console.log(data);
  return(
    <div>
      <ContainerTitle>
        <h2 className="glitch-small">
          <span aria-hidden="true">Api Pokemon</span>
          Api Pokemon
          <span aria-hidden="true">Api Pokemon</span>
        </h2>
      </ContainerTitle>
      <StyledForm onSubmit={(e) => {
        e.preventDefault()
        if(pokemon.trim() === "" ) return;
        handleSubmit(e, pokemon)
        }}>
        <StyledInput placeholder="Pokemon..." value={ pokemon } type="text" onChange={(e) => setPokemon(e.target.value)}/>
        <StyledButton type="submit">Send</StyledButton>
      </StyledForm>
      { isLoading && <Loader /> }
      { error && <h2 style={{ color: 'red', textAlign: 'center' }}> { error } </h2> }
      {data && <RenderCard {...data}/>}
    </div>
  )
}

export default ApiPokemon;