export type CalendarSummaryItem = {
  date: Date;
  numberOfEvents: number;
  totalDuration: number;
  longestEvent: string;
  longestEventDuration: number;
};

export type CalendarSummaryList = CalendarSummaryItem[];

export type CalendarSummaryTotal = Omit<
  CalendarSummaryItem,
  "date" | "longestEventDuration"
>;

export type CalendarSummaryData = {
  summaryList: CalendarSummaryList;
  total: CalendarSummaryTotal;
};
