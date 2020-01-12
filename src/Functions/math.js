function checkTypes(type, ...params) {
    if (typeof params === type && params !== null && params !== undefined && params !== 'object' && params !== isNaN(type)) {
        return true;
    }
    return false;
}

export function Add(num1,num2) {
    checkTypes('number', [num1, num2]);
    return num1 + num2;
}

export function Ceil(num1) {
    checkTypes('number', [num1]);
    return console.log(Math.ceil(num1));
}

export function Divide(num1,num2) {
    checkTypes('number', [num1,num2]);
    return num1 / num2;
}

export function Floor(num1) {
    checkTypes('number', [num1]);
    return Math.floor(num1);
}

export function Max(someArray) {
    checkTypes([], [someArray]);
    return Math.max(...someArray);
}

export function Mean(arr) {
    const totalMean = Sum(arr);
    let avgMean = totalMean / arr.length;
    return avgMean;
}

export function Min(someArray) {
    checkTypes('number', [someArray]);
    return Math.min(...someArray);
}

export function Multiply(num1,num2) {
    let multiplyResult = num1 * num2;
    return multiplyResult;
}

export function Round(num1) {
    let resultRound = Math.round(num1);
    return resultRound;
}

export function Sum(someArray) {
    let totalSum = 0;
    for (let i=0; i<someArray.length; i++ ) {
        totalSum += someArray[i]
    }
    return totalSum;
}
