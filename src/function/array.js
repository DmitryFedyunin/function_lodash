export const initCompact = (arr) => {
  let arrPositive = arr.filter(number => {
    return number !== 0 && number !== false && number !== undefined && number !== '' && number !== null && isNaN(number) !== true;
  });
    return arrPositive;
};

export const initConcat = (arr,item) => {
  arr.unshift(item);
  return arr;
};

export const initDifference = (arr1, arr2) => {
  arr1 = arr1.filter(e => !~arr2.indexOf(e));
  return arr1;
};

export const initDrop = (arr) => {
  arr = arr.slice(1,2);
  return arr;
};

export const initHead = (array) => array[0];

export const initFlatten = (arr) => {
  arr.flat();
  return arr;
};

export const initFlattenDeep = (arr, item) => {
  arr = arr.flat(item);
  return arr;
};

export const initInitial = (arr) => {
  arr.pop();
  return arr;
};

export const initIntersection = (arr1, arr2) => {
  arr1 = arr1.filter(e => ~arr2.indexOf(e));
  return arr1;
};

export const initJoin = (arr) => {
  arr = arr.join('~');
  return arr;
};

export const initLast = (arr) => {
  arr = arr.pop();
  return arr;
};

export const initNth = (arr) => {
  arr = arr.splice(1,1);
  return arr;
};

export const iniPull = (arr1, arr2) => {
  arr1 = arr1.filter(e => !~arr2.indexOf(e));
  return arr1;
};

export const initRemove = (arr) => {
    arr = arr.filter((e,i) => (i%2));
    return arr
};

export const initSlice = (arr) => {
    arr = arr.slice(1,4);
    return arr
};

export const initTail = (arr) => {
    arr.shift();
    return arr
};

export const initTake = (arr, item) => {
  arr = arr.slice(item);
  return arr;
};

export const initUniq = (arr) => {
  arr = arr.filter((value, index, self) => self.indexOf(value) === index);
  return arr;
};

export const initUnion = (arr, arr2) => {
  arr2 = arr2.filter(e => !~arr.indexOf(e));
  arr2 = arr.concat(arr2);
  return arr2;
};
