import React from "react";
import { CalendarSummaryItem } from "../../services/calendar-summary";
import TableRow from "../TableRow";
import { parseDate } from "../helpers";
import styles from "./index.module.scss";

type TableEntryProps = {
  calendarSummaryItem: CalendarSummaryItem;
  isAccent: boolean;
};

const TableEntry: React.FunctionComponent<TableEntryProps> = ({
  calendarSummaryItem,
  isAccent,
}) => {
  const { date, numberOfEvents, totalDuration, longestEvent } =
    calendarSummaryItem;

  const parsedDate = parseDate(date);

  return (
    <TableRow isAccent={isAccent}>
      <td className={styles.entry}>{parsedDate}</td>
      <td className={styles.entry}>{numberOfEvents}</td>
      <td className={styles.entry}>{totalDuration}</td>
      <td className={styles.entry}>{longestEvent}</td>
    </TableRow>
  );
};

export default TableEntry;
