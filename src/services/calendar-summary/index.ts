import { UPCOMING_DAYS_NUMBER } from "./constants";
import {
  addDays,
  calculateCalendarSummaryTotal,
  getCalendarSummaryForDate,
} from "./helpers";
import { CalendarSummaryData } from "./types";

/**
 * Function that fetches and calculates summaries of calendar events
 * for the next 7 days. It returns list of summaries for each day and
 * total summary of all days.
 */
const fetchCalendarSummary = async (): Promise<CalendarSummaryData> => {
  const currentDate = new Date();
  const upcomingDaysIndices = Array.from(Array(UPCOMING_DAYS_NUMBER).keys());

  const summaryList = await Promise.all(
    upcomingDaysIndices.map((dayIndex) =>
      getCalendarSummaryForDate(addDays(currentDate, dayIndex))
    )
  );

  const sortedSummaryList = summaryList.sort(
    (itemA, itemB) => itemA.date.getTime() - itemB.date.getTime()
  );

  const total = calculateCalendarSummaryTotal(summaryList);

  return {
    summaryList: sortedSummaryList,
    total,
  };
};

export default fetchCalendarSummary;

export * from "./types";
