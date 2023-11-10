import React from "react";
import { getCalendarEvents } from "../api-client";
import CalendarSummaryTable from "../CalendarSummaryTable";


const CalendarSummary: React.FunctionComponent = () => {
  return (
    <div>
      <h2>Calendar summary</h2>
      <CalendarSummaryTable />
    </div>
  );
};

export default CalendarSummary;
