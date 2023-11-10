import { useCallback, useEffect, useState } from "react";
import fetchCalendarSummary, {
  CalendarSummaryData,
} from "../services/calendar-summary";
import TableRow from "./TableRow";

const TABLE_HEADINGS = [
  "Date",
  "Number of events",
  "Total duration [min]",
  "Longest event",
];

const CalendarSummaryTable = () => {
  const [calendarSummary, setCalendarSummary] = useState<CalendarSummaryData>();

  const handleFetchCalendarSummary = useCallback(async () => {
    const calendarSummary = await fetchCalendarSummary();

    setCalendarSummary(calendarSummary);
  }, []);

  useEffect(() => {
    void handleFetchCalendarSummary();
  }, [handleFetchCalendarSummary]);

  const { summaryList, total } = calendarSummary ?? {};
  const {
    numberOfEvents: totalNumberOfEvents,
    totalDuration: totalDurationSum,
    longestEvent: totalLongestEvent,
  } = total ?? {};

  return (
    <table>
      <thead>
        <tr>
          {TABLE_HEADINGS.map((heading) => (
            <th key={`table-heading-${heading}`}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {summaryList?.map((item) => (
          <TableRow calendarSummaryItem={item} key={`table-row-${item.date}`} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <td>{totalNumberOfEvents}</td>
          <td>{totalDurationSum}</td>
          <td>{totalLongestEvent}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CalendarSummaryTable;
