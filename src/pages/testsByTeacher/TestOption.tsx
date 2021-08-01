import styled from "styled-components";
import { useState } from "react";
import ITest from "../../interfaces/ITest";
import { IoOpenOutline } from "react-icons/io5";

export default function TestOption(props: { key: number, test: ITest }) {

    const { test } = props;
    const [showingPdf, setShowingPdf] = useState(false);

    return (
        <Container>
            <p onClick={() => setShowingPdf(!showingPdf)}>
                {test.name} da disciplina {test.subject.name}
            </p>
            {showingPdf &&
                <div>
                    <a href={test.pdf} target="_blank" rel="noreferrer">
                        <IoOpenOutline />
                    </a>
                    <object type="application/pdf"
                        data={test.pdf}
                        width="400"
                        height="280">
                    </object>
                </div>
            }
        </Container>

    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    > p {
        text-decoration: underline;
        margin: 5px;
        font-weight: 500;
        :hover{
            transform: scale(1.05);
        }
    }

    div {
        margin: 5px auto;
        position: relative;
        a {
            position: absolute;
            left: 15px;
            top: 15px;
            *{
                font-size: 28px;
                color: #ffffff;
                :hover{
                    transform: scale(1.05);
                }
            }
        }
    }
`;