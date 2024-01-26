const process = require('process');
const os = require('os'); //모듈을 load하는 코드는 무조건  맨 위에 모아놔야함.(사용위치에 상관없이)

console.log(process);
console.log('====================================');
console.log(os);

console.log(process.env);
console.log('=======================');
console.log(os.cpus());
console.log(os.tmpdir());