import styled from "styled-components";
import ITest from "../../interfaces/ITest";

export default function TestOption(props: { key: number, test: ITest }) {

    const { test } = props;

    return (
        <Container>
            <a href={test.pdf} target="_blank" rel="noreferrer" >
                {test.name} da disciplina {test.subject.name}
            </a>
        </Container>
    )
}

const Container = styled.div`
    background-color: #f3fcff;
    padding: 4px;
    margin: 5px;
    font-weight: 500;
    :hover{
        transform: scale(1.05);
    }
`;