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