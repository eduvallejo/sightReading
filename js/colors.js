	// var ligaduraHackActual = false;
	// var ligaduraHack = false;
	var contadorLigadas = 0;
	var posicionSilenciosColorear = [];


function pintarNotaActual(argument) {
	// console.log("pintarNotaActual");
	// if(posicionSilenciosColorear[contadorLigadasActual] == true){
	// 	// notes[contadorLigadasActual].setAttribute("fill", "blue");
	// 		// console.log("EO");
	// 	contadorLigadasActual++;
	// 	if (posicionSilenciosColorear[contadorLigadasActual] == true) {
	// 		// console.log("EOEO");
	// 		// console.log("posicionSilenciosColorear[contadorLigadasActual + 1] : " + posicionSilenciosColorear[contadorLigadasActual + 1]);
	// 		contadorLigadasActual++;
	// 		// contadorLigadasActual++;
	// 	}
	// }

	while(posicionSilenciosColorear[contadorLigadasActual] == true){
		contadorLigadasActual++;	
	}

	try {
		notes[contadorLigadasActual].setAttribute("fill", "blue");
		contadorLigadasActual++;
		// console.log("TRY contadorLigadasActual : " + contadorLigadasActual);
		// console.log("colorear");
		// console.log("notasLigadas[contadorLigadasActual - 1] : " + notasLigadas[contadorLigadasActual - 1]);
		// bug8
		if (notasLigadas[contadorLigadasActual - 1] == true) {
			notes[contadorLigadasActual].setAttribute("fill", "blue");
			contadorLigadasActual++;
			// console.log("1-IFcontadorLigadasActualNotaActual : " + contadorLigadasActual);
			// contadorColor++;
			if (notasLigadas[contadorLigadasActual - 1] == true) {
				notes[contadorLigadasActual].setAttribute("fill", "blue");
				contadorLigadasActual++;
				// ligaduraHack = true;
				// contadorLigadasActual--;
				// console.log("2-IFcontadorLigadasActualNotaActual : " + contadorLigadasActual);
				// contadorColor++;
			}else{
				// contadorLigadasActual--;
			}
		}
		
	} catch (e) {  }

	contadorSilenciosNotaActual++;
}

function colorear(argument) {
	// console.log("colorear");
	// if(posicionSilenciosColorear[contadorLigadas] == true){
	// 	// notes[contadorLigadas].setAttribute("fill", argument);
	// 		// console.log("EO");
	// 	contadorLigadas++;
	// 	if (posicionSilenciosColorear[contadorLigadas] == true) {
	// 		// console.log("EOEO");
	// 		// console.log("posicionSilenciosColorear[contadorLigadas + 1] : " + posicionSilenciosColorear[contadorLigadas + 1]);
	// 		contadorLigadas++;
	// 		// contadorLigadas++;
	// 	}
	// 	// console.log("contadorLigadas : " + contadorLigadas);
	// 	// console.log("posicionSilenciosColorear[" + contadorLigadas + "] : " + posicionSilenciosColorear[contadorLigadas]);
	// }

	while(posicionSilenciosColorear[contadorLigadas] == true){
		contadorLigadas++;	
	}


	try {
		notes[contadorLigadas].setAttribute("fill", argument);
		contadorLigadas++;
		// console.log("TRY contadorLigadas : " + contadorLigadas);
		// console.log("colorear");
		// console.log("notasLigadas[contadorLigadas - 1] : " + notasLigadas[contadorLigadas - 1]);
		// bug8
		if (notasLigadas[contadorLigadas - 1] == true) {
			notes[contadorLigadas].setAttribute("fill", argument);
			contadorLigadas++;
			// console.log("1-IFcontadorLigadasNotaActual : " + contadorLigadas);
			// contadorColor++;
			if (notasLigadas[contadorLigadas - 1] == true) {
				notes[contadorLigadas].setAttribute("fill", argument);
				contadorLigadas++;
				// ligaduraHack = true;
				// contadorLigadas--;
				// console.log("2-IFcontadorLigadasNotaActual : " + contadorLigadas);
				// contadorColor++;
			}else{
				// contadorLigadas--;
			}
		}
		
	} catch (e) {  }

	contadorSilencios++;
}


function resetearColores(argument) {
	// console.clear();
	console.log("noteLetter : " + noteLetter);
	console.log("tiemposCorrectos : " + tiemposCorrectos);
	// console.log("posicionSilencios : " + posicionSilencios);
	console.log("posicionSilenciosColorear : " + posicionSilenciosColorear);
	// console.log("notasLigadas : " + notasLigadas);
	// console.log("notes : " + notes);
	console.log("frecuenciaNota : " + frecuenciaNota);
	//colores
	// console.log("resetearColores");
	for (var i = 0; i < notes.length; i++) {
		notes[i].setAttribute("fill", "black");
	// 			notes[contadorColor].setAttribute("class", "note note_selected");
	// notes[contadorColor].setAttribute("fill", "grey");
	}
	contadorColor = 0;
	//necesario lo de abajo? ya lo hicimos al principio del init.js
	// notes = document.getElementsByClassName('note');//con esto se rellena el array  notes con todos los elementos de class="note"
	// ABCJS.stopAnimation();
	// console.log("notes.length : " + notes.length);
	cantidadScroll = 0;
	notasPorLineaUsuario = 0;
	contadorLinea = 0;
	cantidadScrollHorizontal = 0;
	contadorSilencios = 0;
	contadorSilenciosNotaActual = 0;
	contadorLigadas = 0;
	contadorLigadasActual = 0;


}