//customerSql.js

//쿼리문 ``안에 넣어주기
let customerList = 
`SELECT id
        ,name
        ,email
        ,phone
        ,address
FROM customers`;

let customerInfo = 
`SELECT id
        ,name
        ,email
        ,phone
        ,address
FROM customers
WHERE id = ?`; 

let customerInsert = 
`INSERT INTO customers
SET ?`; //객체 , 필드명 == 컬럼명 같아야함

//전체 수정
let customerUpdateAll = 
`UPDATE customers
SET ? 
WHERE id = ?`; //물음표 2개라 배열. [객체,단일값]

//특정 내용 수정
let customerUpdateInfo = 
`UPDATE customers
SET email = ?, phone = ? , address = ?
WHERE id = ?`; //배열 순서 [email,phone,address,id] 모두[단일값] 

//변수는 ? 로 표기 
//1) 배열인지 아닌지 구분은 - ?물음표의 갯수로 구분함. 2개 이상 배열 사용함 .순서는 오른쪽-> 왼쪽 방향 / 위에서 아래로 
//2) ? 별로 객체인지 단일값인지 구분 -> ?앞에 칼럼이 있는지 확인(ex. where id =? -> 단일값) ? 가 누구한테 들어가는지 있으면 단일값. 없으면 객체 (ex. insert into customers set ? )  
//칼럼명은 무조건 소문자로 만들기 . 자동매핑 안되기때문 

//바깥에서 불러올 수 있도록 export
module.exports = {
    customerList,  //얘를 불러서 실행 (app.js에 있음)
    customerInfo,
    customerInsert,
    customerUpdateAll,
    customerUpdateInfo
}