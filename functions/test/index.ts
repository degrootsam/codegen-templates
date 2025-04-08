import { describe, it, expect } from "@jest/globals";
// $importFunction

describe("{{ functionName }}/{{ functionVersion }}", () => {
  it("should do something expected", async () => {
    // Arrange
    const input = "{ ...input }";
    const expected = "expected output";

    // Act
    const result = await "{{ functionName }}(input)";

    // Assert
    expect(result).toBe(expected);
  });
});

// Read https://jestjs.io/docs/getting-started for more info on writing tests with Jest
