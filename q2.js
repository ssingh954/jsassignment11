/*
Q.2 2. Write a JavaScript program to take 2 arrays from the user and check if the number 4 exists in any of the arrays, or both of the arrays.
*/

var a = [1, 2, 3, 4, 5];
var b = [4, 6, 1, 8, 2];
   

if(a.indexOf(4) >= 0){
    console.log("4 in array 1");
}
if(b.indexOf(4) >= 0){
    console.log("4 in array 2");
}

//////////////////////////////////////////////////////////////

var a1 = [1, 2, 3, 6, 5];
var b1 = [4, 6, 1, 8, 2];
   

if(a1.indexOf(4) >= 0){
    console.log("4 in array 1");
}
if(b1.indexOf(4) >= 0){
    console.log("4 in array 2");
}

//////////////////////////////////////////////////////////////

var a2 = [1, 2, 3, 4, 5 ];
var b2 = [ 5, 6, 1, 8, 2];
   

if(a2.indexOf(4) >= 0){
    console.log("4 in array 1");
}
if(b2.indexOf(4) >= 0){
    console.log("4 in array 2");
}