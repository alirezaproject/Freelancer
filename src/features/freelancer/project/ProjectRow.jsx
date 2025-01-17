import { MdAssignmentAdd } from "react-icons/md";
import Table from "../../../ui/Table";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposal/CreateProposal";

const projectStatus = {
    OPEN: {
        label: "باز",
        className: "badge--success",
    },
    CLOSED: {
        label: "بسته",
        className: "badge--danger",
    }
};

function ProjectRow({ project, index }) {

    const [open, setOpen] = useState(false);

    return (
        <Table.Row key={project._id}>
            <td>{index + 1}</td>
            <td>{truncateText(project.title, 30)}</td>
            <td>{toPersianNumbersWithComma(project.budget)}</td>
            <td>{toLocalDateShort(project.deadline)}</td>
            <td><span className={`badge ${projectStatus[project?.status]?.className}`}>{projectStatus[project.status]?.label}</span></td>
            <td>
                <Modal open={open}
                    onClose={() => setOpen(false)}
                    title={`درخواست انجام پروژه ${project.title}`}>

                    <CreateProposal onClose={() => setOpen(false)} projectId={project._id} />

                </Modal>
                <button onClick={() => setOpen(true)}>
                    <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
                </button>
            </td>



        </Table.Row>
    );
}

export default ProjectRow;
