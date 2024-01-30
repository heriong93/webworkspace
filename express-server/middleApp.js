const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

//application/ x-www-form-urlencoded 내가 보내는 포맷이 무엇인지 알려주는 것
const defaultParser = express.urlencoded({extended:false}); //파싱 보조기능 넣어주는 것

//application/json
const jsonParser = express.json();

//app.use(defaultParser.use(jsonParser));
app.use(jsonParser); //모든 라우팅에 대해 적용할거다-라는 의미

app.get('/search', defaultParser, (req,res)=>{ //get 방식은 query . json 방식 받지못함
    let data = req.query.keyword;
    res.send(data +',검색결과');
});
//search?keyword=${value} 로 접근해야함. 

app.post('/info', defaultParser,(req,res)=>{ //post는 body에 들어오는 data여서 바디에 등록해야함
    let data = req.body.name;
    res.send('welcome, ' + data);
});
//info => method:post, body:name=${value}

app.post('/message', (req,res)=>{
    let data = req.body.param;
    res.send(data.title+',' +data.content);
});
/*info => method:post, body:{"param" : {"title": , "content":}} */

app.listen(5000,()=>{
    console.log('Server Start');
})

let sessionSetting = session({ //session 설정값 넣어주기 
    secret : 'Have$A!@Nice_day', //암호화에 사용하는 키 고유값 // 하드코딩 x ->데이터를 코드 내부에 직접 입력하는 것.
    resave : false, //변경사항 없이 계속 저장할 건지 
    saveUninitialized : true, //초기화하지 않고 계속 사용값을 사용할건지  
    cookie : { 
        httpOnly : true, 
        secure : false, 
        maxAge : 60000 //밀리세컨즈(60분정도) .쿠키는 가능하면 유효기간 설정하는게 좋음 . 임의로 제거하지 않는이상 계속 살아있음
    }

});

app.use(sessionSetting); //설정값을 사용



app.post('/login', (req,res)=>{
    const { id, pwd } = req.body;
    if(!req.session.isLogin){ //로그인 되어있지 않았을 때
        req.session.user = id; //비밀번호는 session에 들어가면 안됨
        req.session.isLogin = true; 
    } 
    req.session.save((err)=>{  //저장을 해야 그 값을 가지고 있음
        if(err) throw err;
        res.redirect('/');
    });
});

app.get('/logout', (req,res)=>{
    req.session.destroy(); //session 파괴 
    res.redirect('/');
});

const corsOptions = {
    origin : 'http://127.0.0.1:5500',
    optionSuccessStatus: 200 //legacy 브라우저에서 나타내는 상태코드 
};

app.use(cors(corsOptions));

app.get('/', (req,res)=>{ 
    res.json(req.session);
});