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

const TrashContainer = styled.div`
    cursor: pointer;
`;


export const ElementList = ({ task, deleteTask, id }) => {
    return (
        <LiContainer>
            <li>{task}</li>
            <TrashContainer onClick={() => deleteTask(id)}>
                <FaTrash />
            </TrashContainer>
            
        </LiContainer>
    );
}