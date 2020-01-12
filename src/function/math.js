export function initAdd(num1,num2) {
    let result = num1 + num2;
    return result;
}

export function initCeil(num1) {
    let resultCeil = Math.ceil(num1);
    return resultCeil;
}

export function initDivide(num1,num2) {
    let resultDivide = num1 / num2;
    return resultDivide;
}

export function initFloor(num1) {
    let resultFloor = Math.floor(num1);
    return resultFloor;
}

export function initMax(someArray) {
    let resultMax = Math.max(...someArray);
    return resultMax;
}

export function initMean(arrMean, totalMean) {
    for (let i=0;i<arrMean.length;i++ ){
        totalMean +=arrMean[i]
    }
    let avgMean = totalMean / arrMean.length;
    return avgMean;
}

export function initMin(someArray) {
    let resultMin = Math.min(...someArray);
    return resultMin;
}

export function initMultiply(num1,num2) {
    let multiplyResult = num1 * num2;
    return multiplyResult;
}

export function initRound(num1) {
    let resultRound = Math.round(num1);
    return resultRound;
}

export function initSum(someArray, totalSum=0) {
    for (let i=0; i<someArray.length; i++ ) {
        totalSum += someArray[i]
    }
    return totalSum;
}
