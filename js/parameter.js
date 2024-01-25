console.log('parameter.js');
//Default Parameter
function getComment(user='Anony',msg = 'no comment'){
    let result = `${msg},from ${user}`;
    console.log(result);
}
getComment('Han','Today is...');        //Today is...,from Han
getComment('Adward');                   //no comment,from Adward
getComment(undefined,'Hello World');    //Hello, World,from Anony
getComment();                           //no comment,from Anony

//Rest Parameter
//더하는 수의 제한이 없는 더하기 계산
function sum(x = 0 ,y = 0 , ...args){
    let result = x + y ;
    for(let num of args){
        result += num;
    }
    return result;
};
console.log(sum(1,2)); //3
console.log(sum(10,20,30,40)); //100

let ary = [1,2,3,4,5,6,7];
console.log(sum(...ary)); //28 함수 이외에 실행하는 곳에 있는 ...은  펼침연산자 
