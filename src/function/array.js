export const initCompact = () => {
    let arrCompact = [2, 0, 6, 7, NaN, 8, false, undefined];
    let arrPositive = arrCompact.filter(number => {
        return number !== 0 && number !== false && number !== undefined && number !== '' && number !== null && isNaN(number) !== true;
    });
    document.getElementById('outCompact').innerHTML = arrPositive;
};

export const initConcat = () => {
    let arrConcat = [2, 3, 5, 6];
    arrConcat.unshift(76);
    document.getElementById('outConcat').innerHTML = arrConcat;
};

export const initDifference = () => {
  let arrDiff = [1,2,3,4,5,10];
  let arrDiff2 = [2,4,5];
  arrDiff = arrDiff.filter(e => !~arrDiff2.indexOf(e))
  document.getElementById('outDiff').innerHTML = arrDiff;
};
