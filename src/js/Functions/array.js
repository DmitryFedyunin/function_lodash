export const Compact = (arr) => {
  let arrPositive = arr.filter(number => {
    return number !== 0 && number !== false && number !== undefined && number !== '' && number !== null && isNaN(number) !== true;
  });
    return arrPositive;
};

export const Concat = (arr,item) => {
  arr.unshift(item);
  return arr;
};

export const Difference = (arr1, arr2) => {
  arr1 = arr1.filter(e => !~arr2.indexOf(e));
  return arr1;
};

export const Drop = (arr, item) => {
  return Slice(arr, item, 1);
};

export const Head = (array) => array[0];

export const Flatten = (arr) => {
  arr.flat();
  return arr;
};

export const FlattenDeep = (arr, item) => {
  arr = arr.flat(item);
  return arr;
};

export const Initial = (arr) => {
  arr.pop();
  return arr;
};

export const Intersection = (arr1, arr2) => {
  arr1 = arr1.filter(e => ~arr2.indexOf(e));
  return arr1;
};

export const Join = (arr,item) => {
  arr = arr.join(item);
  return arr;
};

export const Last = (arr) => {
  arr = arr.pop();
  return arr;
};

export const Nth = (arr, start, end) => {
  arr = arr.splice(start, end);
  return arr;
};

export const ull = (arr1, arr2) => {
  arr1 = arr1.filter(e => !~arr2.indexOf(e));
  return arr1;
};

function predicat(item) {
  item = item % 2 === 0;
  return item
}
// функция принимает предикат но он необязательный, поэтому я создал отдельную функцию для условия (не оч практично)
export const Remove = (arr) => {
  let arrCopy = arr;
  arrCopy = arrCopy.filter(i => predicat(i));
  return arrCopy
};

// функция принимает массив и значения для функции slice с какого по какой элемент удалять
export const Slice = (arr, start, end) => {
  return arr.slice(start, end);
};

export const Tail = (arr) => {
    arr.shift();
    return arr
};

export const Take = (arr, item) => {
  arr = arr.slice(item);
  return arr;
};

export const Uniq = (arr) => {
  arr = arr.filter((value, index, self) => self.indexOf(value) === index);
  return arr;
};

export const Union = (arr, arr2) => {
  arr2 = arr2.filter(e => !~arr.indexOf(e));
  arr2 = arr.concat(arr2);
  return arr2;
};
