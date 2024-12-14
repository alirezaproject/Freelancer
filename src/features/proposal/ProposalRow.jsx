import React from 'react'
import Table from '../../ui/Table';
import truncateText from '../../utils/truncateText';
import { toPersianNumbers, toPersianNumbersWithComma } from '../../utils/toPersianNumbers';

const statusStyle = [
    {
        label: "رد شده",
        className: "badge--danger",
    },
    {
        label: "در انتطار تایید",
        className: "badge--secondary",
    },
    {
        label: "تایید شده",
        className: "badge--primary",
    },
];



function ProposalRow({ proposal, index }) {
    const { status } = proposal;

    return (
        <Table.Row key={proposal._id}>
            <td>{index + 1}</td>
            <td>{truncateText(proposal.description, 60)}</td>
            <td>{toPersianNumbers(proposal.duration)} روز</td>
            <td>{toPersianNumbersWithComma(proposal.price)}</td>
            <td>
                <span className={`badge ${statusStyle[status].className}`}>
                    {statusStyle[status].label}
                </span>
            </td>

        </Table.Row>
    )
}

export default ProposalRow