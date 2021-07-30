import styled from "styled-components";
import { useParams } from "react-router-dom";
import PageContainer from "../../assets/styles/PageContainer";
import Logo from "../../components/Logo/Logo";
import CategoriesList from "./CategoriesList";

export default function TestsBySubject() {


    return (
        <PageContainer>
            <Logo />
            <Container>
                <CategoriesList />
            </Container>
        </PageContainer>
    )
}

const Container = styled.div`
    
`;