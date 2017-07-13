	// var contadorLigadas = 0;
	// var posicionSilenciosColorear = [];


function pintarNotaActual(argument) {
	// console.log("pintarNotaActual");

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
	// stopSetInterval();
	// intervalSet = setInterval(autoScroll, compas[0] * (60 / bpmArray[0]) * 1000 * intervalosPorCompas); //4 por estar debugeando con 4x4 compas  (setinterval es en miliseconds asi q *1000 ) = duracion en ms de un compas

	// cambiarBpm();
	// console.log("noteLetter : " + noteLetter);
	// // // console.log("posicionSilencios : " + posicionSilencios);
	// console.log("posicionSilenciosColorear : " + posicionSilenciosColorear);
	// console.clear();
	// console.log("tiemposCorrectos : " + tiemposCorrectos);
	// console.log("changeTempoInThisNoteTimes : " + changeTempoInThisNoteTimes);
	// console.log("changeTempoInThisNoteTimes : " + changeTempoInThisNoteTimes);
	// console.log("measureLengths : " + measureLengths);
	// console.log("timeSignatures[" + timeSignaturesCounter + "] : " + timeSignatures[timeSignaturesCounter]);
	// console.log("timeSignatures: " + timeSignatures);
	// console.log("measureNumberTimeSignatures : " + measureNumberTimeSignatures);
	// posicionNota1  = parseInt(notes[0].nextSibling.getAttribute("x"));
	var posicionNota1= 0;
	// var posicionCursorStaffIncluida = document.getElementsByClassName("staff-extra")[0].getAttribute("d");
	var staffExtraArray = document.getElementsByClassName("staff-extra");
	console.log("staffExtraArray.length : " + staffExtraArray.length);
	// for (var i = 0; i < staffExtraArray.length; i++) {
	// 	console.log("staffExtraArray[" + i + "].nextSibling.[width] : " + staffExtraArray[i].nextSibling.getAttribute("width"));
	// 	posicionNota1 = parseInt(posicionNota1) +  parseInt(staffExtraArray[i].nextSibling.getAttribute("width")); 
	// }
	//tenemos en cuenta la cantidad de sotsenidos para colocar la linea de posicion, aunq a veces no hay y se tieene q catcheaar
	console.log("key : " + key);
	try{
		if (key != "Cmaj") {
			posicionNota1 = parseInt(posicionNota1) +  parseInt(staffExtraArray[1].nextSibling.getAttribute("width")); 
			document.getElementById("flecha").style.left = parseInt(screenWidth + posicionNota1 - 3 ) + "px";
			// console.log("posicionNota1 : " + parseInt(staffExtraArray[1].nextSibling.getAttribute('width')));
		}else if(key == "Cmaj"){
			document.getElementById("flecha").style.left = parseInt(screenWidth + 60) + "px"; //25 a ojo
			console.log("else Cmaj : ");
		}
	}catch(e){//para la tonalidad de C no esta el elemento staff
		document.getElementById("flecha").style.left = parseInt(screenWidth + 60) + "px"; //25 a ojo
		// console.log(" document.getElementById(flecha).getAttribute(left): " + document.getElementById("flecha").getAttribute("left")); //25 a ojo
		console.log("e : ");
	}

	// console.log("posicionNota1 : " + posicionNota1);
	// console.log("bpmArray : " + bpmArray);
	// console.log("bpmArray.length : " + bpmArray.length);
	// console.log("compas[0] : " + compas[0]);
	// console.log("changeTempoInThisNote : " + changeTempoInThisNote);
	// console.log("numeroCompases(bars.length) : " + bars.length);
	// console.clear();

	// console.log("posicionMarcadorPosicion : " + posicionMarcadorPosicion);	

	// // console.log("notasLigadas : " + notasLigadas);
	// // console.log("notes : " + notes);
	// console.log("frecuenciaNota : " + frecuenciaNota);
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
	contadorCompases = 0;
	contadorBpmArray = 0;
	timeSignaturesCounter = 0;
}