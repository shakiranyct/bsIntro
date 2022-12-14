// JavaScript Document

function write(){
	
var userName = document.getElementById('name').value;
	
	
var userName2 = document.getElementById('name2').value;	
	
	
var Party = document.getElementById('party').value;	
	
	
var cos = document.getElementById('costume').value;	
	
	
var obj = document.getElementById('object').value;	
	
	
var obj2 = document.getElementById('object2').value;	
	
	
var obj3 = document.getElementById('object3').value;
	
	
var ver = document.getElementById('verb').value;	
	
	
var ver2 = document.getElementById('verb2').value;
	
	
var wea = document.getElementById('weapon').value;	
	
	
var mon = document.getElementById('monster').value;	
	

var emo2 = document.getElementById('emotion2').value;	
	
	
var emo3 = document.getElementById('emotion3').value;	
	
	
var emo = document.querySelector('input[name="emotion"]:checked').value;	

document.getElementById('output').innerHTML = "<img class='img-fluid' src='Images/Halloween.jpg' alt='hallo'>"; 
	
document.getElementById('output').innerHTML += "One night "+userName+" Ran home from school extremely fast to be ready for his Halloween party “the "+Party+"” "+userName+" busted into his room and threw on his costume which was a "+cos+" costume. Quickly hurrying himself out he stopped to pick up his lucky charm, a plain old "+obj+". "+userName+" made his way to the party looking great as ever, he did have to cross a few roads just to get there. As he reached the house the door slammed open and "+ver+" out came a "+obj2+", "+userName+" dodged it just in time before realizing who caused it to come at him, it was none other than his sworn enemy "+userName2+". She "+ver2+" runs at "+userName+" swinging a "+wea+" at him, "+userName+" makes a "+emo+" dash for it running across the roads not looking out for any cars. As he crosses the second street running out onto the road he trips over a "+obj3+" and falls, before he can get up "+userName2+" is already there. <br>"; 
	
document.getElementById('output').innerHTML += "Just before she can make the final blow a giant "+mon+" crawls out of the forest charging at her. "+userName2+" screams in "+emo2+" and tries to run away but before she can, the "+mon+" catches up with her and gobbles her up whole leaving not even a crumb. "+userName+" screams out in "+emo3+", trying to pick himself up the "+mon+" lurches over him saliva dripping from its fangs, but it does not seem to attack him. Is it possible it saved him? No, it could not have "+userName+" thought looking up at the "+mon+" but as the clock struck twelve the mysterious "+mon+" disappeared.";	
	
	
	
 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}