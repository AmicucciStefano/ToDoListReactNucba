import React from 'react';
import "../../style-sheets/glitchEfect.css";
import styled from "styled-components";

const ContainerHome = styled.div`
  background: #222;
  min-height: 86.8vh;
  display: grid;
  place-items: center;
  color: white;
  font-family: sans-serif;
`;

const Home = () => {
  return (
    <ContainerHome>
      <h2 className="glitch">
        <span aria-hidden="true">Home</span>
        Home
        <span aria-hidden="true">Home</span>
      </h2>
    </ContainerHome>
  )
}

export default Home