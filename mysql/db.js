//db.js 쿼리문을 실행하는 파일 / 다른 sql 문들과 섞이지 않게 밖에 생성해줌

const mysql = require('mysql');
const sql = require('./db/customerSql'); //폴더가 다르기때문에 지정
//sql.customerList

const connectionPool = mysql.createPool({
    host : '127.0.0.1', //ip와 같음 
    port : '3306', //mysql 기본 port
    user : 'dev01',
    password : '1234',
    database : 'dev',
    connectionLimit : 10,
    debug : true
});

const executeQuery = async (alias, values) => {
    return new Promise((resolve,reject)=>{
        let executeSql = sql[alias]; //여러개의 sql 문
        connectionPool.query(executeSql, values, (err,results)=>{
            if(err){
                console.log(err);
                reject({err});
            }else{
                console.log(results);
                resolve(results);
            }
        })
    })
}

module.exports = {
    executeQuery
}
//이렇게 설정해주면 이 파일은 더이상 건들이지 않고 모든 sql 관리 가능 