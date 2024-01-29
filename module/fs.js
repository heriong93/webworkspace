const fs = require('fs');
const data = 'Hello, Node.js World';

fs.writeFile('./sample.txt',data,'utf-8', (err)=>{ //utf-8가 에러 발생시킬 수 있기 때문에 에러 잡아줘야함 sample.txt파일 만들어줌
    if(err) throw err;
    console.log('job completed');
});

fs.readFile('./sample.txt','utf-8',(err,datas)=>{
    if(err) throw err;
    console.log(datas);
})