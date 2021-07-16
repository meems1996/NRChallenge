/**
 * Sorting an array of arrays in the format [string, number], using merge sort to sort in descending order. 
 * Sorting by the second index in the arrays (number).
 * @param {*} array Array of arrays containing two indices [string, number]
 */
const mergeSort = (array) => {
    //the base case for the recursive calls  
    if (array.length < 2) {
        return array;
    }

    const midpointindex = Math.floor(array.length / 2);
    const left = array.slice(0, midpointindex);
    const right = array.slice(midpointindex);

    return merge(mergeSort(left), mergeSort(right));

}

const merge = (left, right) => {
    let sortedArr = [];
    let leftIndex = 0; 
    let rightIndex = 0; 

    while (leftIndex < left.length && rightIndex < right.length) {
        const leftElement = left[leftIndex][1];
        const rightElement = right[rightIndex][1];

        if(leftElement > rightElement) {
            sortedArr.push(left[leftIndex]);
            leftIndex++;
        } else {
            sortedArr.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return [...sortedArr, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

module.exports = mergeSort;