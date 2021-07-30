import styled from "styled-components";
import { TiWeatherCloudy as IconLogo } from "react-icons/ti";

export default function Logo() {
    return (
        <Container>
            <IconLogo />
            <strong>Repo<span>Provas</span></strong>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Lato', sans-serif;
    font-size: 62px;
    cursor: default;
    margin-bottom: 25px;
    > strong span{
        color: rgba(16,41,120,1);
        font-weight: normal;
    }
    font-weight: bold;
`