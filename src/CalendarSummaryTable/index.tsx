import React, { useCallback, useEffect, useState } from "react";
import fetchCalendarSummary, {
  CalendarSummaryData,
} from "../services/calendar-summary";
import styles from "./index.module.scss";
import TableHead from "./TableHead";
import TableFoot from "./TableFoot";
import TableBody from "./TableBody";

const CalendarSummaryTable: React.FunctionComponent = () => {
  const [calendarSummary, setCalendarSummary] = useState<CalendarSummaryData>();

  const handleFetchCalendarSummary = useCallback(async () => {
    const calendarSummary = await fetchCalendarSummary();

    setCalendarSummary(calendarSummary);
  }, []);

  useEffect(() => {
    void handleFetchCalendarSummary();
  }, [handleFetchCalendarSummary]);

  return (
    <table className={styles.table}>
      <TableHead />
      {calendarSummary && (
        <>
          <TableBody summaryList={calendarSummary.summaryList} />
          <TableFoot calendarSummaryTotal={calendarSummary.total} />
        </>
      )}
    </table>
  );
};

export default CalendarSummaryTable;
