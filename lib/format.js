/**
 * Format output from an array of arrays into sequence - frequency string.
 * @param {*} arrayInput An array input containing arrays of the word sequences and their frequencies.
 */
const formatOutput = (arrayInput) => {
    let formattedOutput = '';
    arrayInput.forEach(element => {
        formattedOutput += `${element[0]} - ${element[1]}\n`;
    });
    return formattedOutput;
}

/**
 * Format to remove punctuations and make lowercase
 */
const formatLines = (file) => {
    /**
     * Format to lowercase, remove all characters except word characters, spaces and apostrophes.
     * Replaces new lines with spaces.
     * Turns the text into an array of words
     */
    let fileToArray = file.toLowerCase().replace(/[^\w\s\']/, "").replace(/(\r\n|\n|\r)/gm, " ").split(" ");
    
    // Filter out empty strings
    fileToArray = fileToArray.filter(item => item);
    return fileToArray;
}

module.exports = {
    formatOutput,
    formatLines
}