import React from "react";
import { CalendarSummaryList } from "../../services/calendar-summary";
import TableEntry from "../TableEntry";

type TableBodyProps = {
  summaryList: CalendarSummaryList;
};

const TableBody: React.FunctionComponent<TableBodyProps> = ({
  summaryList,
}) => (
  <tbody>
    {summaryList?.map((item, index) => (
      <TableEntry
        isAccent={index % 2 === 1}
        calendarSummaryItem={item}
        key={`table-row-${item.date}`}
      />
    ))}
  </tbody>
);

export default TableBody;
