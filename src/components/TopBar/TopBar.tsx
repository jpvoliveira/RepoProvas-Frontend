import styled from 'styled-components';
import TopOption from './TopOption';

import { FiSend as IconSend } from 'react-icons/fi';
import { RiFilePaper2Fill as IconPaper } from 'react-icons/ri';
import { AiOutlineHome as IconHome } from 'react-icons/ai';

export default function Topbar() {
    return (
        <Container>
            <div>
                <TopOption to="/" text="Início">
                    <IconHome />
                </TopOption>
                <TopOption to="/send-test" text="Enviar prova">
                    <IconSend />
                </TopOption>
                <TopOption to="/new" text="Cadastros">
                    <IconPaper />
                </TopOption>
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: white;
    background: rgb(5,4,23);
    background: linear-gradient(90deg, rgba(5,4,23,1) 0%, rgba(16,41,120,1) 60%, rgba(62,0,195,1) 100%);
    > div{
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 0 auto;
    }
`;