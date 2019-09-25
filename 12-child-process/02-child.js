#!/usr/bin/node

console.log('I am child process.PID:',process.pid);

global.setInterval(function(){
  console.log('Time is %d',Date.now());
},2000);
global.setTimeout(function(){
  console.log('bye father');
  process.exit(1);
},16000);
process.on('message',function(msg){
  console.log('I get msg:%s',msg);
})



