const getTop100WordSequences = require('./lib/getTop100WordSequences');

const startApplication = () => {
    // Remove the first couple of arguments
    const filePaths = process.argv.slice(2);

    // get the top 100 three word sequences and their frequences 
    const top100WordSequences = getTop100WordSequences(filePaths);
    printOutputToConsole(top100WordSequences);
}

/**
 * Print the formatted result to the console.
 * @param {*} formattedOutput 
 */
const printOutputToConsole = (formattedOutput) => {
    console.log(formattedOutput);
}

startApplication();