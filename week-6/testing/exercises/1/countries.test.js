const countries = require("./countries");
const { find } = require("./countries");

test("passing an empty string and return empty array", () => {
    const found = find("");
    expect(found).toEqual([]);
});

test("Passing four matches", () => {
    const found = find("a");
    expect(found.length).toBeGreaterThanOrEqual(4);
});

test("Check if search is case insensitive", () => {
    const found = find("BrA");
    // expect(found.length).toBe(1);
    expect(found).toEqual(["Brazil"]);
});

test("If there are no matching countries, an empty array is returned", () => {
    const found = find("PAJDHB");
    expect(found).toEqual([]);
});
