exports.fun = function(){
	var arr = ["热血高校","冷锋高校","NOOB高校","猴子高校","猩猩高校"]
	var req = require("./text1.js")
	var arr1 = req.fun();
	for(i = 0; i <arr.length; i++){
		var a = arr[i] + "的成员：" + arr1[i].join(";")+" 。"
		console.log(a)
	}
}

