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
//papertable.innerHTML = 	'<tr><th style="width:250px" >文章标题</th><th style="width:150px">作者</th><th style="width:200px">文章发布时间</th><th style="width:350px">文章序号</th><th style="width:150px">文章管理</th></tr>' + strpaper
viewallpaper(articlepage)
var pagestr1 = "";
var pagenum = Math.ceil(totalnum/5);
for(i = 0; i<pagenum; i ++ ){
	pagestr1 += '<li>' + (i+1) +'</li>'

	}
pagelist.innerHTML =  pagestr1 
papertable.onclick = function(e){

	var target = e.target;
	console.log(target)
	if(target.nodeName == "A"){
		var paperid = target.parentNode.previousSibling.innerHTML
		var paperidjson = {_id : paperid}
		var xhr = new XMLHttpRequest();
		xhr.open('POST','/removedata');
		xhr.setRequestHeader('Content-type','application/json');
		xhr.send(JSON.stringify(paperidjson))
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4 && xhr.status === 200){
				var message = JSON.parse(xhr.responseText);
				if(message.code == 100){
					alert("删除成功")
					viewallpaper(articlepage);
					countallpapers();
				
					
				}
			}

		}
	}
	if(target.nodeName == "I"){
		var paperid = target.parentNode.previousSibling.innerHTML
		var paperidjson = {_id : paperid}
		var xhr = new XMLHttpRequest();
		xhr.open('POST','/fixpaper');
		xhr.setRequestHeader('Content-type','application/json');
		xhr.send(JSON.stringify(paperidjson))
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4 && xhr.status === 200){
				var message = JSON.parse(xhr.responseText);
				fixpop.style.display = "block";
				fixpoptitle.value = message.adminTitle;
				fixpoptext.innerHTML = message.adminContent;
			}

		}
	}
}

// fixedbtn.onclick = function(){
// 	var paperjson = {
// 		adminTitle : fixpoptitle.value,
// 		adminContent : fixpoptext.innerHTML
// 	}
// 	var xhr = new XMLHttpRequest;
// 	xhr.open('POST','/updatepaper');
// 		xhr.setRequestHeader('Content-type','application/json');
// 		xhr.send(JSON.stringify(paperjson))
// 		xhr.onreadystatechange = function(){
// 			if(xhr.readyState === 4 && xhr.status === 200){
// 				var message = JSON.parse(xhr.responseText)
// 		}	
// 	}
// }
pagelist.onclick = function(e){
	var target = e.target;
	if(target.nodeName == 'LI'){
		for(i=0; i<listli.length;i++){
			listli[i].index = i;	
		}
		articlepage = target.index + 1;
		
		viewallpaper(articlepage)


	}
}
prev.onclick = function(){
	articlepage = articlepage - 1
	if(articlepage <= 1){
		articlepage = 1
		
	}
	viewallpaper(articlepage)
}
next.onclick = function(){
	articlepage = articlepage + 1

	if(articlepage >= pagenum){
		articlepage = pagenum
		
	}
	viewallpaper(articlepage)
}
clickjump.onclick = function(){
	if(jumppage.value > pagenum){
		alert('请输入合理范围')
	}
	if(jumppage.value <1){
		alert('请输入合理范围')
	}
	else{
		articlepage = jumppage.value;
		viewallpaper(articlepage)
	}
}
xxclose.onclick = function(){
	fixpop.style.display = "none"
}