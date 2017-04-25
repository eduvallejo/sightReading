function pushTiempoUsuario(argument) {
	// console.log("____________________");
	tiemposUsuario[contadorUsuario]  = argument;
	// console.log("tiemposCorrectos[" + contadorUsuario + "] : " + tiemposCorrectos[contadorUsuario]);
	console.log("tiemposUsuario[" + contadorUsuario + "] : " + tiemposUsuario[contadorUsuario]);
	// console.log("errorPorcentualAcumulado : " + errorPorcentualAcumulado);
	// console.log("limiteSuperior : " + tiemposCorrectos[contadorUsuario] * limiteSuperior);
	// console.log("limiteInferior : " + tiemposCorrectos[contadorUsuario] * limiteInferior);
	// console.log("tiemposCorrectosAbsolutos[" + contadorUsuario + "] : " + tiemposCorrectosAbsolutos[contadorUsuario]);
	var margenInferior = tiemposCorrectosAbsolutos[contadorUsuario] - (tiemposCorrectos[contadorUsuario] * dificultad) / 100;
	var margenSuperior =  tiemposCorrectosAbsolutos[contadorUsuario] + (tiemposCorrectos[contadorUsuario] * dificultad) / 100;
	// console.log("margenInferior : " + margenInferior);
	// console.log("margenSuperior : " + margenSuperior);
	if (tiemposUsuario[contadorUsuario] >= margenInferior && tiemposUsuario[contadorUsuario] <= margenSuperior) {
		pintarAcierto();
	}else{
		pintarFallo();
	}
	contadorUsuario++;
	if (tiemposUsuario.length == tiemposCorrectos.length) {
		// console.clear();
		// console.log("FIN");
		//checkeamos reslutados
		mediaError = errorPorcentualAcumulado / tiemposCorrectos.length;
		checkResultados();
		
		// contadorUsuario = 0;
		// tiemposUsuario = [];
		
	}
}


function checkResultados(argument) {
	console.log("numErrores : " + numErrores);
	// console.log("mediaError : " + mediaError + "%");
	// console.log("FIN_______________________________");
	// console.log("tiemposUsuario   : " + tiemposUsuario);

	//fondo blanco indica q se ha llegado al fin y se empieza de nuevo
	// document.body.style.backgroundColor = "white";
	
	resetearMarcador();
	// console.log("tiemposCorrectos : " + tiemposCorrectos);


}
function pintarAcierto(argument) {
	document.body.style.backgroundColor = "green";
	acumularError();
	// document.getElementById('mediaError').innerHTML = "M(%): " + errorPorcentualAcumulado;
	// console.log("Debería ser[" + contadorUsuario + "] : " + tiemposCorrectos[contadorUsuario]);
	// console.log("Pusiste    [" + contadorUsuario + "] : " + tiemposUsuario[contadorUsuario]);
	// console.log("--------------");
	// console.log("OKtiemposUsuario[" + contadorUsuario + "] : " + tiemposUsuario[contadorUsuario]);
	// console.log("OKtiemposCorrectos[" + contadorUsuario + "] : " + tiemposCorrectos[contadorUsuario]);
	// console.log("numErrores : " + numErrores);
}

function pintarFallo(argument) {
	// console.clear();
	acumularError();
	console.log("Debería ser[" + contadorUsuario + "] : " + tiemposCorrectosAbsolutos[contadorUsuario]);
	// console.log("Pusiste    [" + contadorUsuario + "] : " + tiemposUsuario[contadorUsuario]);
	// console.log("--------------");

	numErrores++;
	document.getElementById('fallos').innerHTML = "Fallos: " + numErrores; 
	document.body.style.backgroundColor = "yellow";
	// document.getElementById('mediaError').innerHTML = "M(%): " + errorPorcentualAcumulado;
}

//pone el marcador a cero despues de cada vuelta
function resetearMarcador(argument) {
	// console.clear();
	console.log("parseFloat(mediaError) : %" + parseFloat(mediaError).toFixed(2));
	document.getElementById('mediaError').innerHTML = "M(%): " + parseFloat(mediaError).toFixed(2);
	console.log("--------- : ");
	errorPorcentualAcumulado = 0;
	mediaError = 0;
	numErrores = 0;
	contadorUsuario = 0;
	tiemposUsuario = [];
	// console.log("numErrores : " + numErrores);
	document.getElementById('fallos').innerHTML = "Fallos: " + numErrores;
	tiempoAbsolutoInicial = audio.currentTime;

}

