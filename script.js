function clickButton() {
	var name = document.getElementById("name").value;
	alert ("Hello, " + name + "!");
}

function addPost() {
	var postText = document.getElementById("post").value; 
	
	var li = document.createElement("li");
	li.innerHTML = postText; 
	
	var posts = document.getElementById("posts");
	posts.appendChild(li);
}

function number() {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	alert ("The sum is: " +num1+num2);
}

function calcButton(num) {
	var result=document.getElementById("result");
	if (result.value === "0") {
		result.value = "";
	}
	result.value=result.value+num; 
}

function calcButtonDot() {
	var result=document.getElementById("result");
	result.value = result.value + "."; 
	//disable dot button
	document.getElementById("dot").disabled = true; 
}

function calcButtonOp(operator) {
	var result=document.getElementById("result");
	document.getElementById("temp").value = result.value; 
	document.getElementById("operator").value = operator; 
	
	document.getElementById("add").disabled = true; 
	document.getElementById("subtract").disabled = true;
	document.getElementById("multiply").disabled = true;
	document.getElementById("divide").disabled = true;
	//reset result value 
	result.value = 0; 
	//enable dot button
	document.getElementById("dot").disabled = false; 
	//enable equals button
	document.getElementById("equals").disabled = false; 
}

function calculate() {
	var temp = document.getElementById("temp").value; 
	var result = document.getElementById("result").value; 
	var operator = document.getElementById("operator").value; 
	if (operator === "+") {
		document.getElementById("result").value = Number(temp) + Number(result); 
	}
	if (operator === "-") {
		document.getElementById("result").value = Number(temp) - Number(result); 
	}
	if (operator === "/") {
		document.getElementById("result").value = Number(temp) / Number(result); 
	}
	if (operator === "x") {
		document.getElementById("result").value = Number(temp) * Number(result); 
	}
}


function login() {
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var error = document.getElementById("error");
	
	//check that theuser nd password are not blank
	if(username.value.length === 0) {
		error.innerHTML = "Please enter a user or email!";
		return false; 
	}
	if(password.value.length === 0) {
		error.innerHTML = "Please enter a password!";
		return false; 
	}
	//check that the passowrd is correct
	var realPassword = "abc123"; 
	if(password.value != realPassword) {
		error.innerHTML="Wrong Password!";
		return false;
	}
	else {
		return true; 
	}
}

/// Function used to get URL parameters 
// Paste this function in your script.js file 
function getParameterByName(name, url) { 
	if (!url) { 
	url = window.location.href; 
	} 
	name = name.replace(/[\[\]]/g, "\\$&"); 
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), 
	results = regex.exec(url); 
	if (!results) return null; 
	if (!results[2]) return ''; 
	return decodeURIComponent(results[2].replace(/\+/g, " ")); 
}

function loadHome() {
	var username = getParameterByName("username");
	window.alert(username);
	// create a new <p> element to show the username
	newP = document.createElement("p");
	newP.innerHTML = "Welcome, " + username;

	var logoutBar = document.getElementById("logout-bar");
	logoutBar.appendChild(newP); 
	
	//create a logout button 
	var logoutButton = document.createElement("button"); 
	logoutButton.innerHTML = "Log out"; 
	logoutButton.setAttribute("class", "form-button"); 
	logoutButton.setAttribute("onclick", "logout();"); 
	//<button class=="fotm-button">Log out</button>
	logoutBar.appendChild(logoutButton); 
}

function logout() {
	//take me back to forms.html
	window.location = "forms.html"; 
}

function addBlogPosts () {
	var demo = getElementById(""); 
	demo.appendChild(); 
}

//part 1: automatically do something when the page loads
function autoload() {
	console.log("Welcome!");
	
	//add content to div id part1
	//1. get the fiv where you want to add the content 
	var part1Div = document.getElementById("part1"); 
	//2. create new element to put inside the div
	var newHeader = document.createElement("h3"); 
	var newParagraph = document.createElement ("p"); 
	//3. put some text in thos enew elements 
	newHeader.innerHTML = "Part 1 - On Load";
	newParagraph.innerHTML = "Automatically do stuff!"; 
	//4. add new elements to the div
	part1Div.appendChild(newHeader);
	part1Div.appendChild(newParagraph); 
	part1Div.appendChild(document.createElement("hr")); 
}

//part 2: add text from input 
function addText() {
	//1. get the unput 
	var input = document.getElementById("part2-input"); 
	//2. get <div> where I want to add the text 
	var div = document.getElementById("part2"); 
	
	var newParagraph = document.createElement("p"); 
	newParagraph.innerHTML = input.value; 
	
	div.appendChild(newParagraph); 
	
}

//part 3: Chaneg style 
function changeStyle() {
	var part3p = document.getElementById("part3-p"); 
	part3p.setAttribute("class","new-style"); 
}

//part 4
function original() {
	var original = document.getElementById("body")
	original.setAttribute("class","")
}

function changeBackground() {
	var background = document.getElementById("body")
	background.setAttribute("class","backgroundstyle")
}

function background2() {
	var background2 = document.getElementById("body")
	background2.setAttribute("class","background2")
}

function background3() {
	var background3 = document.getElementById("body")
	background3.setAttribute("class","background3")
}

//part 5: add a picture 
function changePic() {
	var pic = document.createElement("img"); 
	pic.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg"); 
	pic.setAttribute("width","200px"); 
	
	var div = document.getElementById("part5"); 
	div.appendChild(pic); 
}

//image gallery
function small1() {
	var small = document.getElementById("big");
	small.setAttribute("src","https://s-media-cache-ak0.pinimg.com/736x/d8/7f/0e/d87f0e1ecddb955a74f41e1032a8a136.jpg");
}

function small2() {
	var small = document.getElementById("big");
	small.setAttribute("src","https://s-media-cache-ak0.pinimg.com/736x/d8/7f/0e/d87f0e1ecddb955a74f41e1032a8a136.jpg");
}

function small3() {
	var small = document.getElementById("big");
	small.setAttribute("src","https://s-media-cache-ak0.pinimg.com/736x/d8/7f/0e/d87f0e1ecddb955a74f41e1032a8a136.jpg");
}

function small4() {
	var small = document.getElementById("big");
	small.setAttribute("src","https://s-media-cache-ak0.pinimg.com/736x/d8/7f/0e/d87f0e1ecddb955a74f41e1032a8a136.jpg");
}

function small5() {
	var small = document.getElementById("big");
	small.setAttribute("src","https://s-media-cache-ak0.pinimg.com/736x/d8/7f/0e/d87f0e1ecddb955a74f41e1032a8a136.jpg");
}
