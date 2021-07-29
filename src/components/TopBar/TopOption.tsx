import { Link } from "react-router-dom";
import styled from "styled-components";

export default function TopOption(props: { text: string, to: string, children: JSX.Element }) {
    const { text, to, children } = props;

    return (
        <Link to={to}>
            <Container>
                {children}
                <p> {text} </p>
            </Container>
        </Link>
    )
}

const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    font-size: 28px;

    :hover{
        transform: scale(1.1);
        color: greenyellow;
    }
    p{
        margin-left: 10px;
        font-size: 16px;
    }
`;