import { render, screen } from "@testing-library/react";
import CalendarSummary from "..";

jest.mock("../../CalendarSummaryTable", () => () => (
  <div data-testid="table" />
));

describe("CalendarSummary", () => {
  it("should render title, description and table", () => {
    render(<CalendarSummary />);

    expect(
      screen.getByRole("heading", { name: "Calendar summary" })
    ).toBeVisible();
    expect(
      screen.getByText("A summary of calendar events for the next seven days")
    ).toBeVisible();
    expect(screen.getByTestId("table")).toBeVisible();
  });
});
