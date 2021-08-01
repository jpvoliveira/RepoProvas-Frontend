import Button from "../../components/Button";
import { useParams } from "react-router-dom";
import PageSetup from "../../components/PageSetup";

export default function Course() {

    const { id } = useParams<{ id: string }>();

    return (
        <PageSetup>
            <>
                <Button text="Por professor" to={`/course/${id}/teachers`} />
                <Button text="Por disciplina" to={`/course/${id}/subjects`} />
            </>
        </PageSetup>
    );
}