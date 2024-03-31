import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dropdown from "@/components/dropdown";
import { dropdownLabelsMockData } from "../utils/mock";

describe("Dropdown component", () => {
  beforeEach(async () => {
    const onMockChange = jest.fn();
    const onMockClick = jest.fn();

    render(
      <Dropdown
        data={dropdownLabelsMockData}
        filteredState="React 19"
        onChange={onMockChange}
        onClick={onMockClick}
        text="Author"
      />
    );
  });

  describe("Test functionalities", () => {
    it("render component properly", () => {
      const dropdown = screen.getAllByTestId("dropdown-content");

      expect(dropdown).toBeDefined();
    });

    it("dropdown visibility on-click", async () => {
      const dropdown = screen.getByTestId("dropdown-content");
      const button = screen.getByTestId("dropdown-button");

      // check is button exist & is dropdown not visible
      expect(button).toBeDefined();
      expect(dropdown).toHaveStyle("visibility: hidden");

      // fire click event
      fireEvent.click(button);
      // wait till animation ends
      await waitFor(() => expect(dropdown).toHaveStyle("visibility: visible"));
      // check is dropdown visible
      fireEvent.click(button);
      // wait till animation ends
      await waitFor(() => expect(dropdown).toHaveStyle("visibility: hidden"));
    });
  });

  describe("Test properties", () => {
    it("text attribute", () => {
      const button = screen.getByTestId("dropdown-button");

      expect(button).toHaveTextContent("Author");
    });

    it("filteredState attribute", () => {
      const filteredState = screen.getAllByTestId("dropdown-filtered-state");

      expect(filteredState).toBeDefined();
    });
  });
});
