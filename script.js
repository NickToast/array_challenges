function alwaysHungry(arr) {
    // your code here
    var foodCount = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            foodCount++;
        }
    }
    if (foodCount == 0) {
        console.log("I'm hungry");
    }
}

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


//high pass filter

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


//better than average

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        var avg = sum / arr.length;
    }
    var count = 0
    // count how many values are greated than the average
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//array reverse

function reverse(arr) {
    // your code here
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//fibonacci array

function fibonacciArray(n) {
    var fibArr = [0, 1];
    while (fibArr.length < n) {
        var second = fibArr[fibArr.length - 1];
        var first = fibArr[fibArr.length - 2];
        fibArr.push(first + second);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]