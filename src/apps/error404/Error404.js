import React from 'react'
import styled from "styled-components";

const ContainerError404 = styled.div`
  background: #222;
  min-height: 86.8vh;
  display: grid;
  place-items: center;
  color: white;
  font-family: sans-serif;
`;

const Error404 = () => {
  return (
    <div>
      <ContainerError404>
        <h2 className="glitch">
          <span aria-hidden="true">Error404</span>
          Error404
          <span aria-hidden="true">Error404</span>
        </h2>
      </ContainerError404>
    </div>
  )
}

export default Error404;