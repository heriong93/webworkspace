const path = require('path');
console.log('==절대경로');
console.log(__filename);
console.log(__dirname);
console.log('실제 파일명:',path.basename(__filename));//basename- 경로에서 마지막에 해당되는 파일명을 불러옴 //실제 파일명: path.js
console.log('확장자', path.extname(__filename)); //extname- 해당되는 마지막 확장자 불러옴 //확장자 .js

let pathList = process.env.PATH.split(path.delimiter); //환경 상관없이 불러올 수 있음 
console.log(path.delimiter); //  ; <== 출력됨
console.log(pathList);
console.log(path.sep);
console.table(pathList[1].split(path.sep));

