
function EvenOddSum(arr, n){
    let even = 0;
    let odd = 0;
    let diff = 0;
    let count_odd = 0;
    let count_even = 0;
    let sum = 0;
    
    for (let i = 0; i < n; i++){
        sum += arr[i];

        //console.log(arr[i]);
        // Loop to find even, odd sum
        if (i % 2 === 0){
            odd += arr[i];
            count_odd++;
        }
        else{           
            even += arr[i];
            count_even++;
        }
    }

    average = sum / arr.length;
    //console.log(count_odd); 

    //console.log(total); 
    //console.log("Diff" + diff=odd-even);
    diff = odd - even;
    
    console.log("Odd index positions sum = " + odd);
    console.log("Even index positions sum = " + even);
    
    console.log("Difference between the two sums = " + diff);

    console.log("Number of elements in odd places = " + count_odd); 
    console.log("Number of elements in even places = " + count_even); 

    console.log("Average of all elements in the array = " + average); 

    var x = even;
    var y = odd;
    for(z = 1; z<=x && z<=y; z++){
        if(x%z == 0 && y%z == 0){
            var gcd=z;
        }
    }
    console.log("GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even Places = " + gcd); 

}
 
// Driver function
    let arr = [ 1, 2, 3, 4, 5 ];
    let n = arr.length;
 
    EvenOddSum(arr, n);
    //console.log(n);