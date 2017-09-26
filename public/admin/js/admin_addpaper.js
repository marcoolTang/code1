var mongoose = require('mongoose');
require("../../.././config/config_article.js");
var Adminaddpaper = mongoose.model("Adminaddpaper");
exports.addpaperfun = function(req,res){

	var newpaper = new Adminaddpaper({
		adminTitle : req.body.papertitle,
		adminAuthor: req.body.paperauthor,
		adminContent:req.body.papercontent,
		PublishTime:new Date(),

	})
	newpaper.save(function(err,doc){
		if(err){
			console.log(err)
		}
		else{
			res.json({code:100})
			//提交成功
			

		}
	})

}
exports.findallpaper = function(req,res){
	var pagesize = 5;
	var currentpage = req.body.num;
	var sort = {'PublishTime':-1};
	var skipnum = pagesize*(currentpage-1);
	Adminaddpaper.find({}).skip(skipnum).limit(pagesize).sort(sort).exec(function(err,doc){
		
		if(err){
			console.log(err)
		}
		else{
			res.json({msg:doc})
		}
	})
}
exports.fixpaper = function(req,res){
	Adminaddpaper.find({_id:req.body._id},function(err,doc){
		if(err){
			console.log(err)
		}
		else{
			console.log(doc[0])
			res.json(doc[0])
		}
	})
}
exports.updatepaper = function(req,res){
	Adminaddpaper.update({},function(err,doc){
		if(err){
			console.log(err)
		}
		else{
			res.json(doc[0])
		}
	})
}
exports.countallpaper = function(req,res){
	Adminaddpaper.count({},function(err,doc){
		res.json({num:doc})
	})
}
exports.removedata = function(req,res){
	Adminaddpaper.remove({_id:req.body._id},function(err,doc){
		if(err){
			console.log(err)
		}
		else{
			res.json({code:100})
		}
	})
}