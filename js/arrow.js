//화살표 함수 
console.log('arrow.js');

//함수 표현 2가지 방식 
//함수 선언식 =. var 선언자와 동일. 위치 상관없이 호출되기 때문에 위치가 상관없음 
function hello(name){
    console.log(name);
}
function hello(msg){
    console.log('출력:'+msg);
}
//hello2(); // <- 이렇게 선언 전에 부르면 오류남

//함수 표현식 => const 선언자와 같음 . 항상 호출 전에 존재할 수 있도록 쿼리해야함
const hello2 = function(name){
    console.log('hello,'+name);
}
//동일한 형태를 화살표 함수로 사용할 경우
const hello3 = (name)=> console.log('hello'+name);

//함수 부르려면
hello3('Javascript');

//화살표 함수 문법 
let msg = (msg)=> console.log('result'+msg);
msg = () => console.log('Hello, World');//매개변수가 하나일때는 사용가능 .중괄호도 생략 가능
msg = (x,y) => console.log(x+y);

msg = (x,y) => {
    let result = x + y;
    console.log(result);
}
console.clear();
//화살표 함수와 this의 연관성 
let array = [1,3,5,7];

array.forEach(function(value, idx){
    console.log(value,this);
});

array.forEach((value,idx)=>{ //callback함수는 화살표 함수 기반 사용안하기 (this사용 시-값이 안나옴 ) 
    console.log(value,this)
});

