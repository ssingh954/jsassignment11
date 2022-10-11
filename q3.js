/*
Q3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain array?
*/

function flatten(arr){
    return String(arr).split(',').map(Number);
}
console.log(flatten([ 1, 2, [ 3, 4, [ 5 ] ] ]));