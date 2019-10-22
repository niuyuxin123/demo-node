#!/usr/bin/node

const http = require('http'),
      log=console.log,
      qs=require('querystring'),
      url=require('url');

var isLogin=false;
http.createServer((req,res)=>{

  log(`\n\n${req.method} ${req.url} ${req.httpVersion}`);
  log(req.headers);
  log();
  
  //req.url==='/login'
  //method===post
  //get username and password from request body
  //judge user is legal
  //is legal show home and set cookie logined
  //not legal show login
  if(req.url==='/login' && req.method==='POST' ){
    var user='';
    req.on('data',(data)=>{
      return user+=data;
    })
    req.on('end',()=>{
      var usr=qs.parse(user);

      if(usr.username === 'wangding' && usr.password==='ddd'){
        isLogin=true;
        res.setHeader('Set-cookie',`login=${isLogin}`);
        showHome(req,res);
        return;
      }else{
        showLogin(req,res);
        return;
      }
    })
  }

  //req.url==='/logout'
  //method==get
  //logout show login page
  if(req.url === '/logout' && req.method === 'GET'){
    isLogin =false;
    res.setHeader('Set-cookie',`login=${isLogin}`);
    showLogin();
    return;
  }

  //req.url==='other'
  //judge have logined
  //isLogin show home page
  //notLogin show login page
  if(typeof req.headers.cookie !=='undefined'){
    //parse cookie
    var data=req.headers.cookie.split('=');
    isLogin=data[1];
    if(isLogin ==='true'){
      showHome(req,res);
    }else{
      showLogin(req,res);
      return;
    }

  }else{
    showLogin(req,res);

  }

  
}).listen(8080);

function showLogin(req,res){
  var html=''
+'<!DOCTYPE html>'
+'<html lang="en">'
+'<head>'
+ ' <meta charset="UTF-8">'
+ ' <title>login</title>'
+'</head>'
+'<body>'
+'<form action="/login" method="post">'
+'  user name:<input type="text" name="username"><br/>'
+'  password:<input type="password" name="password"><br/>'
+'  <input type="submit" value="login">'
+'</form>'
+'</body>'
+'</html>';
  res.end(html);
}

function showHome(req,res){
  var html=''
+'<!DOCTYPE html>'
+'<html lang="en">'
+'<head>'
+'  <meta charset="UTF-8">'
+'  <title>home</title>'
+'</head>'
+'<body>'
+'<h1>Welcome!</h1>'
+'<hr>'
+'<a href="/logout">logout</a>'
+'</body>'
+'</html>';
  res.end(html);
}
