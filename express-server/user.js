const express = require('express');
const router = express.Router(); //라우팅과 관련된 정보 
//user
router.get('/',(req,res)=>{
    res.send('회원정보조회');
})
//user/insert
router.post('/insert',(req,res)=>{
    res.send('회원 등록');
})

//user/update
router.put('/update',(req,res)=>{
    res.send('회원 수정');
})

//user/delete
router.delete('/delete',(req,res)=>{
    res.send('회원 삭제');
})

module.exports = router; //app.js에서 사용할 수 있도록 객체 export
