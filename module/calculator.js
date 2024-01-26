console.log('calculator.js');

const defaultNum = 1;

function add(num1, num2){
    return num1 + num2;
}

function minus(num1,num2){
    return num1 - num2;
}

function multi(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}
//module.exports = { node기반이면 이거 써야함 //require('./calculator.js')일 경우는 module.exports 사용
export default { //import가 불러들이는 대상을 나열함
    defNum : defaultNum, //내용을 넘길 때 사용할 이름을 지정해줄 수도 있고, 그대로 사용할 수도 있다
    add, //add : add <--함수는 선언하는 순간 하나의 변수. 변수명을 가리키는 것 
    minus, //"minus" : minus  
    multi,
    divide
} //module.exports는 항상 마지막에 위치해야함
