var papertable = document.getElementById('papertable');
var pagelist = document.getElementById('pagelist');
var delete1 = document.getElementById('delete1');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var listli =pagelist.getElementsByTagName('li');
var clickjump = document.getElementById('clickjump')
var jumppage = document.getElementById('jumppage')
var fixpop = document.getElementById('fixpop');
var fixpoptitle = document.getElementById('fixpoptitle');
var fixpoptext = document.getElementById('fixpoptext');
var fixedbtn = document.getElementById('fixedbtn');
var xxclose = document.getElementById('xxclose');
var str1 = ""
function viewallusers(num){
	var xhr = new XMLHttpRequest();
	xhr.open("POST",'/getallusers');
	xhr.setRequestHeader('Content-Type','application/json')
	xhr.send(JSON.stringify({whichpage:num}));
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			var message = JSON.parse(xhr.responseText);
			for(i = 0; i <message.length;i++){
				str1 +=	'<tr><td>' + message[i].NormalUserId + '</td>' + '<td>' + message[i].NormalUserName +'</td>' + '<td>' + 
				message[i].regTime.split('T')[0] + '</td>' + '<td>' + message[i].NormalUserPwd + '</td>' +  '<td>' + message[i].NormalUserMail + '</td>' +   '<td><i>修改 |</i><a href ="javascript:;">删除</a></td></tr>' 
			}
			papertable.innerHTML = 	'<tr><th style="width:250px" >用户ID</th><th style="width:150px">用户姓名</th><th style="width:200px">用户注册时间</th><th style="width:350px">用户密码</th><th style="width:350px">用户邮箱</th><th style="width:200px">用户管理</th></tr>' + str1
			
			
		}
	}
} 
viewallusers();