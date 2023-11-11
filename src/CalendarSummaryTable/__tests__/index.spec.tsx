import { render, screen, waitFor } from "@testing-library/react";
import CalendarSummaryTable from "..";
import fetchCalendarSummary from "../../services/calendar-summary";
import { addDays } from "../../services/calendar-summary/helpers";

jest.mock("../../services/calendar-summary");
const mockFetchCalendarSummary = jest.mocked(fetchCalendarSummary);

const mockCalendarSummary = {
  summaryList: [
    {
      date: addDays(new Date(), 0),
      numberOfEvents: 7,
      totalDuration: 550,
      longestEvent: "Eligendi quis corrupti praesentium.",
      longestEventDuration: 137,
    },
    {
      date: addDays(new Date(), 1),
      numberOfEvents: 7,
      totalDuration: 957,
      longestEvent: "Ipsam sit et veritatis.",
      longestEventDuration: 173,
    },
    {
      date: addDays(new Date(), 2),
      numberOfEvents: 5,
      totalDuration: 379,
      longestEvent:
        "Blanditiis officia aut sed deserunt tempore consequuntur sed.",
      longestEventDuration: 148,
    },
    {
      date: addDays(new Date(), 3),
      numberOfEvents: 3,
      totalDuration: 106,
      longestEvent: "Ex tenetur qui tempore repellendus nobis est.",
      longestEventDuration: 46,
    },
    {
      date: addDays(new Date(), 4),
      numberOfEvents: 8,
      totalDuration: 921,
      longestEvent: "Ut eligendi dolorem ipsum occaecati accusamus esse est.",
      longestEventDuration: 179,
    },
    {
      date: addDays(new Date(), 5),
      numberOfEvents: 7,
      totalDuration: 603,
      longestEvent: "Accusamus eveniet commodi suscipit sunt rerum eum.",
      longestEventDuration: 170,
    },
    {
      date: addDays(new Date(), 6),
      numberOfEvents: 7,
      totalDuration: 576,
      longestEvent: "Quisquam qui sint perferendis sint.",
      longestEventDuration: 131,
    },
  ],
  total: {
    numberOfEvents: 44,
    totalDuration: 4092,
    longestEvent: "Ut eligendi dolorem ipsum occaecati accusamus esse est.",
  },
};

describe("CalendarSummaryTable", () => {
  beforeEach(() => {
    mockFetchCalendarSummary.mockResolvedValue(mockCalendarSummary);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render table with headings by default", async () => {
    render(<CalendarSummaryTable />);

    expect(screen.getByRole("table")).toBeVisible();
    expect(screen.getByRole("columnheader", { name: "Date" })).toBeVisible();
    expect(
      screen.getByRole("columnheader", { name: "Number of events" })
    ).toBeVisible();
    expect(
      screen.getByRole("columnheader", { name: "Total duration [min]" })
    ).toBeVisible();
    expect(
      screen.getByRole("columnheader", { name: "Longest event" })
    ).toBeVisible();

    // Needed to omit jest act errors in console
    await waitFor(() => {
      expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
    });
  });

  it("should load initially and show summary when its ready", async () => {
    render(<CalendarSummaryTable />);

    expect(screen.getByTestId("loading")).toBeVisible();

    await waitFor(() => {
      expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
    });

    expect(screen.getAllByRole("row")).toHaveLength(9);
  });

  describe("error state", () => {
    it("should be visible when there was error while fetching events", async () => {
      mockFetchCalendarSummary.mockRejectedValue(new Error());

      render(<CalendarSummaryTable />);

      expect(screen.getByTestId("loading")).toBeVisible();

      await waitFor(() => {
        expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
      });

      expect(screen.getByRole("alert")).toBeVisible();
    });
  });
});
