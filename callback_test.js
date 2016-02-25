/**
 * 
 * 检测对异步回调的熟悉度
 * 是不是对自己特别自信，异步回调嘛，很简单啊，回调就慢显示呗，靠，傻不拉几的
 */


var fs = require("fs");


console.log(1111111)
function read(data, callback) {
    console.log(3333)
    callback(55555)
}

fs.readFile("./callback_test.js", function (err, data) {
    read(data, function (num) {
        console.log(44444)
        console.log(num)
    })
    console.log(666666)
})
console.log(22222)

/**
 * 你觉得结果是什么??
 * 11111,222222,666666,333333,4444444,555555 这样?????
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *你自己运行看看 
 * 
 * 1111111
 * 22222
 * 3333
 * 44444
 * 55555
 * 666666
 *
 * 从一到六顺序输出了,不是回调就会慢显示的,如果没有长时间的io操作的话,相当于同步了,懂吗!!!!
 *
 */

