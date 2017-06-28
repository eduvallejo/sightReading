
// intervalSet = setInterval(autoScroll, compas[0] * (60 / bpmArray[0]) * 1000 * scrollsPorBeat); //4 por estar debugeando con 4x4 compas  (setinterval es en miliseconds asi q *1000 ) = duracion en ms de un compas
function autoScroll(argument) { //autoScroll lanzado por el setInterval
	// console.log("audioSong.currentTime : " + audioSong.currentTime);
	// changeTempoInThisNoteTimes
	if (audioSong.currentTime * 1000 >= changeTempoInThisNoteTimes[contadorChangeTempoInThisNoteTimes]) {
		contadorChangeTempoInThisNoteTimes++;
		// console.log("cambiarBpm");
		stopSetInterval();
		cambiarBpm();
	}
	//el 1er cantidadScrollHorizotal = measureLengths[0]
	window.scroll({
	  top: 93, 
	  // left: cantidadScrollHorizontal, 
	  left: cantidadScrollHorizontal, 
	  behavior: 'smooth' 
	});
	contadorCompases++;
	if (contadorCompases % scrollsPorBeatDenominador == 0) {
		// console.log("measureNumberTimeSignatures : " + measureNumberTimeSignatures);
		if (measureNumberTimeSignatures[measureNumberTimeSignaturesCounter] == true ) {
			// console.log("contadorCompases : " + contadorCompases);
			console.log("measureNumberTimeSignatures[" + measureNumberTimeSignaturesCounter + "] : " + measureNumberTimeSignatures[measureNumberTimeSignaturesCounter]);
			// timeSignaturesCounter++;
			stopSetInterval();
			cambiarTimeSignature();
		}
		measureNumberTimeSignaturesCounter++;
	}
	if (parseInt(contadorCompases * scrollsPorBeat) < bars.length) {
		// console.log("parseInt(contadorCompases * scrollsPorBeat) : " + parseInt(contadorCompases * scrollsPorBeat));
		cantidadScrollHorizontal = cantidadScrollHorizontal + measureLengths[parseInt(contadorCompases * scrollsPorBeat)] * scrollsPorBeat; 
		// console.log("cantidadScrollHorizontal : " + cantidadScrollHorizontal);
	}else if(parseInt(contadorCompases * scrollsPorBeat) >= bars.length){
		stopSetInterval();
		// console.log("parseInt(contadorCompases / scrollsPorBeat) : " + parseInt(contadorCompases * scrollsPorBeat));
	}
}


// function autoScroll(argument) { //autoScroll lanzado por el usuario
// 	// console.log("autoScroll : ");
// 	window.scroll({
// 	  top: 93, 
// 	  // left: cantidadScrollHorizontal, 
// 	  left: cantidadScrollHorizontal, 
// 	  behavior: 'smooth' 
// 	});
// 	contadorCompases++;
// 	if (parseInt(contadorCompases * scrollsPorBeat) < bars.length) {
// 		// console.log("parseInt(contadorCompases * scrollsPorBeat) : " + parseInt(contadorCompases * scrollsPorBeat));
// 		cantidadScrollHorizontal = cantidadScrollHorizontal + measureLengths[parseInt(contadorCompases * scrollsPorBeat)] * scrollsPorBeat; 
// 		// console.log("cantidadScrollHorizontal : " + cantidadScrollHorizontal);
// 	}else{
// 		stopSetInterval();
// 		// console.log("parseInt(contadorCompases / scrollsPorBeat) : " + parseInt(contadorCompases * scrollsPorBeat));
// 	}
// }


// console.log("scrollsPorBeat : " + scrollsPorBeat); 

function bug11(argument) {
	// console.log("song[pointer[" + pointer + "]: " + argument);
	var char = escape(argument);
	if (char == "%0A") {
		// console.log("notasPorLinea[" + contadorLinea + "] : " + notasPorLinea[contadorLinea]);
		contadorLinea++;
		// console.log("contadorLinea : " + contadorLinea);
		notasPorLinea[contadorLinea] = 0;
	}
}
function getNotesWidth(argument) {
	// console.log("notes.length : " + notes.length);
	for (var i = 0; i < notes.length; i++) {
		// console.log("notes[i].getAttribute : " + notes[i].getAttribute);
		if (i > 0) {
			notesWidth[i] = (parseFloat(notesWidth[i - 1]) + parseFloat(notes[i].nextSibling.getAttribute("width")) * scale + parseFloat(2))  ; //EL 2 es a ojo
		}else if( i == 0){
			notesWidth[i] = notes[i].nextSibling.getAttribute("width")  ;
		}
		
		try {
			if (notes[i].nextSibling.nextSibling.classList.contains("slur")) {
				// console.log("slur");
				notesWidth[i] = parseFloat(parseFloat(notesWidth[i]) + parseFloat(1.5 * scale)); 
			}			
		} catch (e) {  }
		// console.log("notesWidth[" + i + "] : " + notesWidth[i]);
		// console.log("notesWidth[" + i + "] : " + notesWidth[i]);
	}
}