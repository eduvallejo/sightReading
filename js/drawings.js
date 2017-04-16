function getNearestTime(interval) {
	if (interval > 0.800 && interval < 1.200) {
		console.log("NEGRA(4th)!!!!!! : " + interval);
		pushTiempoUsuario(1000);
	}else if (interval >= 0.700 && interval < 0.800) {
		console.log("corcheapuntillo! : " + interval);
		pushTiempoUsuario(750);
	}else if (interval >= 0.600 && interval < 0.700) {
		console.log("tresillo negra!! : " + interval);
		pushTiempoUsuario(666);
	}else if (interval >= 0.400 && interval < 0.600) {
		console.log("corchea!!!!      : " + interval);
		pushTiempoUsuario(500);
	}else if (interval >= 0.295 && interval < 0.400) {
		console.log("tresillo corchea : " + interval);
		pushTiempoUsuario(333);
	}else if (interval >= 0.180 && interval < 0.295) {
		console.log("semicorchea      : " + interval);
		pushTiempoUsuario(250);
	}else if (interval >= 0.100 && interval < 0.180) {
		pushTiempoUsuario(125);
		console.log("Fulsa    !!!!!!  : " + interval);
	}else if (interval >= 1.300 && interval < 1.800) {
		console.log("NEGRA con punto! : " + interval);
		pushTiempoUsuario(1500);
	}else if (interval >= 1.800 && interval < 2.300) {
		console.log("blanca!!!!!!     : " + interval);
		pushTiempoUsuario(2000);
	}else if (interval >= 0.2700 && interval < 3.300) {
		console.log("blanca punto!!!! : " + interval);
		pushTiempoUsuario(3000);
	}else if (interval >= 0.3600 && interval < 4.300) {
		console.log("redonda!!!!!!   : " + interval);
		pushTiempoUsuario(4000);
	}
}


function pushTiempoUsuario(argument) {
	tiemposUsuario[contadorUsuario]  = argument;
	console.log("contadorUsuario : " + contadorUsuario);
	console.log("tiemposUsuario[" + contadorUsuario + "] : " + tiemposUsuario[contadorUsuario]);
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

	if (fallos == 0) {
		document.body.style.backgroundColor = "green";
	}else{
		document.body.style.backgroundColor = "white";
	}
}