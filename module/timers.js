console.log('timers.js');
//2024-01-26 

function format(value){
    return ('0'+value).slice(-2); //2자리
}

function getDateTime(){
    let today = new Date();
    let year = today.getFullYear();
    let month = format(today.getMonth()+1);
    let day = format(today.getDate());

    let hour = format(today.getHours());
    let min = format(today.getMinutes());
    let sec = format(today.getSeconds());
    
    return `${year}-${month}-${day}-${hour}:${min}:${sec}`;
    
}
console.log(getDateTime());

const timeout = setTimeout(()=>{console.log(getDateTime());
},3000);

//clearTimeout(timeout); //타임아웃을 취소하는 것 주로 이거보다 아래에 있는걸 더 많이 씀 
let count = 0;
const interval = setInterval(()=>{ //setInterval은 반복문 안에 넣으면 안됨. 
    console.log('count', ++count);
    if(count ==5){
        clearInterval(interval);
    }
    console.log(getDateTime());
},2000);

setImmediate(()=>{ //시간지정이 없음. 즉각실행
    console.log('setImmediate',getDateTime());
});
console.log('마지막 코드');