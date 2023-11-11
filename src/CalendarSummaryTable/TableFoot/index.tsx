import React from "react";
import { CalendarSummaryTotal } from "../../services/calendar-summary";
import TableRow from "../TableRow";
import styles from "./index.module.scss";

type TableFootProps = {
  calendarSummaryTotal: CalendarSummaryTotal;
};

const TableFoot: React.FunctionComponent<TableFootProps> = ({
  calendarSummaryTotal: { numberOfEvents, totalDuration, longestEvent },
}) => (
  <tfoot>
    <TableRow isAccent={true}>
      <th className={styles.heading}>Total</th>
      <td className={styles.entry}>{numberOfEvents}</td>
      <td className={styles.entry}>{totalDuration}</td>
      <td className={styles.entry}>{longestEvent}</td>
    </TableRow>
  </tfoot>
);

export default TableFoot;
