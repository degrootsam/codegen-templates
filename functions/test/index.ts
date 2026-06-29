import { describe, it, expect } from "vitest";
// $importFunction

describe("{{ functionName }}/{{ functionVersion }}", () => {
  it("should do something expected", async () => {
    // Arrange
    const input = "{ ...input }";
    const expected = "expected output";

    // Act
    const result = // $callFunction
      // Assert
      expect(result).toStrictEqual(expected);
  });
});

// Read https://vitest.dev/guide/ for more info on writing tests with Vitest
