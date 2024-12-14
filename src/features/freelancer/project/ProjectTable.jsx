import React from 'react'
import Table from '../../../ui/Table';
import Empty from '../../../ui/Empty';
import Loading from '../../../ui/Loading';
import useProjects from '../../../hooks/useProjects';
import ProjectRow from './ProjectRow';

function ProjectTable() {
    const { isLoading, projects } = useProjects();

    if (isLoading) return <Loading />;

    if (!projects) return <Empty resourceName="پروژه" />;

    return (
        <Table>
            <Table.header>
                <th>#</th>
                <th>عنوان پروژه</th>
                <th>بودجه</th>
                <th>ددلاین</th>
                <th>وضعیت</th>
                <th>عملیات</th>

            </Table.header>
            <Table.body>
                {projects.map((project, index) => (
                    <ProjectRow project={project} index={index} key={project._id} />
                ))}
            </Table.body>
        </Table>
    );
}

export default ProjectTable