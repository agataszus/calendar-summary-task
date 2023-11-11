import getCalendarEvents from "../../api-client";
import { CalendarSummaryItem, CalendarSummaryList } from "./types";

export const addDays = (date: Date, numberOfDays: number) => {
  const newDate = new Date(date);

  newDate.setDate(date.getDate() + numberOfDays);

  return newDate;
};

export const getCalendarSummaryForDate = async (
  date: Date
): Promise<CalendarSummaryItem> => {
  const events = await getCalendarEvents(date);

  const totalDuration = events.reduce(
    (total, event) => total + event.durationInMinutes,
    0
  );

  const [{ title: longestEvent, durationInMinutes: longestEventDuration }] = [
    ...events,
  ].sort(
    (eventA, eventB) => eventB.durationInMinutes - eventA.durationInMinutes
  );

  return {
    date,
    numberOfEvents: events.length,
    totalDuration,
    longestEvent,
    longestEventDuration,
  };
};

export const calculateCalendarSummaryTotal = (
  summaryList: CalendarSummaryList
) => {
  const { numberOfEvents, totalDuration } = summaryList.reduce(
    (total, item) => ({
      numberOfEvents: total.numberOfEvents + item.numberOfEvents,
      totalDuration: total.totalDuration + item.totalDuration,
    }),
    {
      numberOfEvents: 0,
      totalDuration: 0,
    }
  );

  const [{ longestEvent }] = [...summaryList].sort(
    (summaryA, summaryB) =>
      summaryB.longestEventDuration - summaryA.longestEventDuration
  );

  return {
    numberOfEvents,
    totalDuration,
    longestEvent,
  };
};
