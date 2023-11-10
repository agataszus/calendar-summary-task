import { CalendarSummaryItem } from "../../services/calendar-summary";
import { parseDate } from "../helpers";

type TableRowProps = {
  calendarSummaryItem: CalendarSummaryItem;
};

const TableRow = ({ calendarSummaryItem }: TableRowProps) => {
  const { date, numberOfEvents, totalDuration, longestEvent } =
    calendarSummaryItem;

  const parsedDate = parseDate(date);

  return (
    <tr>
      <td>{parsedDate}</td>
      <td>{numberOfEvents}</td>
      <td>{totalDuration}</td>
      <td>{longestEvent}</td>
    </tr>
  );
};

export default TableRow;
