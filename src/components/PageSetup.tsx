import React from "react";
import styled from "styled-components";
import PageContainer from "../assets/styles/PageContainer";
import Logo from "./Logo/Logo";

export default function PageSetup({ children }: { children: React.ReactChild }) {
    return (
        <PageContainer>
            <Logo />
            <Container>
                {children}
            </Container>
        </PageContainer>
    )
}

const Container = styled.div`
    > * {
        margin: 15px;
    }
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;