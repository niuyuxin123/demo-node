#!/usr/bin/node

const http=require('http'),
      log=console.log;
var items=['吃饭','睡觉'];
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();

  switch(req.method){
    case 'GET':
      select(req,res);
      break;
    case 'POST':
      insert(req,res);
      break;
    case 'PUT':
      update(req,res);
      break;
    case 'DELETE':
      remove(req,res);
      break;
    default:
      err(req,res);
  }
  res.end('OK!');
}).listen(8080);

function select(req,res){
  var data=JSON.stringify(items);
  res.setHeader('Content-Length',Buffer.byteLength(data));
  res.setHeader('Content-Type','text/plain; charset="utf8"');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.end(data);
}
function insert(req,res){
  var item='';
  req.on('data',(data)=>{
    item+=data;
  })
  req.on('end',()=>{
    if(typeof item !=='undefined'){
      items.push(item);
      res.end('Insert OK!');
    }else{
      res.end('Insert error!');
    }
  })
}
function update(req,res){
  //parse url get id,validate id, type and range
  //
  //parse req get id,validata content not blank
  //
  //modify items,items[id]=new content
  res.end('Update OK!');
}
function remove(req,res){
  var id=req.url.slice(1,req.url.length);
  //valdate id: 1.type 2.range
  
  //del items[id]
  items.splice(id,1);
  res.end('Delete OK!');
}
function err(req,res){
  res.end('Something wrong!');
}




