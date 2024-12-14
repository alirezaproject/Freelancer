import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

function ProjectsHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-8 flex items-center justify-between">
      <h1 className="text-xl font-black text-secondary-700">پروژه های شما</h1>
      <Modal
        title="اضافه کردن پروژه جدید"
        open={open}
        onClose={() => setOpen(false)}
      >
        <CreateProjectForm onClose={() => setOpen(false)} />
      </Modal>
      <button
        onClick={() => setOpen(true)}
        className="btn btn--primary flex items-center gap-x-2"
      >
        <HiOutlinePlus />
        <span>اضافه کردن پروژه</span>
      </button>
    </div>
  );
}
export default ProjectsHeader;
