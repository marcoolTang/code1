var mongoose =require("mongoose");
var uri = "mongodb://localhost/articlform";
mongoose.connect(uri)
var addpaper =new mongoose.Schema({
	adminTitle:{type:String},
	adminAuthor:{type:String},
	adminContent:{type:String},
	PublishTime:{type:Date}
})
mongoose.model('Adminaddpaper',addpaper)