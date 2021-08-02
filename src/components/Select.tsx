import styled from "styled-components";

export default function Select(data: { handleChange: React.ChangeEventHandler<HTMLSelectElement>, selectedOption: number | null | undefined, error: boolean, loading: boolean, options: { id: number, name: string }[] | null | undefined }) {
    const { options, loading, error, selectedOption, handleChange } = data;

    if (loading) return <div> Loading ... </div>;
    if (error) return <div> Falha ao carregar... </div>;

    if (selectedOption === null || selectedOption === undefined) {
        return <div>Selecione uma opção</div>;
    }

    if (!options) return <div> Loading ... </div>

    const newOptions = [{ id: 0, name: "Selecione uma opção" }].concat(options);
    return (
        <SelectContainer name="form" form="form" value={selectedOption} onChange={handleChange}>
            {newOptions?.map((p: { id: number, name: string }) => <option key={p.id} value={p.id} >{p.name}</option>)}
        </SelectContainer>
    )
}

const SelectContainer = styled.select`
    width: 180px;
    height: auto;
    padding: 8px 4px;
    font-size: 14px;
    outline: none;
    border: none;
    border-radius: 7px;

    color: white;
    font-weight: 600;
    background: rgb(5,4,23);
    background: linear-gradient(90deg, #151168 0%, #1f3da1 60%, #4403d1 100%);
    box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.4);
    cursor: pointer;

    :hover{
        transform: scale(1.02);
    }
    option{
        color: black;
    }
`;

