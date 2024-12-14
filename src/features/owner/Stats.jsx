import React from 'react'
import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from 'react-icons/hi';
import Stat from '../../ui/Stat';



function Stats({ projects }) {

    const totalProjects = projects.length ?? 0;

    const totalAcceptedProjects =
        projects.filter(project => project.status === 2).length ?? 0;

    const totalProposals =
        projects.reduce((acc, curr) => { curr.proposals.length + acc }, 0) ?? 0;




    return (
        <div className='grid grid-cols-2 gap-8'>
            <Stat
                title="پروژه ها"
                icon={<HiOutlineViewGrid className='w-20 h-20' />}
                value={totalProjects}
                color="primary" />
            <Stat
                title="پروژه های واگذار شده"
                icon={<HiCurrencyDollar className='w-20 h-20' />}
                value={totalAcceptedProjects}
                color="green" />
            <Stat
                title="درخواست ها"
                icon={<HiCollection className='w-20 h-20' />}
                value={totalProposals}
                color="blue" />
        </div>
    )
}

export default Stats