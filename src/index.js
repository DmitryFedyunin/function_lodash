//global style
import './stylesheet/index.scss';

//components
import './function/object';
import './function/string';
import { initAdd, initCeil, initDivide, initFloor, initMax, initMean, initMin, initMultiply, initRound, initSum } from "~/function/math";
import { initCompact, initConcat, initDifference,
  initDrop, initHead, initFlatten, initFlattenDeep, initInitial, initIntersection, initJoin, initLast,
  initNth} from "~/function/array";

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
initConcat([2, 3, 5, 6]);
initDifference([1,2,3,4,5,10],[2,4,5]);
initDrop([1,2,3]);
initHead([1,2,3]);
initFlatten([1, [2, [3, [4]], 5]]);
initFlattenDeep([1,2,3,[1,2,3,4, [2,3,4]]]);
initInitial([1,2,3]);
initIntersection([1,2,3,4,5,10],[1,2,3,6]);
initJoin(['Fire', 'Air', 'Water']);
initLast([1,2,3]);
initNth(['a','b','c','d']);
