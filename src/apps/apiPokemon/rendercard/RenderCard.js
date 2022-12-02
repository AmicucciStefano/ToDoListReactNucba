import styled from 'styled-components'
import React from 'react'

const Card = styled.div`
  margin-top: 30px;
  width: 200px;
  background-color: cadetblue;
  height: 150px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
`;
const CardImage = styled.div`
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
`;

const CardText = styled.div`
  text-align: center;
`;



const RenderCard = ({ ...data }) => {

  const {name, sprites} = data;

  return (
    <Card>
      <CardImage>
        <img src={sprites.front_default} alt={name}></img>
      </CardImage>
      <CardText>
        <h3>{name}</h3>
      </CardText>
    </Card>
  )
}

export default RenderCard