console.log('array.js');
//sort(): 정렬함수 - 오름차순
//reverse() : 정렬함수 - 내림차순
//문자형
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();   //sort(); => [ 'Apple', 'Banana', 'Mango', 'Orange' ] reserse()=>[ 'Mango', 'Apple', 'Orange', 'Banana' ]
console.log(fruits);
//숫자형
let points = [40,100,1,5,25,10];

points.sort(); // 결과 => [ 1, 10, 100, 25, 40, 5 ] 이유는? 유니코드 기반이여서? 
console.log(points);

points.sort(function(a,b){ //정렬 원할 경우 함수로 불러옴 
    //오름차순
    return a-b; 
});
//filter: 기존 배열 -> 기준을 통과 시 -> 새로운 배열 만들어줌 
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let result = words.filter((value,idx)=>{
    //return 값은 boolean data type 
    return value.length > 4;
    return value.indexOf('a') > -1; 
});

let userList = [{id:100, name:"Hong"},{id:200, name:"Hwang"}, {id:300, name: "Kim"}];

let newList = userList.filter(obj =>{
    return obj.name.indexOf('g') >-1; //name에 'g'가 들어가지 않으면 -1
})

console.log(userList, newList);

newList.forEach(obj =>{ //newList에 적용해도 userList까지 적용됨 (userList 가 원데이터이기 때문에. 같은 객체를 가리킴)
    obj.age = 20;
});
console.log(userList, newList);

//map () 개념은 filter와 같음. 대신 기존 배열 -> 기준을 통과 시 + 조작 -> 새로운 배열 만들어줌 . 갯수를 줄일 수 없음. (size조정 불가)

userList = [{id:100, name:"Hong"},{id:200, name:"Hwang"}, {id:300, name: "Kim"}];

let newArray = userList.map(function(obj){
    //return 데이터 타입 제한 없음
    return obj.id < 300 ? obj.name: null;
});
console.log(userList,newArray); //newArray => [ 'Hong', 'Hwang', null ]
console.clear();
newList = userList.map((obj)=>{
    return{
        id:obj.id,
        name: obj.name
    };
});

newList.forEach(obj =>{
    obj.age = 20;
})
console.log(userList,newList); //newList쪽에만 값이 들어감

//reduce(); : 누적합계
let nums = [50,12,999,6,100];
let sumRes = nums.reduce(function(total,value){
    return total + value;
},0);
console.log(sumRes); //1167 

