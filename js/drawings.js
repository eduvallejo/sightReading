
function pushTiempoUsuario(argument) {
	// console.log("intervalo : " + argument);
	tiemposUsuario[contadorUsuario]  = argument;
	// console.log("tiemposCorrectos[" + contadorUsuario + "] : " + tiemposCorrectos[contadorUsuario]);
	// console.log("tiemposUsuario[" + contadorUsuario + "] : " + tiemposUsuario[contadorUsuario]);
	// console.log("errorPorcentualAcumulado : " + errorPorcentualAcumulado);
	// console.log("limiteSuperior : " + tiemposCorrectos[contadorUsuario] * limiteSuperior);
	// console.log("limiteInferior : " + tiemposCorrectos[contadorUsuario] * limiteInferior);

	// if (tiemposUsuario[contadorUsuario] >= (tiemposCorrectos[contadorUsuario] * limiteInferior) && tiemposUsuario[contadorUsuario] <= (tiemposCorrectos[contadorUsuario] * limiteSuperior)) {
	if ((tiemposUsuario[contadorUsuario] >= (margenesCorrectosInferior[contadorUsuario]))  && (tiemposUsuario[contadorUsuario] <= margenesCorrectosSuperior[contadorUsuario])) {
		pintarAcierto();
	}else{
		pintarFallo();
	}
	contadorUsuario++;
	// console.log("contadorUsuario++ : " + contadorUsuario);
	// element.setAttribute("class", "oldclass newclass");
	contadorColor++;
	// console.log("contadorColor++ : " + contadorColor);

	if (tiemposUsuario.length == tiemposCorrectos.length) {
		// console.clear();
		console.log("FIN");
		//checkeamos reslutados
		mediaError = errorPorcentualAcumulado / tiemposCorrectos.length;
		resetearColores();
		audioSong.pause();
		audioSong.load();
		// audioSong.pause();
		// audioSong.load();
		console.log("audioSong.paused : " + audioSong.paused);//paramos la cancion ghost
		checkResultados();
		contadorUsuario = 0;
		tiemposUsuario = [];
		//no se si poner la animacion
		ABCJS.startAnimation(outputElement, tuneObjectArray[0], {showCursor : true, bpm : bpm});
	}
}


function checkResultados(argument) {
	console.log("numErrores : " + numErrores);
	if (audioSong.paused == true) {
		console.log("audioSong.paused : " + audioSong.paused);//paramos la cancion ghost
		audioSong.play();
	}
	// console.log("mediaError : " + mediaError + "%");
	// console.log("FIN_______________________________");
	// console.log("tiemposUsuario   : " + tiemposUsuario);

	//fondo blanco indica q se ha llegado al fin y se empieza de nuevo
	// document.body.style.backgroundColor = "white";
	
	resetearMarcador();
	// console.log("tiemposCorrectos : " + tiemposCorrectos);


}
function pintarAcierto(argument) {
	colorear("green");

	// document.body.style.backgroundColor = "green";
	acumularError();
	// document.getElementById('mediaError').innerHTML = "M(%): " + errorPorcentualAcumulado;
	// console.log("Debería ser[" + contadorUsuario + "] : " + tiemposCorrectos[contadorUsuario]);
	// console.log("Pusiste    [" + contadorUsuario + "] : " + tiemposUsuario[contadorUsuario]);
	// console.log("--------------");
}

function pintarFallo(argument) {
	// console.clear();
	acumularError();
	// console.log("Debería ser[" + contadorUsuario + "] : " + tiemposCorrectos[contadorUsuario]);
	// console.log("Pusiste    [" + contadorUsuario + "] : " + tiemposUsuario[contadorUsuario]);
	// console.log("--------------");

	numErrores++;
	document.getElementById('fallos').innerHTML = "Fallos: " + numErrores; 
	// console.log("contadorColor : " + contadorColor);
	colorear("red");
	// notes[contadorColor - 2].setAttribute("fill", "red");
}

//pone el marcador a cero despues de cada vuelta
function resetearMarcador(argument) {
	// console.log("parseFloat(mediaError) : " + parseFloat(mediaError).toFixed(2));
	document.getElementById('mediaError').innerHTML = "Err(%): " + parseFloat(mediaError).toFixed(2);
	// console.log("--------- : ");
	errorPorcentualAcumulado = 0;
	mediaError = 0;
	numErrores = 0;
	// console.log("numErrores : " + numErrores);
	document.getElementById('fallos').innerHTML = "Fallos: " + numErrores;
	// console.clear();
}

function acumularError(argument) {
	errorPorcentual = Math.abs(((tiemposUsuario[contadorUsuario] * 100) / tiemposCorrectos[contadorUsuario]) - 100);
	// errorPorcentual = ((tiemposUsuario[contadorUsuario] * 100)/tiemposCorrectos[contadorUsuario]) - 100; //el 100% seria 0% error
	// console.log("errorPorcentual : " + errorPorcentual + " %");
	errorPorcentualAcumulado = errorPorcentualAcumulado + errorPorcentual;
	document.getElementById('mediaError').innerHTML = "Err(%): " + parseFloat(errorPorcentualAcumulado/ (contadorUsuario + 1)).toFixed(2);
}


