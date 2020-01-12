//global style
import './stylesheet/index.scss';

//components
import './function/object';
import { initAdd, initCeil, initDivide, initFloor, initMax, initMean, initMin, initMultiply, initRound, initSum } from "~/function/math";
import { initCompact, initConcat, initDifference,
  initDrop, initHead, initFlatten, initFlattenDeep, initInitial, initIntersection, initJoin, initLast,
  initNth, iniPull, initRemove, initSlice, initTail, initTake, initUniq, initUnion} from "~/function/array";
import { initCamelCase, initCapitalize, initEndWith, initKebabCase, initLowerCase, initLowerFirst, initRepeat, initSnakeCase, initSplit,
        initStartCase, initToLower, initToUpper, initTrim, initUpperCase, initUpperFirst} from "~/function/string";

//Math function
initAdd(5,7);
initCeil(4.3);
initDivide(6,4);
initFloor(4.4);
initMax([4,6,8,2]);
initMean([4,6,8,2], 0);
initMin([4,6,2,8]);
initMultiply(6,4);
initRound(3.4);
initSum([4,6,8,2]);

// Array function
initCompact([2, 0, 6, 7, NaN, 8, false, undefined]);
initConcat([2, 3, 5, 6],3);
initDifference([1,2,3,4,5,10],[2,4,5]);
initDrop([1,2,3], 1);
const head = initHead([1,2,3,4,5,6,7,8]);
initFlatten([1, [2, [3, [4]], 5]]);
initFlattenDeep([1,2,3,[1,2,3,4,[2,3,4]]],2);
initInitial([1,2,3]);
initIntersection([2, 1], [2, 3]);
initJoin(['Fire', 'Air', 'Water']);
initLast([1,2,3]);
initNth(['a','b','c','d']);
iniPull(['a', 'b', 'c', 'a', 'b', 'c'],['a','c']);
initRemove([1, 2, 3, 4]);
const delSlice = initSlice([1,2,3,4,5,6,7,8]);
const tail = initTail([1,2,3]);
initTake([1,2,3], 2);
initUniq([2,1,2]);
initUnion([2], [1, 2]);

// String function
initCamelCase('Foo Bar');
initCapitalize('FRED');
initEndWith('abc','b');
initKebabCase('fooBar');
initLowerCase('__FOO_BAR__');
initLowerFirst('FRED');
initRepeat('abc', 2);
initSnakeCase('fooBar');
initSplit('a-b-c', 2);
initStartCase('__FOO_BAR__');
initToLower('fooBar');
initToUpper('--foo-bar--');
initTrim('  abc  ');
initUpperCase('__foo_bar__');
initUpperFirst('FRED');
