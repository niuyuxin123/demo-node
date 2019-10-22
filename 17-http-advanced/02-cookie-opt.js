#!/usr/bin/node

const http = require('http'),
      log=console.log;

http.createServer((req,res)=>{

  log(`\n\n${req.method} ${req.url} ${req.httpVersion}`);
  log(req.headers);
  log();
  
  if(typeof req.headers.cookie !=='undefined'){
    //parse cookie
    var data=req.headers.cookie.split(';');
    log(data);
  }
  res.statusCode=200;
  res.setHeader('Set-cookie',['name=wangding; max-age=1000','mobile=12345678901']);
  
  res.end('<!DOCTYPE html><html><head><title>hello</title></head><body><h1>hello world!!!</h1></body></html>');
  
}).listen(8080);
