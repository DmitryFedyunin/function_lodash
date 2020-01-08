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

export const initDrop = () => {
    let arrDrop = [1,2,3];
    let arrnew = arrDrop.splice(1,1);
    document.getElementById('outDrop').innerHTML = arrnew;
};

export const initHead = () => {
  let arrHead = [1,2,3];
  let newArr = arrHead.shift();
  document.getElementById('outHead').innerHTML = newArr;
};

export const initFlatten = () => {
  let arrFlat = [1, [2, [3, [4]], 5]];
  let newFlat = arrFlat.flat();
  document.getElementById('outFlat').innerHTML = newFlat;
  console.log(newFlat);
};

export const initFlattenDeep = () => {
  let arrFlatten = [1,2,3,[1,2,3,4, [2,3,4]]];
  let flattenDeep = arrFlatten.flat(Infinity);
  document.getElementById('outFlatten').innerHTML = flattenDeep;
  console.log(flattenDeep);
};

export const initInitial = () => {
  let initArr = [1,2,3];
  initArr.pop();
  document.getElementById('outInitial').innerHTML = initArr;
};

export const initIntersection = () => {
    let arrInterseption = [1,2,3,4,5,10];
    let arrInterseption2 = [1,2,3,6];
    arrInterseption = arrInterseption.filter(e => ~arrInterseption2.indexOf(e))
    document.getElementById('outInter').innerHTML = arrInterseption;
};
