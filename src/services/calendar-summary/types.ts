export type CalendarSummaryItem = {
  date: Date;
  numberOfEvents: number;
  totalDuration: number;
  longestEvent: string;
};

export type CalendarSummaryList = CalendarSummaryItem[];

export type CalendarSummaryTotal = Omit<CalendarSummaryItem, "date">;

export type CalendarSummaryData = {
  summaryList: CalendarSummaryList;
  total: CalendarSummaryTotal;
};
