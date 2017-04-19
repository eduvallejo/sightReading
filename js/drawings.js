function getNearestTime(interval) {
	if (interval > 0.800 && interval < 1.200) {
		// console.log("NEGRA(4th)!!!!!! : " + interval);
		pushTiempoUsuario(1000);
	}else if (interval >= 0.700 && interval < 0.800) {
		// console.log("corcheapuntillo! : " + interval);
		pushTiempoUsuario(750);
	}else if (interval >= 0.600 && interval < 0.700) {
		// console.log("tresillo negra!! : " + interval);
		pushTiempoUsuario(666);
	}else if (interval >= 0.400 && interval < 0.600) {
		// console.log("corchea!!!!      : " + interval);
		pushTiempoUsuario(500);
	}else if (interval >= 0.295 && interval < 0.400) {
		// console.log("tresillo corchea : " + interval);
		pushTiempoUsuario(333);
	}else if (interval >= 0.200 && interval < 0.295) {
		// console.log("semicorchea      : " + interval);
		pushTiempoUsuario(250);
	}else if (interval >= 0.130 && interval < 0.200) {
		pushTiempoUsuario(166);
		// console.log("tresillsemicorchea:" + interval);
	}else if (interval >= 0.090 && interval < 0.130) {
		pushTiempoUsuario(125);
		// console.log("Fulsa    !!!!!!  : " + interval);
	}else if (interval >= 1.400 && interval < 1.800) {
		// console.log("NEGRA con punto! : " + interval);
		pushTiempoUsuario(1500);
	}else if (interval >= 1.800 && interval < 2.300) {
		// console.log("blanca!!!!!!     : " + interval);
		pushTiempoUsuario(2000);
	}else if (interval >= 2.700 && interval < 3.300) {
		console.log("blanca punto!!!! : " + interval);
		pushTiempoUsuario(3000);
	}else if (interval >= 3.600 && interval < 4.300) {
		// console.log("redonda!!!!!!   : " + interval);
		pushTiempoUsuario(4000);
	}else if (interval >= 4.800 && interval < 5.200) {
		// console.log("redonda!!!!!!   : " + interval);
		pushTiempoUsuario(5000);
	}else if (interval >= 4.300 && interval < 4.700) {
		// console.log("redonda!!!!!!   : " + interval);
		pushTiempoUsuario(4500);
	}else if (interval >= 2.300 && interval < 2.700) {
		console.log("blanca lig corchea!!!!!!   : " + interval);
		pushTiempoUsuario(2500);
	}else if (interval >= 1.200 && interval < 1.400) {
		console.log("negra lig tres corchea!!!!!!   : " + interval);
		pushTiempoUsuario(1333);
	}
}


function pushTiempoUsuario(argument) {
	tiemposUsuario[contadorUsuario]  = argument;
	// console.log("contadorUsuario : " + contadorUsuario);
	// console.log("tiemposUsuario[" + contadorUsuario + "] : " + tiemposUsuario[contadorUsuario]);
	if (tiemposUsuario[contadorUsuario] == tiemposCorrectos[contadorUsuario]) {
		pintarAcierto();
	}else{
		pintarFallo();
	}
	contadorUsuario++;
	if (tiemposUsuario.length == tiemposCorrectos.length) {
		// console.clear();
		// console.log("FIN");
		//checkeamos reslutados
		checkResultados();
		contadorUsuario = 0;
		tiemposUsuario = [];
		
	}
}


function checkResultados(argument) {
	// console.clear();
	var fallos = 0
	for (var i = 0; i < tiemposCorrectos.length; i++) {
		if (tiemposCorrectos[i] != tiemposUsuario[i]) {
			fallos++;
			// console.log("tiemposCorrectos[" + i + "] : " + tiemposCorrectos[i]);
			// console.log("tiemposUsuario[" + i + "] : " + tiemposUsuario[i]);
		}
	}
	console.clear();
	console.log("fallos : " + fallos);
	// console.log("tiemposCorrectos : " + tiemposCorrectos);
	// console.log("tiemposUsuario   : " + tiemposUsuario);

	//fondo blanco indica q se ha llegado al fin y se empieza de nuevo
	document.body.style.backgroundColor = "white";
	
	resetearMarcador();
	// console.log("tiemposCorrectos : " + tiemposCorrectos);


}
function pintarAcierto(argument) {
	document.body.style.backgroundColor = "green";
	// console.log("tiemposUsuario[" + contadorUsuario + "] : " + tiemposUsuario[contadorUsuario]);
	// console.log("tiemposCorrectos[" + contadorUsuario + "] : " + tiemposCorrectos[contadorUsuario]);
	// console.log("--------------");
}

var numErrores = 0;
function pintarFallo(argument) {
	// console.clear();
	console.log("tiemposCorrectos[" + contadorUsuario + "] : " + tiemposCorrectos[contadorUsuario]);
	console.log("tiemposusuario[" + contadorUsuario + "] : " + tiemposUsuario[contadorUsuario]);

	numErrores++;
	document.getElementById('fallos').innerHTML = "Fallos: " + numErrores; 
	document.body.style.backgroundColor = "yellow";
}

//pone el marcador a cero despues de cada vuelta
function resetearMarcador(argument) {
	numErrores = 0;
	// console.log("numErrores : " + numErrores);
	document.getElementById('fallos').innerHTML = "Fallos: " + numErrores;
	// console.clear();
}