#!/usr/bin/node

const cp=require('child_process');
console.log('process.PID:',process.pid);
var child=cp.spawn('cat',['02-spawn-v1.js']);
child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);



