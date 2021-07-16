const getTop100WordSequences = require('./lib/getTop100WordSequences');
const { arrayToStrings } = require('./lib/format');

const startApplication = () => {
    // Remove the first couple of arguments
    const filePaths = process.argv.slice(2);

    // get the top 100 three word sequences and their frequencies. 
    const top100WordSequences = getTop100WordSequences(filePaths);

    // Format the array of the top 100 word sequences and their frequencies to the following format: 
    // word sequence - frequency
    let formattedWordSequences = arrayToStrings(top100WordSequences);
    console.log(formattedWordSequences);
}

startApplication();