//global style
import './stylesheet/index.scss';

//components
import './function/object';
import './function/string';
import { initAdd, initCeil, initDivide, initFloor, initMax, initMean, initMin, initMultiply, initRound, initSum } from "~/function/math";
import { initCompact, initConcat, initDifference, initDrop } from "~/function/array";

//Math function
let btn = document.getElementById('btn');
btn.addEventListener('click', initAdd);
let btnCeil = document.getElementById('btnCeil');
btnCeil.addEventListener('click', initCeil);
let btnDivide = document.getElementById('btnDivide');
btnDivide.addEventListener('click', initDivide);
let btnFloor = document.getElementById('btnFloor');
btnFloor.addEventListener('click', initFloor);
let btnMax = document.getElementById('btnMax');
btnMax.addEventListener('click',initMax);
let btnMean = document.getElementById('btnMean');
btnMean.addEventListener('click',initMean);
let btnMin = document.getElementById('btnMin');
btnMin.addEventListener('click', initMin);
let btnMultiply = document.getElementById('btnMultiply');
btnMultiply.addEventListener('click', initMultiply);
let btnRound = document.getElementById('btnRound');
btnRound.addEventListener('click', initRound);
let btnSum = document.getElementById('btnSum');
btnSum.addEventListener('click', initSum);
// Array function
let btnCompact = document.getElementById('btnCompact');
btnCompact.addEventListener('click', initCompact);
let btnConcat = document.getElementById('btnConcat');
btnConcat.addEventListener('click', initConcat);
let btnDiff = document.getElementById('btnDiff');
btnDiff.addEventListener('click', initDifference);
let btnDrop = document.getElementById('btnDrop');
btnDrop.addEventListener('click', initDrop);
