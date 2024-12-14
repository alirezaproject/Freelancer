import React from "react";
import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectsTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;

  if (!projects) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر ها</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th>درخواست ها</th>
      </Table.header>
      <Table.body>
        {projects.map((project, index) => (
          <ProjectRow project={project} index={index} key={project._id} />
        ))}
      </Table.body>
    </Table>
  );
}

export default ProjectsTable;
