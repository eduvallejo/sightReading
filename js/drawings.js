function drawHalf(argument) {
	// console.log("HALF");
	// clearCanvas();
	pushTiempoUsuario(2000);
}

function drawQuarter(argument) {
	// console.log("4th");
	// clearCanvas();
	pushTiempoUsuario(1000);
}

function drawEight() {
	// context.beginPath();
	// pushTiempoUsuario(argument);
	pushTiempoUsuario(500); 
	// posX = posX + 200;
}

function drawSixteenth(argument) {
	// clearCanvas();
	// context.beginPath();
	pushTiempoUsuario(250);
}

function pushTiempoUsuario(argument) {
	tiemposUsuario[contadorUsuario]  = argument;
	contadorUsuario++;
	if (tiemposUsuario.length == tiemposCorrectos.length) {
		console.clear();
		console.log("FIN");
		console.log("tiemposCorrectos : " + tiemposCorrectos);
		console.log("tiemposUsuario : " + tiemposUsuario);
		//checkeamos reslutados
		checkResultados();
		contadorUsuario = 0;
		tiemposUsuario = [];
		audio.pause();
		audio.currentTime = 0;
	}
}


function checkResultados(argument) {
	// console.clear();
	var fallos = 0
	for (var i = 0; i < tiemposCorrectos.length; i++) {
		if (tiemposCorrectos[i] != tiemposUsuario[i]) {
			fallos++;
			console.log("FALLOs");
			console.log("tiemposCorrectos[" + i + "] : " + tiemposCorrectos[i]);
			console.log("tiemposUsuario[" + i + "] : " + tiemposUsuario[i]);
		}
	}
	alert("fallos : " + fallos);
}