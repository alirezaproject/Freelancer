import React from 'react'
import Stats from './Stats'
import DashboardHeader from '../../ui/DashboardHeader'
import useOwnerProjects from '../projects/useOwnerProjects';
import Loading from '../../ui/Loading';

function DashboardLayout() {
    const { isLoading, projects } = useOwnerProjects();

    if (isLoading) return <Loading />;

    return (
        <>
            <DashboardHeader />
            <Stats projects={projects} />
        </>
    )
}

export default DashboardLayout