import styled from "styled-components";

export default function Select(data: { handleChange: React.ChangeEventHandler<HTMLSelectElement>, selectedOption: number, error: boolean, loading: boolean, options: { id: number, name: string }[] | null | undefined }) {
    const { options, loading, error, selectedOption, handleChange } = data;

    if (loading) return <div> Loading ... </div>;
    if (error) return <div> Erro ao carregar cursos </div>;

    return (
        <SelectContainer name="form" form="form" value={selectedOption} onChange={handleChange}>
            {options?.map((p: { id: number, name: string }) => <option key={p.id} value={p.id} >{p.name}</option>)}
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

