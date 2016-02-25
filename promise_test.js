/**
 * 
 * 检测对promise的熟悉度
 * 看看题,是不是感觉好简单~~~，then嘛,直接顺序输出就是了.好有道理,你妈,仔细看看
 */

var fs=require("fs");
var Promise = require("bluebird");

fs = Promise.promisifyAll(fs)

console.log(111111)
fs.readFileAsync("./promise_test.js").then(function (res) {
    console.log(22222222)
    return 3333333
})
.then(function(res){
  console.log(res)
  fs.readFileAsync("./callback_test.js").then(function(res){
    console.log("444444")
    return 555555
})
.then(function(res){
    console.log(res);
    return 66666;
})
})
.then(function(res) {
    console.log(res)
})
.catch(function (err) {
    console.log("error")
})

/**
 * 以为有err触发吗??? 傻不拉几的,没有err
 * 
 * 输出结果是:
 * 111111
22222222
3333333
undefined
444444
555555
 * 
 * 居然有个undefined哦,傻了吧,没有缩进你就看不懂了!!!!!???? 第19行插入了一个promise,但是没有return,所以下面的输出是没有的所以是undefined
 * 你试试加上return
 */