#!/usr/bin/node

console.log('dir name:',__dirname);
console.log('file name:',__filename);

//operate data file
var file=__dirname+'/data/db.xml';
console.log('file name',file);

//window data file
file =__dirname +"\\data\\db.xml";
console.log("file name in window:",file);
/*
switch(os){
  case 'linux':
    file=__dirname+'';
    break;
  case 'win32':
    file=__dirname+'';

    break;
}
*/
const path=require('path');

file=path.join(__dirname,'data','db.xml');
console.log("path",file);
