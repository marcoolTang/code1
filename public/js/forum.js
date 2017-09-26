var regid = document.getElementById('regid');
var regpwd = document.getElementById('regpwd');
var conpwd = document.getElementById('confirmpwd');
var regmail = document.getElementById('regmail');
var clickreg = document.getElementById('oli4');


clickreg.onclick = function(){
	var reginfojson = {
		userId:regid.value,
		userPwd:regpwd.value,
		userMail:regmail.value
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
				}
		}
	}
}