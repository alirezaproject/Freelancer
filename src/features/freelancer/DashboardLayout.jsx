import React from 'react'
import Stats from './Stats'

import Loading from '../../ui/Loading';
import useProposals from '../proposal/useProposals';
import DashboardHeader from '../../ui/DashboardHeader';

function DashboardLayout() {
    const { isLoading, proposals } = useProposals();


    if (isLoading) return <Loading />;

    return (
        <>
            <DashboardHeader />
            <Stats proposals={proposals} />
        </>
    )
}

export default DashboardLayout