//app.js

const express = require('express');
const app = express();
const mysql = require('./db.js');
//mysql.executeQuery(); <- 얘가 mysql 을 실행하는 실행문

//application/json - json일 경우 처리를 위한 등록 방법
app.use(express.json());
//application/x-www-form-urlencoded 쿼리 스트링 경우 등록방법
app.use(express.urlencoded({ extended: false }));

//app.use(function(req,res,next){}); //공용으로 사용하고싶으면 미들웨어를 생성해서 써도됨

app.listen(3000, () => {
    console.log('Server Start', 'http://localhost:3000');
});
//전체조회
app.get('/customers', async (req, res) => { //promise는 순서를 섞어버리기 때문에 async await 으로 순서를 지정해줘야 데이터가 보여짐
    //1 await으로 응답을 기다림
    let list = await mysql.executeQuery('customerList'); //customerSql.js에서 export함
    //2 응답을 받고 출력
    res.json(list);
});
//단건조회
app.get('/customers/:id', async (req, res) => {
    let customerId = req.params.id;
    //let info = (await mysql.executeQuery('customerInfo',customerId))[0]; //실행하고자 하는 쿼리문.//단건조회이든 아니든 모두 배열로 넘어올 것-> 그래서 단건조회이면 idx번호 지정해서 해당 건만 출력되게함
    let info = await mysql.executeQuery('customerInfo', customerId); //위와 같은 코드 
    info = info[0]; //위와 같은 코드 
    res.json(info);
});
//등록 
app.post('/customers', async (req, res) => {
    let data = req.body.param; //param 의 대상이 객체여야함. 이걸 쿼리 스트링으로 구조를 표현하기 어려움 json 으로 넘기는게 편함
    /*json으로 param 넘기면 이런 형태임
    {
        "param":{
        "name" :"Hong",
        "email" : "hong@gmail.com",
        "phone" :"010-2323-1213",
        "address" : "qwerty"
          }
    } TALEND API로 POST 등록 -> MYSQL 에 등록이 되면 OKPACKET 이라는 객체로 입력된 정보들 출력됨*/
    let result = await mysql.executeQuery('customerInsert', data);
    res.json(result);
});

//수정 
app.put('/customers/:id', async (req, res) => {
    let result = await updateInfo(req); //updateAll(req)
    res.json(result);
});

async function updateAll(request) {
    let data = [selectedInfo(request.body.param), request.params.id]; //set절, id컬럼
    let result = await mysql.executeQuery('customerUpdateAll', data);
    return result;
};

function selectedInfo(obj) {
    let delData = ["id", "email"];//객체를 새로 만들어 필요한 것만 꺼내는 것
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

async function updateInfo(request) {
    let data = [...getInfo(request.body.param), request.params.id]; //컬럼: email, phone, address,id
    let result = await mysql.executeQuery('customerUpdateInfo', data);
    return result;
};

function getInfo(obj) {
    let getData = ["email", "phone", "address"];
    let newAry = [];
    for (let target of getData) { //배열이 먼저 와야 순서대로 담을 수 있음
        for (let field in obj) {
            if (field == target) {
                newAry.push(obj[field]); 
                break;
            }
        }
    }
    return newAry; //["kangin@gmail.com","010-1234-1214","sleep"]
};



