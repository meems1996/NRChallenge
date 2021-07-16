const mergeSort = require('../mergeSort.js');
const { expect } = require('@jest/globals');

test("If only one element is present, return the element", () => {
    let array = [
        ["of the whale",67],
    ];

    let sorted = [
        ["of the whale",67],
    ];

    expect(mergeSort(array)).toEqual(sorted);
});

test("Sorts two elements in descending order", () => {
    let array = [
        ["of the whale",67],
        ["the sperm whale",85]
    ];

    let sorted = [
        ["the sperm whale",85],
        ["of the whale",67]
    ];

    expect(mergeSort(array)).toEqual(sorted);
});

test("If input is empty, return empty array", () => {
    let array = [];
    let sorted = [];

    expect(mergeSort(array)).toEqual(sorted);
});