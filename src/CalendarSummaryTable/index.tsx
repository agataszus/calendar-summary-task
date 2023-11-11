import React, { useCallback, useEffect, useState } from "react";
import fetchCalendarSummary, {
  CalendarSummaryData,
} from "../services/calendar-summary";
import styles from "./index.module.scss";
import TableHead from "./TableHead";
import TableFoot from "./TableFoot";
import TableBody from "./TableBody";
import TableLoading from "./TableLoading";
import TableError from "./TableError";

const CalendarSummaryTable: React.FunctionComponent = () => {
  const [calendarSummary, setCalendarSummary] = useState<CalendarSummaryData>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleFetchCalendarSummary = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const calendarSummary = await fetchCalendarSummary();

      setCalendarSummary(calendarSummary);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void handleFetchCalendarSummary();
  }, [handleFetchCalendarSummary]);

  return (
    <>
      <table className={styles.table}>
        <TableHead />
        {isLoading && <TableLoading />}
        {calendarSummary && (
          <>
            <TableBody summaryList={calendarSummary.summaryList} />
            <TableFoot calendarSummaryTotal={calendarSummary.total} />
          </>
        )}
      </table>
      {isError && <TableError onRetry={handleFetchCalendarSummary} />}
    </>
  );
};

export default CalendarSummaryTable;
