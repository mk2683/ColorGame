var numColor = 6;
var colors = colorArr(numColor);

var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var reset = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var pickedColor = pickColor();
var clickedColor;
colorDisplay.textContent = pickedColor;

easy.addEventListener("click", function () {
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numColor = 3;
	colors = colorArr(numColor);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
		if (colors[i]) {
			square[i].style.background = colors[i];
		} else{
			square[i].style.display = "none";
		};
	};
	h1.style.background = "steelblue";
	messageDisplay.textContent = " ";
})
hard.addEventListener("click", function () {
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numColor = 6;
	colors = colorArr(numColor);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = colors[i];
		square[i].style.display = "block";
	};
	h1.style.background = "steelblue";
	messageDisplay.textContent = " ";
})

for (var i = 0; i < square.length; i++) {
	square[i].style.background = colors[i];
	square[i].addEventListener("click", function () {
		clickedColor = this.style.background;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!!"
			h1.style.background = clickedColor;
			reset.textContent = "Play Again?";
			changeColor(clickedColor);
		} else {
			messageDisplay.textContent = "Wrong!!"
			this.style.background = "#232323";	
		};
	});
	
};

function changeColor (color) {
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = color;
	};
}

function pickColor () {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function colorArr (num) {
	var arr= [];
	for (var i = 0; i < num; i++) {
		var col = randomColor();
		arr.push(col);
	};
	return arr;
}

function randomColor () {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var str = "rgb(" + r + ", " + g + ", " + b + ")";
	return str;
}

reset.addEventListener("click", function () {
	colors = colorArr(numColor);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = colors[i];
	};
	h1.style.background = "steelblue";
	reset.textContent = "New Colors";
	messageDisplay.textContent = " ";
})
