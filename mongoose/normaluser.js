var mongoose = require("mongoose");
require(".././config/config_normaluser.js");
var Normaluser = mongoose.model("NormalUser");
exports.regnewusers = function(req,res){
	var newUsers = new Normaluser({
		NormalUserId : req.body.userId,
		NormalUserPwd :req.body.userPwd,
		NormalUserName:req.body.userName,
		NormalUserGender:req.body.userGender,
		NormalUserMail :req.body.userMail,
		regTime:new Date()
		

	})
	newUsers.save(function(err,doc){
		if(err){
			
			if(err.code === 11000){

				res.json({code:100})
				//账号重复
			}
			else{
				res.json({code:101})
				//其他错误
			}
		}
		else{
			res.json({code:102})
			//注册成功
			console.log(doc)

		}
	})
}
exports.normallogin = function(req,res){
	var NUpwd = req.body.logpwd
	Normaluser.find({NormalUserId:req.body.loginId},function(err,doc){
		if(err){
			console.log(err)
		}
		else{
			if(doc[0] == undefined){
				res.json({code:102})
				//账号不存在
			}
			else if(doc[0].NormalUserPwd == NUpwd){
				res.json({code:100})
				//登录成功
			}
			else{
				res.json({code:101})
				//密码错误
			}
		}
	})
}	 
exports.findallusers = function(req,res){
	var pagesize = 5;
	var currentpage = req.body.whichpage;
	var sort = {'regTime':-1};
	var skipnum = pagesize*(currentpage-1);
	Normaluser.find({}).skip(skipnum).limit(pagesize).sort(sort).exec(function(err,doc){
		
		if(err){
			console.log(err)
		}
		else{
			res.json(doc)
		}
	})
}
exports.removealluser = function(req,res){
	Normaluser.remove({},function(err,doc){
		if(err){
			console.log(err)
		}
		else{
			console.log(doc)
		}
	})
}