import React from "react";
import useProject from "../features/project/useProject";
import Loading from "../ui/Loading";
import ProjectHeader from "../features/project/ProjectHeader";
import ProposalTable from "../features/project/ProposalTable";
function Project() {
  const { project, isLoading } = useProject();

  const proposals = project?.proposals || [];

  isLoading && <Loading />;

  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalTable proposals={proposals} />
    </div>
  );
}

export default Project;
