import { FaTrash } from "react-icons/fa";
import styled from 'styled-components';

const LiContainer = styled.div `
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #fff;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 10px;
`;


export const ElementList = ({ task, deleteTask, id }) => {
    return (
        <LiContainer>
            <li>{task}</li>
            <div onClick={() => deleteTask(id)}>
                <FaTrash />
            </div>
            
        </LiContainer>
    );
}