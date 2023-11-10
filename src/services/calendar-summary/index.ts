import {
  addDays,
  calculateCalendarSummaryTotal,
  getCalendarSummaryForDate,
} from "./helpers";
import { CalendarSummaryData } from "./types";

const fetchCalendarSummary = async (): Promise<CalendarSummaryData> => {
  const currentDate = new Date();
  const upcomingDaysIndices = Array.from(Array(7).keys());

  const summaryList = await Promise.all(
    upcomingDaysIndices.map((dayIndex) =>
      getCalendarSummaryForDate(addDays(currentDate, dayIndex))
    )
  );

  const total = calculateCalendarSummaryTotal(summaryList);

  return {
    summaryList,
    total,
  };
};

export default fetchCalendarSummary;

export * from "./types";
