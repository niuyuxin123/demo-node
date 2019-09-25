#!/usr/bin/node

var wd={
  'name':'王丁',
  'QQ':'123456777',

  'age':43
};

console.log('Name:%s\t Age:%d',wd.name,wd.age);
console.log('Wangding Info:',wd);//对象类型

console.log('name:',wd.name);//逗号间隔输出
console.log('QQ:'+wd.QQ);//拼接字符串输出
console.log(`age is ${wd.age}`);//模板字符串输出
