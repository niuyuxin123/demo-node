#!/usr/bin/node

const fs=require('fs'),
      uid=process.argv[2],
      gid=process.argv[3],
      dst=process.argv[4];
if(process.argv.length !== 5) {
  console.error('命令行参数不正确！');
  process.exit(1);
}
try{
  fs.chownSync(dst,Number(uid),Number(gid));
}
catch(e){
  console.error(e.message);
  process.exit(2);
}
