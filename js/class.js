console.log('class.js');

// ES6 이전 

//재생산을 위한 객체 => 생성자 함수 + 즉시 실행함수를 결합해서 만들었음

// var Person = (function(){ //모두 하나의  함수에 담아 반환
//     function Person(name){  //Person -> 생성자함수. 대문자로 시작할 경우 생성자함수로 인식됨
//         //객체가 가질 필드 
//         this._name = name;
// }

//         //객체가 가질 메소드 
//         Person.prototype.sayHi = function(){
//         console.log('Hi '+this._name);
// }

//         //필드에 접근할 Setter, Getter 
//         Person.prototype.setName = function(name){
//         this._name = name;
// }

//         Person.prototype.getName = function(){
//         return this._name;
// }
//         return Person; //즉시 실행함수 
// })(); //생성자를 부르며 실행함수를 동시에 실행하는 구조

// let userA = new Person ('Hong');
// userA.sayHi();
// userA.setName('Award');
// userA.sayHi();
// userA._name; //이렇게 직접 쓰지 않아야함. _가 있는 이유가, java와 달리 private public 개념이 없기 때문에. _를 사용해 숨겨져있다는 의미. 

//ES6 이후 - let, const  방식으로 생성된다 

//객체생성을 위한 정의 
class Person{
    constructor(name){
        this._name = name;
    }

    sayHi(){
        console.log('Hi,new' +this._name);
    }
    set name (name){
        this._name = name;
    }
    get name (){
        return this._name;
    }
}

let userB = new Person ('Hong');
userB.sayHi();
userB.name = 'Lee'; //실제 값을 내장하고 있는 것은 this._name = name; 덮어쓰기 개념 setter를 만들어주지 않으면 적용이 안됨
console.log(userB.name);
userB.sayHi();
