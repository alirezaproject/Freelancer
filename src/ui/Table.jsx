import React from "react";

function Table({ children }) {
  return (
    <div className="overflow-x-auto bg-secondary-0">
      <table>{children}</table>
    </div>
  );
}

export default Table;

function TableHeader({ children }) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return <tr>{children}</tr>;
}

Table.header = TableHeader;
Table.body = TableBody;
Table.Row = TableRow;
