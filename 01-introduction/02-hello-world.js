#!/usr/bin/node

const http = require("http");

http.createServer((req,res)=>{

  res.end("<!DOCTYPE html><html><head><title>hello</title></head><body><h1>hello world!!!</h1></body></html>");
  
}).listen(8080);
