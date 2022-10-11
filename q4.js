/*
Q4. Write a JavaScript program to take an array as input from the user and:


a) Store all duplicate elements in a separate array

*/
const arr = [1, 2, 3, 2, 3, 4, 5];

const tofindDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
const duplicateElements = tofindDuplicates(arr);
console.log(duplicateElements);

/*
b) Remove the duplicate elements from the original array
*/

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates(arr));
