var css = document.getElementById("cssText");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var left = document.getElementById("left"); 
var up = document.getElementById("up");
var right = document.getElementById("right"); 
var bottom = document.getElementById("bottom");


function buttonClicked(e){	
	if(e.srcElement.id == "left" || e.srcElement.id == "top" || e.srcElement.id == "right" || e.srcElement.id == "bottom" ){
		id = e.srcElement.id;
		setGradient(id);
	}
	else if(e.srcElement.name === "color1" || e.srcElement.name === "color2"){
		id = e.srcElement.name;
		setGradient(id);
	}
}


function setGradient(id){
	if(id === "left" || id === "top" || id === "right" || id === "bottom"){
		body.style.background = "linear-gradient(to "+ id + ", " + color1.value + ", " + color2.value +")";
		css.textContent = body.style.background + ";"; 
	}else{
		body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";	
		css.textContent = body.style.background + ";";
	}
}

left.addEventListener("click", buttonClicked);
top.addEventListener("click", buttonClicked);
right.addEventListener("click", buttonClicked);
bottom.addEventListener("click", buttonClicked);

color1.addEventListener("input", buttonClicked);
color2.addEventListener("input", buttonClicked);
