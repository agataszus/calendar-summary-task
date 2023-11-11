import { UPCOMING_DAYS_NUMBER } from "./constants";
import {
  addDays,
  calculateCalendarSummaryTotal,
  getCalendarSummaryForDate,
} from "./helpers";
import { CalendarSummaryData } from "./types";

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
