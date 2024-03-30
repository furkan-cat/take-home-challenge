import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Dropdown } from "@/components/dropdown";
import { dropdownLabelsMockData } from "../utils/mock";

describe("Dropdown component", () => {
  beforeEach(async () => {
    const onChange = jest.fn();
    const onClick = jest.fn();

    render(
      <Dropdown
        data={dropdownLabelsMockData}
        filteredState={"React 19"}
        onChange={onChange}
        onClick={onClick}
        text="Author"
      />
    );
  });

  describe("Test functionalities", () => {
    it("render component properly", () => {
      const dropdown = screen.getAllByTestId("dropdown");

      expect(dropdown).toBeDefined();
    });
  });
});
