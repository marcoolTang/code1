

var express = require("express") ;

//创建一个express模块 这个模块提供了路由 和中间的方法 但是需要先创建一个实例
var app = express();
//创建 express实例

var coretxt = require("./mongoose/test.js");
var adminaddpaper = require('./public/admin/js/admin_addpaper.js');
var normaluser = require('./mongoose/normaluser.js')

var bodyParser = require("body-Parser");
//创建一个body-parser 中间件 作用是 用于解析路由的请求信息

//var images = require('images');
var multipart = require('connect-multiparty')//引入这个中间实例

//创建一个 connect-multiparty 中间件 这个中间件 只是用来上传图片
var multipartware = multipart();
//创建这个中间实例
app.use(multipart({uploadDir:'./public/images/temp'}))//用于存放文件夹

//使用这个中间件 并且设置 文件上传的路径


app.use(bodyParser.json())
//内置中间件 express内置的中间件
//提供服务器上的静态文件的托管
//app.use(express.static("public1"))
app.use(express.static("public"))
//请求的请求体 需要解析 他收到一个IncomingMessage express 使用大量的路由 和中间
//我们用express 第三方中间件 去解析 body-parser
//app.use(bodyParser.urlencoded({extended:false}))
//这句话 主要解析的是 Content-type application/x-www-form-urlencoded

app.post('/findIdAdmin',coretxt.findIdadmin)
//解析 请求头的 application/json
app.get("/",function(req,res){
	res.redirect("./admin/reg.html")
})
app.post('/tpmdata',multipartware,function(req,res){
	console.log(req.files.myfile)
	//images(images('./public/images/temp/8KjMaRxHYO9mMc722lIUlGLG.jpg'),200,0,150,150)
	//.size(150)
	//.save('./public/images/temp/8KjMaRxHYO9mMc722lIUlGLG.jpg')
	res.json({src:req.files.myfile.path})
})
// app.post('/caijian',function(req,res){
// 	images(images(req.body.src),req.body.clX,req.body.clY,150,150)
// 	.size(150)
// 	.save(req.body.src)
// 	res.json({code:100})
// })
/*app.post('/adminreg',function(req,res){
	test.fun1()
	test.fun(req,res)


	
})*/
//coretxt.remove_data()

app.post('/adminreg',coretxt.registerAdmin)

app.post('/updateAdmin',coretxt.Update_data)
coretxt.viewall()

app.post('/addpaper',adminaddpaper.addpaperfun)

app.post('/findallpaper',adminaddpaper.findallpaper)

app.post('/viewallpaper',adminaddpaper.countallpaper)

app.post('/removedata',adminaddpaper.removedata)

app.post('/divedepage',adminaddpaper.findallpaper)

app.post('/fixpaper',adminaddpaper.fixpaper)

app.post('/updatepaper',adminaddpaper.updatepaper)

app.post('/newuserscome',normaluser.regnewusers)

app.post('/normaluserlogin',normaluser.normallogin)

app.post('/getallusers',normaluser.findallusers)
// app.post('/adminreg',function(req,res){
// 	console.log(req.body.userPwd)
// 	var user = new AdminUser1({
// 		adminUserId : req.body.userId,
// 		adminUserPwd :req.body.userPwd,
// 		adminUserName:req.body.userName,
// 		adminUserGender: req.body.userGender,
// 		adminUserRegTime:new Date()
		

// 	})
// 	user.save(function(err,doc){
// 		if(err){
// 			console.log(err)
// 			if(err.code === 11000){

// 				res.json({code:100})
// 				//账号重复
// 			}
// 			else{
// 				res.json({code:101})
// 				//其他错误
// 			}
// 		}
// 		else{
// 			res.json({code:102})
// 			//注册成功
// 			console.log(doc)

// 		}
// 	})


app.post('/adminlog',coretxt.loginAdmin)
app.listen("8151",function(){
	console.log("服务器已经启动了")
})

// normaluser.removealluser()