function acumularError(argument) {
	// console.log("errorPorcentualAcumulado : " + errorPorcentualAcumulado);
	// console.log("tiemposUsuario[" + contadorUsuario + "] : " + tiemposUsuario[contadorUsuario]);
	// console.log("tiemposCorrectosAbsolutos[" + contadorUsuario + "] : " + tiemposCorrectosAbsolutos[contadorUsuario]);
	errorPorcentual = Math.abs(((tiemposUsuario[contadorUsuario] * 100)/tiemposCorrectosAbsolutos[contadorUsuario]) - 100);
	// errorPorcentual = ((tiemposUsuario[contadorUsuario] * 100)/tiemposCorrectos[contadorUsuario]) - 100; //el 100% seria 0% error
	// console.log("errorPorcentual : " + errorPorcentual + " %");
	errorPorcentualAcumulado = errorPorcentualAcumulado + errorPorcentual;
	document.getElementById('mediaError').innerHTML = "M(%): " + parseFloat(errorPorcentualAcumulado/(contadorUsuario+1)).toFixed(2);
	// document.getElementById('mediaError').innerHTML = "M(%): " + parseFloat(errorPorcentualAcumulado/contadorTc).toFixed(2);
}


// function getNearestTime(interval) {
// 	// console.log("interval : " + interval);
// 	if (interval > 0.880 && interval < 1.200) {
// 		// console.log("NEGRA(4th)!!!!!! : " + interval);
// 		pushTiempoUsuario(1000);
// 	}else if (interval > 0.800 && interval < 0.880) {
// 		// console.log("NEGRA(4th)!!!!!! : " + interval);
// 		pushTiempoUsuario(833);
// 	}else if (interval >= 0.700 && interval < 0.800) {
// 		// console.log("corcheapuntillo! : " + interval);
// 		pushTiempoUsuario(750);
// 	}else if (interval >= 0.600 && interval < 0.700) {
// 		// console.log("tresillo negra!! : " + interval);
// 		pushTiempoUsuario(666);
// 	}else if (interval >= 0.400 && interval < 0.600) {
// 		// console.log("corchea!!!!      : " + interval);
// 		pushTiempoUsuario(500);
// 	}else if (interval >= 0.360 && interval < 0.400) {
// 		// console.log("tresillo corchea : " + interval);
// 		pushTiempoUsuario(375);
// 	}else if (interval >= 0.295 && interval < 0.360) {
// 		// console.log("tresillo corchea : " + interval);
// 		pushTiempoUsuario(333);
// 	}else if (interval >= 0.200 && interval < 0.295) {
// 		// console.log("semicorchea      : " + interval);
// 		pushTiempoUsuario(250);
// 	}else if (interval >= 0.130 && interval < 0.200) {
// 		pushTiempoUsuario(166);
// 		// console.log("tresillsemicorchea:" + interval);
// 	}else if (interval >= 0.090 && interval < 0.130) {
// 		pushTiempoUsuario(125);
// 		// console.log("Fulsa    !!!!!!  : " + interval);
// 	}else if (interval >= 1.400 && interval < 1.800) {
// 		// console.log("NEGRA con punto! : " + interval);
// 		pushTiempoUsuario(1500);
// 	}else if (interval >= 1.800 && interval < 2.300) {
// 		// console.log("blanca!!!!!!     : " + interval);
// 		pushTiempoUsuario(2000);
// 	}else if (interval >= 2.700 && interval < 3.300) {
// 		// console.log("blanca punto!!!! : " + interval);
// 		pushTiempoUsuario(3000);
// 	}else if (interval >= 3.600 && interval < 4.300) {
// 		// console.log("redonda!!!!!!   : " + interval);
// 		pushTiempoUsuario(4000);
// 	}else if (interval >= 4.800 && interval < 5.200) {
// 		// console.log("redonda!!!!!!   : " + interval);
// 		pushTiempoUsuario(5000);
// 	}else if (interval >= 4.300 && interval < 4.700) {
// 		// console.log("redonda!!!!!!   : " + interval);
// 		pushTiempoUsuario(4500);
// 	}else if (interval >= 2.300 && interval < 2.700) {
// 		// console.log("blanca lig corchea!!!!!!   : " + interval);
// 		pushTiempoUsuario(2500);
// 	}else if (interval >= 1.200 && interval < 1.400) {
// 		// console.log("negra lig tres corchea!!!!!!   : " + interval);
// 		pushTiempoUsuario(1333);
// 	}
// }

// function getNearestTime(interval) {
// 	console.log("interval*1000 : " + interval*1000);
// 	pushTiempoUsuario(interval*1000);
// }