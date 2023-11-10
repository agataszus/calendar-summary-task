import { addDays } from "./helpers";
import {
  CalendarSummaryData,
  CalendarSummaryList,
  CalendarSummaryTotal,
} from "./types";

const CURRENT_DATE = new Date();

const MOCK_DATA = [
  {
    date: new Date(),
    numberOfEvents: 7,
    totalDuration: 361,
    longestEvent: "Lorem Ipsum",
  },
  {
    date: addDays(CURRENT_DATE, 1),
    numberOfEvents: 2,
    totalDuration: 120,
    longestEvent: "Lorem Ipsum",
  },
  {
    date: addDays(CURRENT_DATE, 2),
    numberOfEvents: 5,
    totalDuration: 234,
    longestEvent: "Lorem Ipsum",
  },
  {
    date: addDays(CURRENT_DATE, 3),
    numberOfEvents: 4,
    totalDuration: 165,
    longestEvent: "Lorem Ipsum",
  },
  {
    date: addDays(CURRENT_DATE, 4),
    numberOfEvents: 2,
    totalDuration: 120,
    longestEvent: "Lorem Ipsum",
  },
  {
    date: addDays(CURRENT_DATE, 5),
    numberOfEvents: 5,
    totalDuration: 234,
    longestEvent: "Lorem Ipsum",
  },
  {
    date: addDays(CURRENT_DATE, 6),
    numberOfEvents: 4,
    totalDuration: 165,
    longestEvent: "Lorem Ipsum",
  },
] satisfies CalendarSummaryList;

const MOCK_TOTAL = {
  numberOfEvents: 23,
  totalDuration: 1564,
  longestEvent: "Lorem Ipsum",
} satisfies CalendarSummaryTotal;

const fetchCalendarSummary = async (): Promise<CalendarSummaryData> => {
  return Promise.resolve({
    summaryList: MOCK_DATA,
    total: MOCK_TOTAL,
  });
};

export default fetchCalendarSummary;

export * from "./types";
