import styled from "styled-components";
import Logo from "../../components/Logo/Logo";
import PageContainer from "../../assets/styles/PageContainer";
import { useParams } from "react-router-dom";
import TeachersList from "./TeachersList";

export default function Teachers() {

    const { courseId } = useParams<{ courseId: string }>();

    return (
        <PageContainer>
            <Logo />
            <Container>
                <TeachersList />
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