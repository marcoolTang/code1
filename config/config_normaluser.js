var mongoose =require("mongoose");
var uri = "mongodb://localhost/normalnuser";
mongoose.connect(uri)
var userSchema =new mongoose.Schema({
	NormalUserId:{type:String,unique:true},
	NormalUserPwd:{type:String},
	NormalUserName:{type:String},
	NormalUserMail:{type:String},
	NormalUserGender:{type:String},
	NormalUserAge:{type:Number},
	regTime:{type:Date}
})
mongoose.model('NormalUser',userSchema)
