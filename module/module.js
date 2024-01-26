import cal from '../module/calculator.js'; //의미는 아래와 같음. 각각 불러오는 방법만 조심하면 됨
const {defNum,add} = require('./calculator.js');
//const cal = require('./calculator.js');
console.log(defNum,add(1,2));
//console.log(cal.defNum,cal.add(1,2));