const fs = require('fs');
const express = require('express');
const app = express();
//미들웨어 
//--Request Data Process
//JSON 의 contentType은 application/json
app.use(express.json({
    limit : '50mb'
}))

app.use(express.urlencoded({extended : false})); //querystring 의 contentType 은 application/x-www-form-urlencoded 필요에 따라 적용시켜줘야함

//Error 
app.use(function(err,req,res,next){
    console.log(err);
    res.status(500).json({statusCode : res.statusCode,
                          errMessage: err.message});
});

app.get('/defaultErr',(req,res)=>{
    throw new Error('기본 핸들러 동작');
})

app.get('/customErr', (req,res,next)=>{
    next(new Error('Process Fail! Check Data'));
})

//static 
app.use(express.static('./files'));
app.use('/public', express.static('./files'));

//Data Loading 
const jsonFile  = fs.readFileSync('./db.json');
const jsonData = JSON.parse(jsonFile); //or stringfy 로 변환해줘야함 

const getData = (target,where)=>{
    let data = jsonData[target];
    if(Array.isArray(data)){
        let list = data;
        for(let obj of list){
            if(obj.id == where){
                data = obj;
            }
        }
    }
    return data;
}

app.listen(4000,()=>{
    console.log('http://localhost:4000'); //listen 서버 실행 명령어 4000 포트 넘버 listen은 하나만 실행시킴. 
})

app.get('/', (req,res)=>{ //listen이 관리하는 대상들 . /경로를 기반으로 응답이 있는경우, res는 우리가 전달 req 클라이언트의 요청
    res.send('Hello,Express.js World'); //url 링크 따라들어가면 화면 출력됨
})
//전체조회
app.get('/posts',(req,res)=>{
    let data = getData('posts');
    res.json(data); //or res.send(data)
});
//단건조회
app.get('/posts/:id', (req,res)=>{
    let postId = req.params.id // 여기 id는 우리가 위에 /:id로 선언해서 나오는 것
    let data = getData('posts',postId);
    res.json(data);
});

//전체조회 - comments
app.get('/comments',(req,res)=>{
    let data = getData('comments');
    res.json(data);
})
//단건조회 - comments
app.get('/comments/:id',(req,res)=>{
    let commId = req.params.id
    let data = getData('comments',commId);
    res.json(data);
})
//조회 - profile
app.get('/profile', (req,res)=>{
    let data = getData('profile');
    res.json(data); //res.json(data)해도됨
})
//등록
app.post('/posts', (req,res)=>{
    let data= req.body; //데이터를 담고있는 곳이 body 
    console.log('등록',data);
    res.json(data);
});
//수정
app.put('/posts/:id',(req,res)=>{
    let postId = req.params.id; //값을 가져오고 
    let data = req.body[0]; //데이터는 여기서 수정. 특정데이터만 가져온다면 idx나 필드명만 지정할 수 있음
    console.log('수정',postId,data);
    res.json({id:postId,data})
});
//삭제 
app.delete('/posts/:id', (req,res)=>{
    let postId = req.params.id;
    console.log('삭제',postId);
    res.sendStatus(203); //삭제했을 때는-데이터가 없어진것이기 때문에 삭제여부를 명시하거나, 상태코드를 보내야함. 
});

//검색을 포함하는 경우 -> 반드시 QueryString 사용(?param)
app.get('/search', (req,res)=>{
    let keywords = req.query; //querystring 일경우 req.query
    console.log('검색조건 구성',keywords); //http://localhost:4000/search?dept=sales&city=daegu 파라미터 적어주면 console에 검색조건 구성 { dept: 'sales', city: 'daegu' }넘어옴
    res.json(keywords);
    
})






