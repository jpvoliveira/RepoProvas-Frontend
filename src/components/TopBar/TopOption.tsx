import { Link } from "react-router-dom";
import styled from "styled-components";

export default function TopOption(props: { text: string, to: string, children: JSX.Element }) {
    const { text, to, children } = props;

    return (
        <Container>
            <Link to={to}>
                {children}
                <p> {text} </p>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    p{
        cursor: pointer;
        :hover{
            transform: scale(1.2);
        }
    }
`;