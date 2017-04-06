

function decodeAbc(song) {
	pointer = 0;
	
	while(song[pointer] != undefined){
		if (song[pointer] == '"') {
			// console.log("saltados : " + song[pointer]);
			pointer++;
			do{
				// console.log("saltados : " + song[pointer]);
				// console.log("song[pointer] : " + song[pointer]);
				pointer++;
			}while(song[pointer] != '"')
			// console.log("saltados : " + song[pointer]);
			//saltar la segunda (")
			pointer++;
		}
		saltarCaracter(pointer);

		//parsear los caracteres significativos para el tiempo
		// a 60bpm 1 tiempo es un segundo=msPerBeatms
		//lo primero q podemos encontrar son los :
		if (song[pointer] == ":" ) {
			//saltamos la letra siguiente y pasamos al de despues de la letra
			pointer++;
			pointer++;
			//saltamos la coma o apostrofe si lo hay
			if (song[pointer] == "'" || song[pointer] == ",") {
				pointer++;
			}
			console.log("song[pointer] : " + song[pointer]);;
			tiemposCorrectos[contadorTc]  = msPerBeat * song[pointer];
			contadorTc++;
			pointer++;
		}
		// console.log("song[pointer] : " + song[pointer]);

		//letras
		var lettersTime = /[a-gA-GzZ]/;
		// console.log("song[pointer] : " + song[pointer]);
		if (song[pointer].match(lettersTime) ) {
			tiemposCorrectos[contadorTc]  = msPerBeat;
			contadorTc++;
		}
		//mirar si hay division
		if (song[pointer] == "/" ) {//areglar bug de / sin nada dtras(/2 por defecto)
			contadorTc--;
			//miramos cual es el divisor
			pointer++;
			tiemposCorrectos[contadorTc] = tiemposCorrectos[contadorTc] / song[pointer];
			// console.log("tiemposCorrectos[contadorTc] : " + tiemposCorrectos[contadorTc]);
			//pasamos al siguiente elemento del array de tiempos
			contadorTc++;
		}

		//siguiente ronda
		pointer++;
	}//end While

	console.log("tiemposCorrectos : " + tiemposCorrectos);

}

// var song = 'B/2A/2|"G"G/2F/2G/2A/2 GB,/2C/2|"G"D/2E/2D/2B,/2 DG/2A/2| "G"BB "Em"B/2A/2G/2A/2|"Am"BA "D7"AB/2A/2| "G"G/2F/2G/2A/2 GB,/2C/2|"G"D/2E/2D/2B,/2 DG/2A/2|"G"B/2de/2 "Em"d/2B/2G/2A/2| "D7"BA "G"G:|'; 

function saltarCaracter(pointer) {
	//caracteres a tener en cuenta para el tiempo
	var notSkipCharacters = /[a-gA-GzZ0-9/:<>]/;
	if (!song[pointer].match(notSkipCharacters) ) {
		// console.log("saltados : " + song[pointer]);
		pointer++;
	}
}

