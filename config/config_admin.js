var mongoose =require("mongoose");
var uri = "mongodb://localhost/adminUser1";
mongoose.connect(uri)
var userSchema =new mongoose.Schema({
	adminUserId:{type:String,unique:true},
	adminUserPwd:{type:String},
	adminUserName:{type:String},
	adminUserGender:{type:String},
	adminUserAge:{type:Number},
	regTime:{type:String}
})
mongoose.model('AdminUser1',userSchema)
