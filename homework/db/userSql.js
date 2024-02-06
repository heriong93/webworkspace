//userSql.js

let userList = 
`SELECT user_no
        ,user_id
        ,user_pwd
        ,user_name
        ,user_gender
        ,user_age
        ,join_date
FROM t_users`;

let userInfo = 
`SELECT user_no
,user_id
,user_pwd
,user_name
,user_gender
,user_age
,join_date
FROM t_users
WHERE user_id = ?`;

let userInsert = 
`INSERT INTO t_users
SET ?`; //객체, 필드명 

let userUpdateAll = 
`UPDATE t_users
SET ?
WHERE user_id = ?`; 

let userUpdateInfo =
`UPDATE t_users
SET user_id = ?, user_name = ?, user_age = ?
WHERE user_id =?`;

module.exports = {
    userList,
    userInfo,
    userInsert,
    userUpdateAll,
    userUpdateInfo
};


