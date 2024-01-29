let data = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'; //책에 나온 example
//레거시 api
const url = require('url');
let legercy = url.parse(data);
console.log(legercy);

//WHATWG (웹표준)API //이거 사용함 
const whatwg = new URL(data);
console.log(whatwg);
console.log(whatwg.searchParams instanceof URLSearchParams); //key=value 데이터 처리를 더 편리하게 처리하기 위한 클래스 //searchParams: URLSearchParams { 'query' => 'string' }, 
console.log(whatwg.searchParams.get('query')); //string 출력 


