import React from 'react'
import { HiCollection, HiOutlineViewGrid, HiUser } from 'react-icons/hi';
import Stat from '../../ui/Stat';
import { toPersianNumbers } from '../../utils/toPersianNumbers';



function Stats({ proposals, users, projects }) {



    return (
        <div className='grid grid-cols-2 gap-8'>
            <Stat
                title="کاربران"
                icon={<HiUser className='w-20 h-20' />}
                value={users}
                color="blue" />
            <Stat
                title="درخواست ها"
                icon={<HiOutlineViewGrid className='w-20 h-20' />}
                value={proposals}
                color="primary" />
            <Stat
                title="پروژه ها "
                icon={<HiCollection className='w-20 h-20' />}
                value={projects}
                color="green" />

        </div>
    )
}

export default Stats