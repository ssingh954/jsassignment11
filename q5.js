/*
Q5. Debug the given JavaScript program and execute the correct code.
*/

function ThirdLargest(arr, arr_size){
    /* There should be
    at least three elements */
        if (arr_size < 3){ //less than
            document.write(" Invalid Input "); 
            return;
        }
    
        let first = arr[0];
        for (let i = 1; i < arr_size; i++){
            if (arr[i] > first){
                //arr[i] = first;
                first = arr[i];
            }
        }
    
        //console.log(first);
        console.log("The third Largest " + "element is ", first); 
}
let arr = [12, 13, 1, 10, 34, 16]; 
let n = arr.length;
ThirdLargest(arr, n);
