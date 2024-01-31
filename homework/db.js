const mysql = require('mysql');
const sql = require('./db/userSql');

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