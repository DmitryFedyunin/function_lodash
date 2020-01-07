import _ from 'lodash';

// class FuncAdd {
//     initAdd() {
//         let num1;
//         let num2;
//         num1 = document.getElementById('a').value;
//         num2 = document.getElementById('b').value;
//         let result = _.add(num1,num2);
//         document.getElementById('out').innerHTML = result;
//     }
// }
// export default FuncAdd;
export function initAdd() {
    let num1;
    let num2;
    num1 = document.getElementById('a').value;
    num2 = document.getElementById('b').value;
    let result = _.add(num1,num2);
    document.getElementById('out').innerHTML = result;
}

