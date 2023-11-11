import React from "react";
import CalendarSummaryTable from "../CalendarSummaryTable";
import styles from "./index.module.scss";

const CalendarSummary: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Calendar summary</h2>
      <p className={styles.description}>
        A summary of calendar events for the next seven days
      </p>
      <div className={styles.tableContainer}>
        <CalendarSummaryTable />
      </div>
    </div>
  );
};

export default CalendarSummary;
