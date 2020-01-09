export const initCompact = (arrCompact) => {
  let arrPositive = arrCompact.filter(number => {
    return number !== 0 && number !== false && number !== undefined && number !== '' && number !== null && isNaN(number) !== true;
  });
    document.getElementById('outCompact').innerHTML = arrPositive;
};

export const initConcat = (arrConcat) => {
  arrConcat.unshift(76);
    document.getElementById('outConcat').innerHTML = arrConcat;
};

export const initDifference = (arrDiff, arrDiff2) => {
  arrDiff = arrDiff.filter(e => !~arrDiff2.indexOf(e));
  document.getElementById('outDiff').innerHTML = arrDiff;
};

export const initDrop = (arrDrop) => {
  arrDrop.splice(1,1);
    document.getElementById('outDrop').innerHTML = arrDrop;
};

export const initHead = (arrHead) => {
  arrHead.shift();
  document.getElementById('outHead').innerHTML = arrHead;
};

export const initFlatten = (arrFlat) => {
  arrFlat.flat();
  document.getElementById('outFlat').innerHTML = arrFlat;
};

export const initFlattenDeep = (arrFlatten) => {
  arrFlatten.flat(Infinity);
  document.getElementById('outFlatten').innerHTML = arrFlatten;
};

export const initInitial = (initArr) => {
  initArr.pop();
  document.getElementById('outInitial').innerHTML = initArr;
};

export const initIntersection = (arr1, arr2) => {
  arr1 = arr1.filter(e => ~arr2.indexOf(e));
    document.getElementById('outInter').innerHTML = arr1;
};

export const initJoin = (arrJoin) => {
  arrJoin = arrJoin.join('~');
  document.getElementById('outJoin').innerHTML = arrJoin;
  console.log(arrJoin);
};

export const initLast = (arrLast) => {
  arrLast = arrLast.pop();
  document.getElementById('outLast').innerHTML = arrLast;
};

export const initNth = (arrNth) => {
  arrNth = arrNth.splice(1,1);
  document.getElementById('outNth').innerHTML = arrNth;
};

export const iniPull = (arrPull) => {
  // arrPull = arrPull.
};
