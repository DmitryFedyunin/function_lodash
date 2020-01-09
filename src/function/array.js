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

export const iniPull = (arrPull, arrPull2) => {
    arrPull = arrPull.filter(e => !~arrPull2.indexOf(e));
  document.getElementById('outPull').innerHTML = arrPull;
};

export const initRemove = (arrRemove) => {
    arrRemove = arrRemove.filter((e,i) => (i%2));
    document.getElementById('outRemove').innerHTML = arrRemove;
};

export const initSlice = (arrSlice) => {
    arrSlice = arrSlice.slice(1,4);
    document.getElementById('outSlice').innerHTML = arrSlice;
};

export const initTail = (arrTail) => {
    arrTail.shift();
    document.getElementById('outTail').innerHTML = arrTail;
};

export const initTake = (arrTake) => {
    arrTake = arrTake.slice(0,2);
    document.getElementById('outTake').innerHTML = arrTake;
};

export const initUniq = (arrUniq) => {
    arrUniq = arrUniq.filter((value, index, self) => self.indexOf(value) === index);
    document.getElementById('outUniq').innerHTML = arrUniq;
};

export const initUnion = (arrUnion, arrUnion2) => {
    arrUnion = arrUnion.filter(e => !~arrUnion2.indexOf(e));
    arrUnion2 = arrUnion2.filter(e => !~arrUnion.indexOf(e));
    // arrUnion = arrUnion.concat(arrUnion2);
    document.getElementById('outUnion').innerHTML = arrUnion;
    console.log(arrUnion);
};
