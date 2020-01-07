//global style
import './stylesheet/index.scss';

//components
import './function/array';
import './function/object';
import './function/string';
import { initAdd } from "~/function/math";

// let func = new FuncAdd();
// func.initAdd();
let btn = document.getElementById('btn');
btn.addEventListener('click', initAdd);
