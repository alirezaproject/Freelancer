import React from "react";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";

function ProposalTable({ proposals }) {
  if (!proposals?.length) return <Empty />;
  return (
    <Table>
      <Table.header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.header>
      <Table.body>
        {proposals.map((proposal, index) => (
          <ProposalRow proposal={proposal} index={index} key={proposal._id} />
        ))}
      </Table.body>
    </Table>
  );
}

export default ProposalTable;
