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
WHERE user_no = ?`;

let userInsert = 
`INSERT INTO t_users
SET ?`;

let userUpdateAll = 
`UPDATE t_users
SET ?
WHERE user_no = ?`; 

let userUpdateInfo =
`UPDATE t_users
SET user_id = ?, user_name = ?, user_age = ?
WHERE user_no =?`;

module.exports = {
    userList,
    userInfo,
    userInsert,
    userUpdateAll,
    userUpdateInfo
};


