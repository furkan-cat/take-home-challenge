import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Avatar from "@/components/avatar";

describe("Avatar component", () => {
  beforeEach(async () => {
    render(
      <Avatar
        class="avatar"
        src="test-src"
        name="test-name"
        nickname="test-nickname"
        w={5}
        h={5}
      />
    );
  });

  describe("Test functionalities", () => {
    it("render component properly", () => {
      const avatar = screen.getAllByTestId("avatar");

      expect(avatar).toBeDefined();
    });
  });

  describe("Test attrubutes", () => {
    it("name attribute", () => {
      const name = screen.getAllByTestId("name");

      expect(name).toBeDefined();
    });

    it("nickname attribute", () => {
      const nickname = screen.getAllByTestId("nickname");

      expect(nickname).toBeDefined();
    });
  });
});
