import React from 'react'
import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from 'react-icons/hi';
import Stat from '../../ui/Stat';
import { toPersianNumbers, toPersianNumbersWithComma } from '../../utils/toPersianNumbers';



function Stats({ proposals }) {

    const totalProposals = proposals?.length ?? 0;

    const acceptedProposals =
        proposals?.filter(project => project.status === 2);

    const balance = acceptedProposals?.reduce((acc, curr) => acc + curr.price, 0) ?? 0;



    return (
        <div className='grid grid-cols-2 gap-8'>
            <Stat
                title="درخواست ها"
                icon={<HiOutlineViewGrid className='w-20 h-20' />}
                value={toPersianNumbers(totalProposals)}
                color="primary" />
            <Stat
                title="درخواست های تایید شده"
                icon={<HiCurrencyDollar className='w-20 h-20' />}
                value={toPersianNumbers(acceptedProposals?.length ?? 0)}
                color="green" />
            <Stat
                title="کیف پول"
                icon={<HiCollection className='w-20 h-20' />}
                value={toPersianNumbersWithComma(balance)}
                color="blue" />
        </div>
    )
}

export default Stats