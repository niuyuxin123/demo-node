#!/usr/bin/node

const fs=require('fs'),
      com=process.argv[2],
      name=process.argv[3],
      path=require('path');
const files=fs.readdirSync(__dirname);
try{
  switch(com){
    case 'list':
      var fileslist=[];
      files.forEach(function (item,index){
        var stat=path.join(__dirname,item);
        var len=''+fs.statSync(item).size;
        var str={
          "fileName":item,
          "fileSize":len
        }
        fileslist.push(str);
      })
      console.log(fileslist);
      //console.log(JSON.stringify(fileslist,null,'\t'));
      break;
    case 'mkdir':
      if(typeof(name)==='undefined'){
        console.error('没有指定要创建的目录名称!');
      }
      fs.mkdirSync(name);
      break;
    default:
      console.error('命令行参数错误!');
  }
}
catch(e){
  console.error(e.message);
  process.exit(1);
}



