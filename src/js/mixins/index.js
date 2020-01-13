export function checkTypes(type, ...params) {
   debugger //пробежаться циклом по массиву парамс
  for (let i in params){
    if (!params && typeof params !== type) {
      return console.log('false',false);
    }
    return console.log('true',true);
  }
}
