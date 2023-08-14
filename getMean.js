// Write a function that takes as parameters an array (arr) and 2 integers (x and y). The function should return the mean between the mean of the the first x elements of the array and the mean of the last y elements of the array.

// The mean should be computed if both x and y have values higher than 1 but less or equal to the array's length. Otherwise the function should return -1.

// Examples
// [1, 3, 2, 4], 2, 3 => should return 2.5
// because: the mean of the the first 2 elements of the array is (1+3)/2=2 and the mean of the last 3 elements of the array is (4+2+3)/3=3 so the mean of those 2 means is (2+3)/2=2.5.

// [1, 3, 2, 4], 1, 2 => should return -1
// because x is not higher than 1.

// [1, 3, 2, 4], 2, 8 => should return -1
// because 8 is higher than the array's length.


function getMean(arr, x, y) {
    if (x <= 1 || y <= 1 || x > arr.length || y > arr.length) {
        return -1;
    }

    let firstXSum = 0;
    for (let i = 0; i < x; i++) {
        firstXSum += arr[i];
    }
    const firstXMean = firstXSum / x;

    let lastYSum = 0;
    for (let i = arr.length - y; i < arr.length; i++) {
        lastYSum += arr[i];
    }
    const lastYMean = lastYSum / y;

    const finalMean = (firstXMean + lastYMean) / 2;

    return finalMean;
}