const fsAccess = require('fs');
const mergeSort = require('./mergeSort');
const { formatOutput, formatLines } = require('./format');

// A Map to store all the three word sequences and their frequences
let sequencesMap = new Map();

/**
 * Iterate through an array of filepaths to return the top 100 three word sequences and their frequencies.
 * @param {*} files an array of filepaths
 */
const getTop100WordSequences = (files) => {
    for (let i = 0; i < files.length; i++) {
        try {
            let data = fsAccess.readFileSync(files[i], 'utf8');
            processFile(data);
        } catch (e) {
            console.log(`Error processing file ${files[i]}`);
        }
    }
    
    // Convert the Map data structure into an array of array elements to prepare for sorting.
    let sequencesMapToArray = [...sequencesMap];

    // Sort the array containing the sequences and their frequencies in descending order, using merge sort.
    let sortedMap = mergeSort(sequencesMapToArray);

    // Get the top 100 sequences (or first 100 in this case) and their frequencies from the result.
    let getTop100 = sortedMap.splice(0,100);

    // Format the output to the desired result.
    let formatted = formatOutput(getTop100);

    // Print the output to the console.
    return formatted;
}

/**
 * Split file into three word sequences using a sliding window.
 * Add to Map with frequencies.
 * @param {*} file 
 */
const processFile = (file) => {
    let fileToArray = formatLines(file);

    for (let i = 0; i < fileToArray.length; i++) {
        if ((i + 2 ) < fileToArray.length) {
            addToMap(`${fileToArray[i]} ${fileToArray[i + 1]} ${fileToArray[i + 2]}`);
        }
    }
}

/**
 * Add to Map data structure to hold the sequences and their occurence frequencies.
 * @param {*} sequence Takes in a sequence of words.
 */
const addToMap = (sequence) => {
    if (sequencesMap.has(sequence)) {
        sequencesMap.set(sequence, sequencesMap.get(sequence) + 1)
    } else {
        sequencesMap.set(sequence, 1); 
    }
}

module.exports = getTop100WordSequences;