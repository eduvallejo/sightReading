	var ligaduraHackActual = false;
	var ligaduraHack = false;
function pintarNotaActual(argument) {
	// console.log("pintarNotaActual");
		// console.log("contadorSilenciosNotaActual : " + contadorSilenciosNotaActual);
		// console.log("posicionSilencios[" + contadorSilenciosNotaActual + "] : " + posicionSilencios[contadorSilenciosNotaActual]);
	while(posicionSilencios[contadorSilenciosNotaActual] == true){
		// notes[contadorSilenciosNotaActual].setAttribute("fill", argument);
		contadorSilenciosNotaActual++;
		contadorSilenciosNotaActual++;
		if (ligaduraHackActual == true) {
			contadorSilenciosNotaActual++;
			ligaduraHackActual = false;
		}
		// console.log("contadorSilenciosNotaActual : " + contadorSilenciosNotaActual);
	}
	// if(posicionSilencios[contadorSilenciosNotaActual] == true){
	// 	notes[contadorSilenciosNotaActual - 1].setAttribute("fill", argument);
	// 	contadorSilenciosNotaActual++;
	// }
	// notes[contadorSilenciosNotaActual].setAttribute("fill", argument);
		// notes[contadorColor].setAttribute("fill", "blue");
	try {
		// console.log("TRY contadorSilenciosNotaActual : " + contadorSilenciosNotaActual);
		// notes[contadorSilenciosNotaActual].setAttribute("fill", "blue");
		contadorSilenciosNotaActual++;
		// console.log("colorear");
		// console.log("notasLigadas[contadorSilenciosNotaActual - 1] : " + notasLigadas[contadorSilenciosNotaActual - 1]);
		// bug8
		if (notasLigadas[contadorSilenciosNotaActual - 1] == true) {
			// notes[contadorSilenciosNotaActual].setAttribute("fill", "blue");
			contadorSilenciosNotaActual++;
			// console.log("1-IFcontadorSilenciosNotaActual : " + contadorSilenciosNotaActual);
			// contadorColor++;
			if (notasLigadas[contadorSilenciosNotaActual - 1] == true) {
				// notes[contadorSilenciosNotaActual].setAttribute("fill", "blue");
				contadorSilenciosNotaActual--;
				ligaduraHackActual = true;
				// contadorSilenciosNotaActual--;
				// console.log("2-IFcontadorSilenciosNotaActual : " + contadorSilenciosNotaActual);
				// contadorColor++;
			}else{
				contadorSilenciosNotaActual--;
			}
		}
		
	} catch (e) {  }
	
}

	// console.log("noteLetter[" + contadorColor + "] : " + noteLetter[contadorColor]);
	

	
	// if(posicionSilencios[contadorSilencios] == true){
	// 	notes[contadorSilencios - 1].setAttribute("fill", argument);
	// 	contadorSilencios++;
	// }
function colorear(argument) {
	// console.log("pintarNotaActual");
		console.log("contadorSilencios : " + contadorSilencios);
		console.log("posicionSilencios[" + contadorSilencios + "] : " + posicionSilencios[contadorSilencios]);
	while(posicionSilencios[contadorSilencios] == true){
		// notes[contadorSilencios].setAttribute("fill", argument);
		contadorSilencios++;
		contadorSilencios++;
		if (ligaduraHack == true) {
			contadorSilencios++;
			ligaduraHack = false;
		}
		console.log("contadorSilencios : " + contadorSilencios);
	}
	// if(posicionSilencios[contadorSilencios] == true){
	// 	notes[contadorSilencios - 1].setAttribute("fill", argument);
	// 	contadorSilencios++;
	// }
	// notes[contadorSilencios].setAttribute("fill", argument);
		// notes[contadorColor].setAttribute("fill", "blue");
	try {
		notes[contadorSilencios].setAttribute("fill", argument);
		contadorSilencios++;
		console.log("TRY contadorSilencios : " + contadorSilencios);
		// console.log("colorear");
		// console.log("notasLigadas[contadorSilencios - 1] : " + notasLigadas[contadorSilencios - 1]);
		// bug8
		if (notasLigadas[contadorSilencios - 1] == true) {
			notes[contadorSilencios].setAttribute("fill", argument);
			contadorSilencios++;
			console.log("1-IFcontadorSilenciosNotaActual : " + contadorSilencios);
			// contadorColor++;
			if (notasLigadas[contadorSilencios - 1] == true) {
				notes[contadorSilencios].setAttribute("fill", argument);
				contadorSilencios--;
				ligaduraHack = true;
				// contadorSilencios--;
				console.log("2-IFcontadorSilenciosNotaActual : " + contadorSilencios);
				// contadorColor++;
			}else{
				// contadorSilencios--;
			}
		}
		
	} catch (e) {  }
	
}


function resetearColores(argument) {
	console.clear();
	console.log("noteLetter : " + noteLetter);
	console.log("tiemposCorrectos : " + tiemposCorrectos);
	console.log("posicionSilencios : " + posicionSilencios);
	console.log("notasLigadas : " + notasLigadas);
	// console.log("notes : " + notes);
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

}