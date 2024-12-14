import React from 'react'
import useProposals from './useProposals'
import Loading from '../../ui/Loading';
import Empty from '../../ui/Empty';
import Table from '../../ui/Table';
import ProposalRow from './ProposalRow';

function ProposalTable() {
    const { isLoading, proposals } = useProposals();


    if (isLoading) return <Loading />;

    if (!proposals?.length) return <Empty resourceName="پروپوزال" />;

    return (
        <Table>
            <Table.header>
                <th>#</th>
                <th>توضیحات</th>
                <th>زمان تحویل</th>
                <th>هزینه</th>
                <th>وضعیت</th>
            </Table.header>
            <Table.body>
                {proposals.map((proposal, index) => (
                    <ProposalRow proposal={proposal} index={index} key={proposal._id} />
                ))}
            </Table.body>
        </Table>
    );
}

export default ProposalTable