console.log('Destructuring');

//Object

function getUserInfo(){
    return {
        firstName: 'John',
        lastName: 'Doe', 
        age: 37,
        email: 'john@gmail.com',
        city: 'New York',
        country: "USA",
        info: function(){
            return 'My Name is' +this.lastName;
        }
    };
};

let user = getUserInfo();
console.log(user); //전체 다 출력
console.log(user.info()); //My Name isDoe
let { firstName, lastName, info} = getUserInfo();  //info()함수는 My Name isundefined
console.log(firstName,lastName); //John Doe 출력
console.log(info());

//Array 
let ary = [1,2,3];

let [x,y,z] = ary;
console.log(x,y,z); //1 2 3

let [a,b] = ary;
console.log(a,b); //1 2

let [e,f,g,h] = ary; //배열의 값보다 많이 선언할 경우 오류는 없음. 대신 값이 없기 때문에 undefined
console.log(e,f,g,h);
