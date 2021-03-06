var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");
var font_size = 10;
var columns = canvas.width;
var codes = [];
var matrixCode = "I saw the best minds of my generation destroyed by madness,\
     starving hysterical naked,\
dragging themselves through the negro streets at dawn looking \
     for an angry fix,\
angelheaded hipsters burning for the ancient heavenly \
     connection to the starry dynamo in the machinery of night";


matrixCode = matrixCode.split("");

for (var i = 0; i < columns; i++) {
	codes[i] = 1;
}

function draw() {
	context.fillStyle = "rgba(0, 0, 0, 0.05)";
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = "rgba(0, 51, 255, 1.0)";
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