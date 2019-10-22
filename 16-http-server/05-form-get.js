#!/usr/bin/node

const http=require('http'),
      url=require('url'),
      qs=require('querystring'),
      items=[],
      log=console.log;
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');
  res.pipe(process.stdout);

  if(req.url === '/'){
    //200 ok
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(getHTML());
  }else{
    //404 not found
    /*res.statusCode=404;
    res.setHeader('Content-Type','text/plain');
    res.end('error');*/
    var it=qs.parse(url.parse(req.url).query);
    if(typeof it !=='undefined'){
      items.push(it);

    }
    res.end(getHTML());
  }
  res.end('OK！');
}).listen(8080);

function getHTML(){
 var html=''
  +'<!DOCTYPE html>'
+'<html lang="en">'
+'<head>'
 + '<meta charset="UTF-8">'
 + '<title>TODO List</title>'
+'</head>'
+'<body>'
+'<h1>TODO List!</h1>'
+'<ul>'
  +items.map(function(item){
    return '<li>'+item+'</li>';
  }).join('\n')
  
  +'</ul>'
  +'<form method="GET" action="/" >'
  +'<input type="text/ name="item">"'
  +'<input type="submit" value="提交"/>'
  
  +'</form>'
+'</body>'
+'</html>';

}

