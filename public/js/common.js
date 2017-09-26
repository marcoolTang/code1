function convertToArray(nodes){//将节点数组 转化成Array实例
	var array = null;
	try{
		array = Array.prototype.slice.call(nodes,0);
	}
	catch(ex){
		array = [];
		for(var i = 0;i < nodes.length;i++){
			array.push(nodes[i])
		}
	}
	return array;
}



function getQueryStringArgs(key){//将URL解析为独立的片段 给URL传值 获取值
	var qs = (location.search.length > 0?location.search.substring(1):"")
	var items = qs.length?qs.split("&"):[];
	var item = null;
	var name = null;
	var value = null;
	var args = {};
	for(var i = 0;i < items.length;i++){
		item = items[i].split("=");
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		if(name.length){
			args[name] = value;
		}
	}
	return args[key];
}

var EventUtli = {
	addHandler: function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false)
		}
		else if(element.attachEvent){
			element.attachEvent('on' + type, handler)
		}
		else{
			element['on' + type] = handler
		}
	}, 
	removeHandler:function(element,type,handler){
		if(element.removeListener){
			element.removeListener(type,handler,false)
		}
		else if(element.detachEvent){
			element.detachEvent('on' + type,handler)
		}
		else{
			element['on' + type] = null
		}
	}
}
	var close = document.getElementById('close');
 		var cover = document.getElementById('cover');
 		var reglog = document.getElementById('reglog');
 		var logid = document.getElementById('logid');
 		var logpwd = document.getElementById('logpwd');
 		var sign_up = document.getElementById('sign_up');
 		var sign_on = document.getElementById('sign_on');
 		var preregis = document.getElementById('preregis');
 		var prelog = document.getElementById('prelog');
 		var social = document.getElementById('social');
 		var box_reglog = document.getElementById('box_reglog');
 		var blist = box_reglog.getElementsByTagName('a');
 		var num = 0;

 		close.onclick = function(){
 			blist[num].style.color = ""
 			cover.style.display = "none"
 			reglog.style.display = "none"
 			prelog.style.display = "none"
 			social.style.display = "none"
 			preregis.style.display = "none"
 		}
 		sign_up.onclick = function(){
 			num = 1
 			cover.style.display = "block"
 			reglog.style.display = "block"
 			blist[num].style.color = "#c87575"
 			preregis.style.display = "block"
 			

 			


 		}
 		sign_on.onclick = function(){
 			num = 0
 			cover.style.display = "block"
 			reglog.style.display = "block"
 			blist[num].style.color = "#c87575"
 			prelog.style.display = "block"
 			social.style.display = "block"
 			
 		}
 		blist[0].style.color = '#c87575';
 		box_reglog.onclick = function(e){
 			var target = e.target
 			if(target.nodeName == "A"){
	 			var ind = target.getAttribute("index")
	 			if(ind == 0){
	 				blist[0].style.color = '#c87575';
	 				blist[1].style.color = '';
	 				prelog.style.display = "block"
 					social.style.display = "block"
 					preregis.style.display = "none"

	 			}
	 			else{
	 				blist[0].style.color = '';
	 				blist[1].style.color = '#c87575';
	 				preregis.style.display = "block"
	 				prelog.style.display = "none"
 					social.style.display = "none"
	 			}
 			}		
 		}
 var regid = document.getElementById('regid');
var regpwd = document.getElementById('regpwd');
var conpwd = document.getElementById('confirmpwd');
var regmail = document.getElementById('regmail');
var clickreg = document.getElementById('oli4');
var log_in = document.getElementById('log_in');
var regist = document.getElementById('regist');
var loginnow = document.getElementById('dli3');

conpwd.onblur = function(){
	if(conpwd.value !== regpwd.value){
		alert('两次密码不一致')
	}
}
clickreg.onclick = function(){
	if(regid.value != "" && regpwd.value !="" && regmail.value != "" && conpwd.value != ""){
		if(conpwd.value != regpwd.value){
			alert('请输入一致密码')
		}
		else{
			var reginfojson = {
			userId:regid.value,
			userPwd:regpwd.value,
			userMail:regmail.value,
			conpwd : conpwd.value
			}
			console.log(reginfojson)
			var xhr = new XMLHttpRequest();
			xhr.open('POST','/newuserscome')
			xhr.setRequestHeader('Content-Type',"application/json");
			xhr.send(JSON.stringify(reginfojson))
			xhr.onreadystatechange = function(){
				if(xhr.readyState === 4 && xhr.status === 200){
					var message = JSON.parse(xhr.responseText);
						if(message.code == 102){
							alert("注册成功")
							regid.value ="";
							regpwd.value ="";
							regmail.value ="";
							conpwd.value = "";
							log_in.click();
						}
						if(message.code == 100){
							alert('账号重复')
						}
						
				}
			}
		}

		
	}
	else{
		alert("请输入完整信息")
	}
}


	
	
loginnow.onclick = function(){
	var NUloginjson = {
		loginId :logid.value,
		logpwd :logpwd.value
	}
	var xhr = new XMLHttpRequest;
	xhr.open("POST",'/normaluserlogin');
	xhr.setRequestHeader('Content-Type','application/json');
	xhr.send(JSON.stringify(NUloginjson));
	xhr.onreadystatechange = function(){
		if(xhr.readyState ===4 && xhr.status ==200){
			var message = JSON.parse(xhr.responseText);
				if(message.code ==100){
					alert("登录成功")
					close.click();

				}
				if(message.code == 101){
					alert("密码错误")
				}
				if(message.code == 102){
					alert("账号不存在")
				}
		}
	}
}