#!/usr/bin/node

const fs=require('fs'),
      dst=process.argv[2];
var wa=fs.watch(dst,function(evt,file){
  console.log('%s happend with file:%s',evt,file);
});
process.on('SIGINT',()=>{
  wa.close();
  console.log('程序将要结束运行！');
  global.setTimeout(()=>{
    process.exit();
  },5000);

});

