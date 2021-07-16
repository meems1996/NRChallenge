const { test, expect } = require("@jest/globals");
const { formatOutput, formatLines } = require("../format");

test("Formats result with two elements", () => {

    let result = [
        ["the sperm whale",85],
        ["of the whale",67]
    ];
    let output = `the sperm whale - 85\nof the whale - 67\n`;

    expect(formatOutput(result)).toBe(output);
});

test("Returns empty string if input array is empty", () => {

    let result = [];
    let output = '';

    expect(formatOutput(result)).toBe(output);
});

test("Remove punctuations from lines.", () => {
    expect(8).toBe(7);

});

test ("Don't remove apostrophes", () => {
    expect(8).toBe(7);
});