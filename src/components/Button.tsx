import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Button(data: { to: string, text: string }) {
    return (
        <ButtonContainer type="submit">
            <Link to={data.to}>
                {data.text}
            </Link>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.button`
    width: 250px;
    height: 40px;
    color: white;
    font-weight: 600;
    font-size: 14px;
    background: rgb(5,4,23);
    background: linear-gradient(90deg, rgba(5,4,23,1) 0%, rgba(16,41,120,1) 60%, rgba(62,0,195,1) 100%);
    box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.4);
    outline: none;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    :hover {
        transform: scale(1.1);
        color: greenyellow;
    }
`