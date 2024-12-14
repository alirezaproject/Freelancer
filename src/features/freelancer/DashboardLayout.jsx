import React from 'react'
import Stats from './Stats'

import Loading from '../../ui/Loading';
import useProposals from '../proposal/useProposals';
import DashboardHeader from '../../ui/DashboardHeader';

function DashboardLayout() {
    const { isLoading, projects } = useProposals();

    if (isLoading) return <Loading />;

    return (
        <>
            <DashboardHeader />
            <Stats projects={projects} />
        </>
    )
}

export default DashboardLayout