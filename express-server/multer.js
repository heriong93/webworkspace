const multer = require('multer');
const express = require('express');
const app = express();

const storage = multer.diskStorage({
    destination : function(req,file,cb){ //실제 업로드 진행할 때 어디에 저장할건지 저장하는 부분 
        cb(null, 'files/'); //cb 는 callback 의미
    } ,
    filename : function (req, file, cb){ //충돌방지용
        let rename = (new Date()).getMilliseconds()+file.originalname;
        cb(null, rename);
    }
});

const upload  = multer({ storage : storage});

const staticUrl = '/images';
app.use(staticUrl,express.static('files'));

app.post('/profile', upload.single('avatar'), (req,res)=>{ //single
    //업로드 시 미리보기를 해준다면 <img src=""> -> src 속성이 가져야하는 경로 반환
    let imgUrl = `${staticUrl}\/${req.file.filename}`;
    res.send(imgUrl);
});

app.post('/photos', upload.array('list'), (req,res)=>{ //array multiple일경우 <input type="file" name="list" multiple>// 여기서 사용한 'list' 가 html name="list" 로 매칭이 되어야함
    //업로드 시 미리보기를 해준다면 <img src=""> -> src 속성이 가져야하는 경로 반환
    let imgUrlList = [];
    for(let file of req.files){
        let imgUrl = `${staticUrl}\/${file.filename}`;
        imgUrlList.push(imgUrl); //한건이 아니라 배열에 넣어줘야함
    }
    res.send(imgUrlList);
});

app.listen(4000, ()=>{
    console.log('Server Start : multer');
})