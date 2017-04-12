function getNearestTime(interval) {
	if (interval > 800 && interval < 1200) {
		console.log("NEGRA(4th)!!!!!! : " + interval);
		pushTiempoUsuario(1000);
	}else if (interval >= 700 && interval < 800) {
		console.log("corcheapuntillo! : " + interval);
		pushTiempoUsuario(750);
	}else if (interval >= 600 && interval < 700) {
		console.log("tresillo negra!! : " + interval);
		pushTiempoUsuario(666);
	}else if (interval >= 360 && interval < 600) {
		console.log("corchea!!!!      : " + interval);
		pushTiempoUsuario(500);
	}else if (interval >= 300 && interval < 360) {
		console.log("tresillo corchea : " + interval);
		pushTiempoUsuario(333);
	}else if (interval > 120 && interval < 300) {
		console.log("semicorchea      : " + interval);
		pushTiempoUsuario(250);
	}else if (interval > 100 && interval <= 120) {
		pushTiempoUsuario(125);
		console.log("staccatto!!!!!! : " + interval);
		// console.log("FALLO interval : " + interval);
	}else if (interval > 1300 && interval < 1800) {
		console.log("NEGRA con punto!!!!!! : " + interval);
		pushTiempoUsuario(1500);
	}else if (interval > 1800 && interval < 2300) {
		console.log("blanca!!!!!! : " + interval);
		pushTiempoUsuario(2000);
	}else if (interval >= 2700 && interval < 3300) {
		console.log("blanca punto!!!!!! : " + interval);
		pushTiempoUsuario(3000);
	}else if (interval >= 3600 && interval < 4300) {
		console.log("redonda!!!!!! : " + interval);
		pushTiempoUsuario(4000);
	}
}


function pushTiempoUsuario(argument) {
	tiemposUsuario[contadorUsuario]  = argument;
	contadorUsuario++;
	if (tiemposUsuario.length == tiemposCorrectos.length) {
		// console.clear();
		// console.log("FIN");
		//checkeamos reslutados
		checkResultados();
		contadorUsuario = 0;
		tiemposUsuario = [];
		// audio.pause();
		// audio.currentTime = 0;
	}
}


function checkResultados(argument) {
	// console.clear();
	var fallos = 0
	for (var i = 0; i < tiemposCorrectos.length; i++) {
		if (tiemposCorrectos[i] != tiemposUsuario[i]) {
			fallos++;
			// console.log("FALLOs");
			// console.log("tiemposCorrectos[" + i + "] : " + tiemposCorrectos[i]);
			// console.log("tiemposUsuario[" + i + "] : " + tiemposUsuario[i]);
		}
	}
	console.log("fallos : " + fallos);
	console.log("tiemposCorrectos : " + tiemposCorrectos);
	console.log("tiemposUsuario   : " + tiemposUsuario);
}