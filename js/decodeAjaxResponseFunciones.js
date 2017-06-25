function checkearCambioArmaduraCambioDeTempo(argument) {
	console.log("checkearCambioArmaduraCambioDeTempo : ");
	if (song[pointer] = "[" && song[pointer + 1] == "K" && (song[pointer + 3] != "t" || song[pointer + 3] != "b")) { //treble or bass key
		var armadura = "";
		// console.log("cambiode Armadura : " );
		pointer++;pointer++;pointer++;
		while(song[pointer] != "]"){
			// console.log("song[pointer] : " + song[pointer]);
			armadura = armadura + song[pointer];
			pointer++;
		}
		// console.log("armadura :" + armadura);
		key = armadura;
	}else if(song[pointer] = "[" && song[pointer + 1] == "K" && (song[pointer + 3] == "t" || song[pointer + 3] == "b")) {
		while(song[pointer] != "]"){
			pointer++;
		}
	}else if(song[pointer] = "[" && song[pointer + 1] == "M" ) {
		while(song[pointer] != "]"){
			pointer++;
		}
	}else if(song[pointer] = "[" && song[pointer + 1] == "Q"){ //changeTempoInThisNote
		console.log("song[pointer + 1] : " + song[pointer + 1]);
		var tempoChange = 0;
		while(song[pointer] != "="){
			pointer++;
		}
		pointer++;
		while(song[pointer] != "]"){
			// console.log("song[pointer] : " + song[pointer]);
			tempoChange = tempoChange + song[pointer];
			pointer++;
		}
		tempoChange = parseInt(tempoChange);
		bpm = tempoChange;
		bpmArray.push(bpm);
		changeTempoInThisNote[noteLetter.length] = true;
		console.log("noteLetter : " + noteLetter);
		// console.log("noteLetter.length : " + noteLetter.length);
		// console.log("bpmArray : " + bpmArray);
		// console.log("tiemposCorrectos : " + tiemposCorrectos);
		msPerBeat = parseFloat(60000 / bpm).toFixed(0);
	}
}

function letras(argument) {
	// body...
}

function nuevaTune(argument) {
	console.log("nuevaTune : ");
		console.log("song[" + pointer + "] : " + song[pointer]);
	if (song[pointer] == "X" && song[pointer + 1] == ":") {
		// pointer++;
		// // console.log("song[" + pointer + "] : " + song[pointer]);
		// pointer++;
		// // console.log("song[" + pointer + "] : " + song[pointer]);
		// pointer++;
		// console.log("song[" + pointer + "] : " + song[pointer]);
		for (var i = 0; i < 8; i++) {
			while(song[pointer] != "\n"){
				console.log("song[" + pointer + "] : " + song[pointer]);
				pointer++
			}
			pointer++;
		}
		console.log("song[" + pointer + "] : " + song[pointer]);
		pointer--;
	}
	
}