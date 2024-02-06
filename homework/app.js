require('dotenv').config({path:'./db/dbSetting.env'});
const express = require('express');
const app = express();
const mysql = require('./db.js');
const { userUpdateInfo } = require('./db/userSql.js');

//쿼리스트링 및 제이슨 처리 등록
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log('Server Start', 'http://localhost:3000');
});

//전체조회
app.get('/users', async (req, res) => { 
    //1 await으로 응답을 기다림
    let list = await mysql.executeQuery('userList'); //customerSql.js에서 export함
    //2 응답을 받고 출력
    res.json(list);
});

//단건조회
app.get('/users/:id', async (req, res) => {
    let userId = req.params.id;
    let info = (await mysql.executeQuery('userInfo',userId))[0];
    res.json(info);
});

//등록 
app.post('/users', async (req, res) => {
    let data = req.body.param; 
    /*json으로 param 넘기면 이런 형태임
    {
        "param":{
        "name" :"Hong",
        "email" : "hong@gmail.com",
        "phone" :"010-2323-1213",
        "address" : "qwerty"
          }
    } TALEND API로 POST 등록 -> MYSQL 에 등록이 되면 OKPACKET 이라는 객체로 입력된 정보들 출력됨*/
    let result = await mysql.executeQuery('userInsert', data);
    res.json(result);
});

//수정
app.put('/users/:id', async (req,res)=>{
    let result = await updateInfo(req);
    res.json(result);
});
//지정하지 않고 모두 수정 가능하게
async function updateAll(request) {
    let data = [selectedInfo(request.body.param), request.params.id]; //set절, id컬럼
    let result = await mysql.executeQuery('userUpdateAll', data);
    return result;
};

function selectedInfo(obj) {
    let delData = ["user_pwd", "user_name"];//객체를 새로 만들어 필요한 것만 꺼내는 것
    let newObj = {};
    let isTargeted = null;
    for (let field in obj) { //field: id,name,email,phone,address
        isTargeted = false;
        for (let target of delData) {
            if (field == target) {
                isTargeted = true;
                break;
            }
        }
        if (!isTargeted) {
            newObj[field] = obj[field];
        }
    }
    return newObj;
};
//부분 수정- 지정해준 파마리터만 수정됨
async function updateInfo(request) {
    let data = [...getInfo(request.body.param), request.params.id]; //컬럼: email, phone, address,id
    let result = await mysql.executeQuery('userUpdateInfo', data);
    return result;
};

function getInfo(obj) {
    let getData = ["user_id", "user_name", "user_age"];
    let newAry = [];
    for (let target of getData) { //배열이 먼저 와야 순서대로 담을 수 있음
        for (let field in obj) {
            if (field == target) {
                newAry.push(obj[field]); 
                break;
            }
        }
    }
    return newAry; 
};