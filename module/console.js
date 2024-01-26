console.log('console.js');
//Class 형태의 console
const fs = require('fs'); //filesystem
const {Console} = require('console'); 

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({
    stdout : output, 
    stderr : errorOutput,

});
const msg = 'Log Writing'; 

logger.log('Result: %s',msg); //stdout 에 에러를 남김 
logger.error(`Result: ${msg}`); //stderr
