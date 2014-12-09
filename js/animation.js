var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");
var font_size = 10;
var columns = canvas.width;
var codes = [];
var matrixCode = "ANDRESFELIPELUJANRODRIGUEZ";


matrixCode = matrixCode.split("");

for (var i = 0; i < columns; i++) {
	codes[i] = 1;
}

function draw() {
	context.fillStyle = "rgba(0, 0, 0, 0.05)";
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = "#0f0";
	context.font = font_size + "px arial";

	for (var j = 0; j < codes.length; j++) {
		var chars = matrixCode[Math.floor(Math.random() * matrixCode.length)];
		context.fillText(chars, j * font_size, codes[j] * font_size);

		if (codes[j] * font_size > canvas.height && Math.random() > 0.975) {
			codes[j] = 0;
		}
		codes[j]++;
	}
}

setInterval(function(){draw();}, 33);	