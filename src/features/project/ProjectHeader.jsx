import React from "react";
import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";

function ProjectHeader({ project = {} }) {
  const moveBack = useMoveBack();
  return (
    <div className="mb-8 flex items-center gap-x-4">
      <button onClick={moveBack}>
        <HiArrowRight className="h-5 w-5 to-secondary-500" />
      </button>
      <h1 className="text-xl font-black text-secondary-700">
        لیست درخواست های {project.title}
      </h1>
    </div>
  );
}

export default ProjectHeader;
