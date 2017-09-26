	var usernickname = document.getElementById('usernickname')
	var userpwd = document.getElementById('userPwd')
	var userGender = document.getElementById('userGender')
	var userGender1 = document.getElementById('userGender1')
	var userAge = document.getElementById('userAge')
	var submit = document.getElementById('submit')
	var headpic = document.getElementById('headpic')
	var popup = document.getElementById('popup')
	var xxx = document.getElementById('xxx')


usernickname.value = tzz_name;
userpwd.value = tzz_pwd;
userAge.value = tzz_age;
userGender.checked = tzz_gender;
userGender1.checked = tzz_gender1;
submit.onclick = function(){
	var xhr = new XMLHttpRequest();
	var str1 = window.location.search;
	var arr = str1.split("=");
	var userG =null;
	if(userGender.checked == true){

		userG = true
	}
	else{

		userG = false
	}
	
		var json = {
			id : arr[1],
			usernickname : usernickname.value,
			userpwd : userpwd.value,
			userAge : userAge.value,
			userGender: userG
		}
		xhr.open('POST','/updateAdmin');
		xhr.setRequestHeader('Content-type','application/json');
		xhr.send(JSON.stringify(json));
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4 && xhr.status === 200){
			var message = JSON.parse(xhr.responseText);
			console.log(message.code)
				if(message.code == 100){
					alert("修改成功")
				}
				
		}
	}
}
xxx.onclick =function(){
	popup.style.display = "none";
	xxx.style.display = "none"
}
headpic.onclick = function(){
	popup.style.display = 'block';
	file.click();
}
var tp = new FormData();
popup.onclick = function(){
	
	xxx.style.display = "block"
	file.onchange = function(){
		
		tp.append('myfile',file.files[0])

		var xhr = new XMLHttpRequest();
		xhr.open('POST','/tpmdata')
		xhr.send(tp);
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4 && xhr.status === 200){
				var message = JSON.parse(xhr.responseText);
				var str = message.src.substring(message.src.lastIndexOf('\\')+1)
				img1.src = '../images/temp/'+ str;
			}
		}
		
	}
}
/*xxx.onclick = function(){
	popup.style.display = 'none';
}*/