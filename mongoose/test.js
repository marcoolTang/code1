var mongoose =require("mongoose");
//引入 mongoose 模块
require(".././config/config_admin.js")
// var uri = "mongodb://localhost/user111111";
// mongoose.connect(uri);
//链接数据库 
var AdminUser1 = mongoose.model('AdminUser1')
//给 schema  创建一个model 这个model 能够 有save find update remove等方法
exports.registerAdmin= function(req,res){
	//console.log(req.body.userPwd)
	var user = new AdminUser1({
		adminUserId : req.body.userId,
		adminUserPwd :req.body.userPwd,
		adminUserName:req.body.userName,
		adminUserGender: req.body.userGender,
		adminUserAge :req.body.userAge,
		adminUserRegTime:new Date()
		

	})
	user.save(function(err,doc){
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
exports.remove_data = function(){
	AdminUser1.remove({},function(err,doc){
		
})

}
exports.Update_data = function(req,res){
	
	//console.log(req.body.id)
	var arrJson = {
		adminUserName:req.body.usernickname,
		adminUserGender:req.body.userGender,
		adminUserAge:req.body.userAge	
		}
	console.log(req.body.id)
	AdminUser1.update({_id:req.body.id},arrJson,function(err,doc){
		if(err){

		}
		else{
			if(doc){
				res.json({code:100})
			}
			
		}
	})

}
	
	



exports.loginAdmin = function(req,res){
	var AdminId = {adminUserId : req.body.adminUserId};
	var adminUserPwd = req.body.adminUserPwd;
	//console.log(req.body)
	AdminUser1.find(AdminId,function(err,doc){
		if(err){
			console.log(err)
		}
		else{
			if(doc[0] == undefined){
			 	res.json({code:102})
			 	alert("账号不存在")
			// 	//账号不存在
			}
			else if(doc[0].adminUserPwd == adminUserPwd ){
			 	res.json({code:100,msg:doc[0]._id})

			// 	//密码正确
			}
			else{
				res.json({code:101})
				console.log(doc)
			//密码错误
			 	
			}
		}
	})
}
exports.findIdadmin = function(req,res){
	//console.log(req)
	AdminUser1.findById(req.body.id,function(err,doc){
		if(err){
			//console.log(err)
		}
		else{
			res.json(doc)
			console.log(doc)
		}
	})

}
exports.viewall = function(){
	AdminUser1.find({},function(err,doc){
		console.log(doc)
	})
}

exports.removeall = function(){
	AdminUser1.remove({},function(err,doc){
		console.log(doc)
	})
}
