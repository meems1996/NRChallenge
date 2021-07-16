/**
 * Format output from an array of arrays into sequence - frequency string.
 * @param {*} arrayInput An array input containing arrays of the word sequences and their frequencies.
 */
const arrayToStrings = (arrayInput) => {
    let formattedOutput = '';
    arrayInput.forEach(element => {
        formattedOutput += `${element[0]} - ${element[1]}\n`;
    });
    return formattedOutput;
}

/**
 * Takes in a string for the file contents and returns a filtered array of the words in the text file.
 * @param fileContent Takes in a string for the text file content 
 */
const splitFileContentToArrayOfWords = (fileContent) => {
    let fileToArray = fileContent.toLowerCase()
            // Remove all punctuations except apostrophes
        .replace(/[!"#$%&()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
            // Replace new lines with spaces
        .replace(/(\r\n|\n|\r)/gm, " ")
            // Split file lines into an array of words
        .split(" ");
    
    // Filter out empty strings
    fileToArray = fileToArray.filter(item => item);
    return fileToArray;
}

module.exports = {
    arrayToStrings,
    splitFileContentToArrayOfWords
}