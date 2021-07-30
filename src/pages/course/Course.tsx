import styled from "styled-components";
import Logo from "../../components/Logo/Logo";
import PageContainer from "../../assets/styles/PageContainer";
import Button from "../../components/Button";
import { useParams } from "react-router-dom";
export default function Course() {

    const { id } = useParams<{ id: string }>();

    return (
        <PageContainer>
            <Logo />
            <Container>
                <Button text="Por professor" to={`/course/${id}/teachers`} />
                <Button text="Por disciplina" to={`/course/${id}/subjects`} />
            </Container>
        </PageContainer>
    );
}

const Container = styled.div`
    > * {
        margin: 20px;
    }
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`