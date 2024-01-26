console.log('promise.js');

let test = new Promise((resolve,reject)=>{
    setTimeout(()=> {console.log('비동기 작업 실행');
    resolve('작업 성공');
},1000); //1초 늦춰 작업함 
});
test
.then(data => console.log('then',data))  //처리가 되었을 경우
 .catch(err=>console.log(err)) //처리가 안됐을 경우 
 .finally(()=>console.log('작업 끝!')); //결과에 상관없이 출력되기를 바라는 내용은 finally에 넣어준다 


/* let fetch = () => {
    return new Promise((resolve,reject)=>{

    })
} */