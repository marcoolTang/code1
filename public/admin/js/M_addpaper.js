var papertitle = document.getElementById('papertitle');
var articlearea = document.getElementById('articlearea');
var paperbtn = document.getElementById('paperbtn');
paperbtn.onclick = function(){
	var paperJson = {
		papertitle : papertitle.value,
		papercontent : articlearea.value,
		paperauthor : tzz_name
	}
	console.log(paperJson)
	var xhr = new XMLHttpRequest();
	xhr.open("POST",'/addpaper')
	xhr.setRequestHeader('Content-Type','application/json');
	xhr.send(JSON.stringify(paperJson));
	xhr.onreadystatechange = function(){
		console.log(xhr.readyState,xhr.status)
		if(xhr.readyState ===4 && xhr.status === 200){
			var arrJpaper = JSON.parse((xhr.responseText))
			if(arrJpaper.code == 100){
				papertitle.value = null;
				articlearea.value = null;
				alert("提交成功")
			}
			else{
				alert('提交失败')
			}
		}
	}
}