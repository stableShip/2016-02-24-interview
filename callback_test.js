/**
 * 
 * 检测对异步回调的熟悉度
 * 是不是对自己特别自信，异步回调嘛，很简单啊，回调就慢显示呗，靠，傻不拉几的
 */


var fs = require("fs");


console.log(1111111)
function read(data,callback){
    console.log(44444)
    callback(55555)
}

fs.readFile("./callback_test.js", function(err, data){
    read(data,function(num){
        console.log(33333)
        console.log(num)
    })
    console.log(666666)
})
console.log(22222)

