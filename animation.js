function moveMe() {
	//get the object we want to move 
	var object = document.getElementById("animate");
	var posX= 0; //initial x position 
	var posY = 0; //initial y position 
	
	var object2 = document.getElementById("animate2");
	var posX2 = 0; //initial x position 
	var posY2 = 0; //initial y position 
	//create an interval
	//setInterval(function ToCall, numberMilliseconds)
	var timer = setInterval (move,10); 
	var i = 0; 

function move() { 
	if (posY >= 350) {
		posX = 0;
		posY = 0; 
	}
	object.style.top = posY + "px"; 
	object.style.left = posX + "px"; 
	posX = posX + 1; 
	posY = posY + 1; 
	
	if (posY2 >= 350) {
		posX2 = 0;
		posY2 = 0; 
	}
	object2.style.right = posY2 + "px"; 
	object2.style.bottom = posX2 + "px"; 
	posX2 = posX2 + 1; 
	posY2 = posY2 + 1; 
	}
}




