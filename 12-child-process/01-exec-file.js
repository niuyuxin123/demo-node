#!/usr/bin/node

const cp=require('child_process');
cp.execFile('./02-child.js',[],function(err,out,error){
//cp.execFile('cat',['-n','01-exec-file.js'],(err,out,error)=>{
  if(err){
    console.error(error);
    process.exit(1);
  }
  console.log(out);
});

