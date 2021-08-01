import styled from "styled-components";
import { useState } from "react";
import { IoOpenOutline } from "react-icons/io5";
import ITest from "../interfaces/ITest";

export default function Test(props: { key: number, test: ITest, byTeacher: boolean }) {

    const { test } = props;
    const [showingPdf, setShowingPdf] = useState(false);

    return (
        <Container>
            <p onClick={() => setShowingPdf(!showingPdf)}>
                {props.byTeacher ? `${test.name} da disciplina ${test.subject.name}` : `${test.name} do professor ${test.teacher.name}`}
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
        cursor: pointer;
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