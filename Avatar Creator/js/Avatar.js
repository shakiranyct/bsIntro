// JavaScript Document
function write(){
	
var userName = document.getElementById('name').value;
	
	document.getElementById('output').innerHTML = "<h2>"+userName+"</h2>"
}

var character ={
	body:"",
	eyes:"",
	shirt:"",
	bottom:"",
	hair:"",
}

function setBod(changling){
	character.body=changling;
		console.log(character.body);
	bodyBuilder();
}

function setEy(changling){
	character.eyes=changling;
		console.log(character.eyes);
	bodyBuilder();
}

function setShi(changling){
	character.shirt=changling;
		console.log(character.shirt);
	bodyBuilder();
}

function setBot(changling){
	character.bottom=changling;
		console.log(character.bottom);
	bodyBuilder();
}

function setHai(changling){
	character.hair=changling;
		console.log(character.hair)
}

function bodyBuilder(){
	if(character.body!=""){
		document.getElementById('body').innerHTML="<img class='img-fluid' src='Images/"+character.body+"' alt='body'>";
	}
	
	if(character.eyes!=""){
		document.getElementById('eye').innerHTML="<img class='img-fluid' src='Images/"+character.eyes+"' alt='eye'>"
	}
	
	if(character.shirt!=""){
		document.getElementById('shirt').innerHTML="<img class='img-fluid' src='Images/"+character.shirt+"' alt='shirt'>"
	}
	
	if(character.bottom!=""){
		document.getElementById('bottom').innerHTML="<img class='img-fluid' src='Images/"+character.bottom+"' alt='bottom'>"
	}
	
}






