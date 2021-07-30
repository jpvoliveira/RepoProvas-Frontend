import styled from "styled-components";

export default function Select(data: { handleChange: React.ChangeEventHandler<HTMLSelectElement>, optionCourse: { value: number }, error: boolean, loading: boolean, props: { id: number, name: string }[] }) {
    const { props, loading, error, optionCourse, handleChange } = data;

    if (loading) return <div> Loading ... </div>;
    if (error) return <div> Erro ao carregar cursos </div>;

    return (
        <SelectContainer name="courses" form="course" value={optionCourse.value} onChange={handleChange}>
            {props.map((p: { id: number, name: string }) => <option key={p.id} value={p.id} >{p.name}</option>)}
        </SelectContainer>
    )
}

const SelectContainer = styled.select`
    width: 180px;
    height: 30px;
    padding: 5px;
    font-size: 14px;
    outline: none;
    border: none;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.2);
`

