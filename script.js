var css = document.getElementById("cssText");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var left = document.getElementById("left"); 
var up = document.getElementById("up");
var right = document.getElementById("right"); 
var bottom = document.getElementById("bottom");

function setGradient(e){
	var id = e.srcElement.id;
	if(id === "left" || id === "top" || id === "right" || id === "bottom"){
		body.style.background = "linear-gradient(to "+ id + ", " + color1.value + ", " + color2.value +")";
		css.textContent = body.style.background + ";"; 
	
	}else if(id){
		body.style.background = "linear-gradient(to "+ id + ", " + color1.value + ", " + color2.value +")";
		css.textContent = body.style.background + ";";
	}

	else{
		body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";	
		css.textContent = body.style.background + ";";
	}
}

left.addEventListener("click", setGradient);
top.addEventListener("click", setGradient);
right.addEventListener("click", setGradient);
bottom.addEventListener("click", setGradient);

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
