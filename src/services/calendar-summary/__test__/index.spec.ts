import fetchCalendarSummary from "..";
import {
  calculateCalendarSummaryTotal,
  getCalendarSummaryForDate,
} from "../helpers";

jest.mock("../helpers.ts");
const mockGetCalendarSummaryForDate = jest.mocked(getCalendarSummaryForDate);
const mockCalculateCalendarSummaryTotal = jest.mocked(
  calculateCalendarSummaryTotal
);

describe("fetchCalendarSummary", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("all getCalendarSummaryForDate calls succeed", () => {
    beforeEach(() => {
      mockGetCalendarSummaryForDate.mockResolvedValue({
        date: new Date(),
        numberOfEvents: 12,
        totalDuration: 100,
        longestEvent: "Lorem ipsum",
        longestEventDuration: 20,
      });

      mockCalculateCalendarSummaryTotal.mockReturnValue({
        numberOfEvents: 30,
        totalDuration: 546,
        longestEvent: "Lorem ipsum lorem",
      });
    });

    it("should return correct summaryList", async () => {
      const { summaryList } = await fetchCalendarSummary();

      expect(mockGetCalendarSummaryForDate).toHaveBeenCalledTimes(7);

      expect(summaryList).toHaveLength(7);
      expect(summaryList[0]).toEqual({
        date: expect.any(Date),
        numberOfEvents: 12,
        totalDuration: 100,
        longestEvent: "Lorem ipsum",
        longestEventDuration: 20,
      });
    });

    it("should return correct total", async () => {
      const { total } = await fetchCalendarSummary();

      expect(mockCalculateCalendarSummaryTotal).toHaveBeenCalledTimes(1);

      expect(total).toEqual({
        numberOfEvents: 30,
        totalDuration: 546,
        longestEvent: "Lorem ipsum lorem",
      });
    });
  });

  describe("at least one getCalendarSummaryForDate call fails", () => {
    beforeEach(() => {
      mockGetCalendarSummaryForDate.mockRejectedValue(new Error());
    });

    it("should rethrow error", async () => {
      await expect(fetchCalendarSummary()).rejects.toThrow(Error);
    });
  });
});
