export function initAdd() {
    let num1 = parseInt(document.getElementById('a').value);
    let num2 = parseInt(document.getElementById('b').value);
    if (isNaN(num1)===true) num1=0;
    if (isNaN(num2)===true) num2=0;
    let result = num1 + num2;
    document.getElementById('out').innerHTML = result;
}

export function initCeil() {
    let num1 = parseInt(document.getElementById('ceilNum').value);
    if (isNaN(num1) === true) num1 = 0;
    let resultCeil = Math.ceil(num1);
    document.getElementById('outCeil').innerHTML = resultCeil;
}

export function initDivide() {
    let divideNum1 = parseInt(document.getElementById('divideNum1').value);
    let divideNum2 = parseInt(document.getElementById('divideNum2').value);
    if (isNaN(divideNum1)===true) divideNum1=0;
    if (isNaN(divideNum2)===true) divideNum2=0;
    let resultDivide = divideNum1 / divideNum2;
    document.getElementById('outDivide').innerHTML = resultDivide;
}

export function initFloor() {
    let floorNum1 = parseInt(document.getElementById('floorNum1').value);
    if (isNaN(floorNum1) === true) floorNum1 = 0;
    let resultFloor = Math.floor(floorNum1);
    document.getElementById('outFloor').innerHTML = resultFloor;
}

export function initMax() {
    let maxArray = [4, 2, 8, 6];
    let resultMax = Math.max(...maxArray);
    document.getElementById('outMax').innerHTML = resultMax;
}

export function initMean() {
    let arrMean = [4, 2, 8, 6];
    let totalMean = 0;
    for (let i = 0; i < arrMean.length; i++){
        totalMean += arrMean[i]
    }
    let avgMean = totalMean / arrMean.length;
    document.getElementById('outMean').innerHTML = avgMean;
}

export function initMin() {
    let minArray = [4, 2, 8, 6];
    let resultMin = Math.min(...minArray);
    document.getElementById('outMin').innerHTML = resultMin;
}

export function initMultiply() {
    let multiplyNum1 = parseInt(document.getElementById('multiply1').value);
    let multiplyNum2 = parseInt(document.getElementById('multiply2').value);
    if (isNaN(multiplyNum1) === true) multiplyNum1 = 0;
    if (isNaN(multiplyNum2) === true) multiplyNum2 = 0;
    let multiplyResult = multiplyNum1 * multiplyNum2;
    document.getElementById('outMultiply').innerHTML = multiplyResult;
}

export function initRound() {
    let roundNum1 = parseInt(document.getElementById('roundNum1').value);
    if (isNaN(roundNum1) === true) roundNum1 = 0;
    let resultRound = Math.round(roundNum1);
    document.getElementById('outRound').innerHTML = resultRound;
}

export function initSum() {
    let arrSum = [4, 2, 8, 6];
    let totalSum = 0;
    for (let i = 0; i < arrSum.length; i++) {
        totalSum += arrSum[i]
    }
    document.getElementById('outSum').innerHTML = totalSum;
}
