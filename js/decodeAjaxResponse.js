

function decodeAjaxResponse(song) {
	//lo mismo q el decodeAbc pero quitamos los headers
	// console.log(JSON.stringify(song));
	// console.log("song : " + song);
	song = song + "]";//para evitar el bug del :| final
	pointer = 0;
	tiemposCorrectos = [];
	tiemposUsuario = [];
	contadorUsuario = 0;
	fallos = 0;

	var musicLines = false;
	while(musicLines == false){
			// console.log("header song[" + pointer + "]: " + song[pointer]);
		// console.log("pointer : " + pointer);
		if ((isNaN(song[pointer]) && (song[pointer + 1] == ":") || song[pointer] == "%")) {
			// console.log("header song[" + pointer + "]: " + song[pointer]);
			// pointer++;
		// console.log("song[" + pointer + "] : " + song[pointer]);
			while(song[pointer] != "\n"){
				pointer++
			}
		}else {
			// console.log("header song[" + pointer + "]: " + song[pointer]);
			musicLines = true;
			pointer--;//para q no se salte la primera nota al decode
			// console.log("header song[" + pointer + "]: " + song[pointer]);
		}
			pointer++;
		// console.log("song[" + pointer + "] : " + song[pointer]);
	}
	//reemplazamos letra/ por letra/2 para evitar errores
	// console.log("song.match() : " + song.match(/\D\/(?!\d)/g));
	// song = song.replace(/\D\/(?!\d)/g, "$&2");//cambio / por /2
	// song = song.replace("\\\l\n", ""); //quito los salto de carro


	// console.log("song : " + song);
	// pointer = 0; volver a poner si no funciona lo de arriba
	contadorTc = 0;
	song = song.replace(/".*?"/g, ""); //elimino las quotes de los acordes, asi descode mmas facil
	console.log("song : " + song);
	while(song[pointer] != undefined){
		//repeticiones
		if (song[pointer] == '|' && song[pointer + 1] == ":") {
			repeticion = true;
			// console.log("repeticion : " + repeticion);
			contadorRepeticion = contadorTc;
			pointer++;
		// console.log("song[" + pointer + "] : " + song[pointer]);
			pointer++;
		// console.log("song[" + pointer + "] : " + song[pointer]);
		}
		//
		if (song[pointer] == ':' && song[pointer + 1] == "|") {
			if(repeticion == true){;
				// console.log("repeticion : " + repeticion);
				// console.log("contadorTc -contadorRepeticion : " + (contadorTc - contadorRepeticion));
				tiemposRepetir = contadorTc - contadorRepeticion;
				for (var i = 0; i < tiemposRepetir; i++) {
					tiemposCorrectos[contadorTc] = tiemposCorrectos[contadorRepeticion + i];
					console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
					contadorTc++;
					// console.log("contadorTc : " + contadorTc);
					// console.log("song[" + pointer + "] : " + song[pointer]);
				}
				repeticion = false;
			}else if(repeticion == false){//repetir desde principio si no hay |:
				tiemposRepetir = contadorTc - 0;
				console.log("contadorTc : " + contadorTc);
				console.log("tiemposRepetir : " + tiemposRepetir);
				for (var i = 0; i < tiemposRepetir; i++) {
					tiemposCorrectos[contadorTc] = tiemposCorrectos[i];
					console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
					contadorTc++;
					// console.log("contadorTc : " + contadorTc);
					// console.log("song[" + pointer + "] : " + song[pointer]);
				}
			}
			pointer++;
		// console.log("song[" + pointer + "] : " + song[pointer]);
			pointer++; //parae vitar bugs en el :| final
		// console.log("song[" + pointer + "] : " + song[pointer]);
		}

		// (3Bcd   //tuplets   //corcheas333 negras 666 
		if (song[pointer] == "(" && !isNaN(song[pointer + 1])) {
			// console.log("tuplet de tipo: " + song[pointer + 1]);
			// tupleApply = true;
			tupleType = song[pointer+1] ;
			// console.log("tupleType : " + tupleType);
			for (var i = 0; i < tupleType; i++) {
				tupleApply[i + contadorTc] = tupleType;
			}
		pointer++;
		// console.log("song[" + pointer + "] : " + song[pointer]);
			pointer++;
		// console.log("song[" + pointer + "] : " + song[pointer]);
		}

		// puntillos > 
		if (song[pointer] == ">") {
			dotApply[contadorTc - 1] = 1.5;
			dotApply[contadorTc] = 0.5;
			// console.log("contadorTc : " + contadorTc);
			// console.log("song[" + pointer + "] : " + song[pointer]);
			pointer++;
		// console.log("song[" + pointer + "] : " + song[pointer]);
		}
	
		// puntillos <
		if (song[pointer] == "<") {
			dotApply[contadorTc - 1] = 0.5;
			dotApply[contadorTc] = 1.5;
			// console.log("contadorTc : " + contadorTc);
			// console.log("song[" + pointer + "] : " + song[pointer]);
			pointer++;
		// console.log("song[" + pointer + "] : " + song[pointer]);
		}

		//ligar duraciones
		// puntillos <
		if (song[pointer] == "-") {
			notasLigadas[contadorTc - 1] = true;
			// dotApply[contadorTc - 1] = 0.5;
			// dotApply[contadorTc] = 1.5;
			// console.log("contador ligado : " + (contadorTc - 1));
			// pointer++;
		// console.log("song[" + pointer + "] : " + song[pointer]);
		}
	
		saltarCaracter(pointer); //posicion original de la funcion salyar

		//parsear los caracteres significativos para el tiempo
		// a 60bpm 1 tiempo es un segundo=msPerBeatms
		//letras
		// console.log("contadorTc : " + contadorTc);
		// console.log("song[" + pointer + "] : " + song[pointer]);

		var lettersTime = /[a-gA-GzZ]/;//letters involved in time
		if (song[pointer].match(lettersTime) ) {
			tiemposCorrectos[contadorTc]  = msPerBeat;//letra a secas 
			// console.log("song[" + pointer + "]) : " + song[pointer]);
			console.log("tiemposCorrectos[" + contadorTc + "]: " + tiemposCorrectos[contadorTc]);
			// contadorTc++;
			// console.log("contadorTc : " + contadorTc);
			// console.log("song[" + pointer + "] : " + song[pointer]);
		}

		//mirar si hay division
		if (song[pointer] == "/" ) {//areglar bug de / sin nada dtras(/2 por defecto)
			contadorTc--;
			//miramos cual es el divisor
			//pasamos al siguiente elemento del array de tiempos
			if (!isNaN(song[pointer + 1]) && song[pointer + 1] != " ") {
				// console.log("3/2" );
				tiemposCorrectos[contadorTc] = tiemposCorrectos[contadorTc] / song[pointer+1];
				console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
				console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
				pointer++;
			// console.log("song[" + pointer + "] : " + song[pointer]);
			}else{
				tiemposCorrectos[contadorTc] = tiemposCorrectos[contadorTc] / 2;
				console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
				console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
			}
			// pointer++;
		// console.log("song[" + pointer + "] : " + song[pointer]);
		}else if(!isNaN(song[pointer]) && song[pointer] != " "){//if it is a number
			// console.log("song[" + pointer +"]: " + song[pointer]);
			contadorTc--;
			// console.log("contadorTc : " + contadorTc);
			// console.log("song[" + pointer + "] : " + song[pointer]);
			if (song[pointer] == " ") {
				tiemposCorrectos[contadorTc] = tiemposCorrectos[contadorTc] ;
				console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
				console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
			}else if (song[pointer] != "\n"){//evitar bug fin de linea \
				console.log("song[pointer] : " + escape(song[pointer]));
				tiemposCorrectos[contadorTc] = tiemposCorrectos[contadorTc] * song[pointer];
				console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
			}else{
				contadorTc++;
			}
		}
		if(song[pointer].match(notSkipCharacters)){
			// console.log("song[" + pointer + "] : " + song[pointer]);
			contadorTc++;
			// console.log("contadorTc : " + contadorTc);
			// console.log("song[" + pointer + "] : " + song[pointer]);
		}
		//siguiente ronda
		// console.log("contadorTc : " + contadorTc);
		// console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
		pointer++;
		saltarCaracter(pointer);
		// console.log("song[" + pointer + "] : " + song[pointer]);

		// ">"
		// if (song[pointer] == ">") {
		// 	tiemposCorrectos[contadorTc - 1] = 3*tiemposCorrectos[contadorTc - 1]/2 ;
		// 	pointer++;
		// }
	}//end While

	//aply tuples aun por implementar
	for (var i = 0; i < tiemposCorrectos.length; i++) {
		if (tupleApply[i] != " " && tupleApply[i] != undefined) {
			// console.log("tupleApply[" + i + "] : " + tupleApply[i]);
			tiemposCorrectos[i] = parseInt(2*tiemposCorrectos[i] / tupleApply[i]); 
		}
	}
	//aply dots
	for (var i = 0; i < tiemposCorrectos.length; i++) {
		if (dotApply[i] != " " && dotApply[i] != undefined) {
			// console.log("dotApply[" + i + "] : " + dotApply[i]);
			tiemposCorrectos[i] = parseInt(tiemposCorrectos[i] * dotApply[i]); 
		}
	}
	//ligar notas
	for (var i = 0; i < tiemposCorrectos.length; i++) {
		if (notasLigadas[i] == true){
			tiemposCorrectos[i] = tiemposCorrectos[i] + tiemposCorrectos[i + 1];
			tiemposCorrectos[i + 1] = 0;
			// tiemposCorrectos.splice([i+1], 1);
			// delete tiemposCorrectos[i+1];
		}
	}
	//expulsar(pop) las notas ligadas
	var contadorPop = 0;
	for (var i = 0; i <= tiemposCorrectos.length; i++) {
		if (notasLigadas[i] == true){
			// console.log("contadorPop : " + contadorPop);
			tiemposCorrectos.splice([i + 1 - contadorPop], 1);
			// console.log("i + 1: " + (i + 1 - contadorPop));
			contadorPop++;
		}
	}
	console.log("tiemposCorrectos : " + tiemposCorrectos);

}

// var song = 'B/2A/2|"G"G/2F/2G/2A/2 GB,/2C/2|"G"D/2E/2D/2B,/2 DG/2A/2| "G"BB "Em"B/2A/2G/2A/2|"Am"BA "D7"AB/2A/2| "G"G/2F/2G/2A/2 GB,/2C/2|"G"D/2E/2D/2B,/2 DG/2A/2|"G"B/2de/2 "Em"d/2B/2G/2A/2| "D7"BA "G"G:|'; 

function saltarCaracter(pointer) {
	// console.log("funSaltar song[" + pointer + "] : " + song[pointer]);
	// console.log("pointer : " + pointer);
	if (pointer <  song.length - 1) {
		// console.log("pointer : " + pointer);
		// console.log("song.length : " + song.length);
		//caracteres a tener en cuenta para el tiempo
		// if (!song[pointer].match(notSkipCharacters) ) {
		// 	pointer++;
	// console.log("song[" + pointer + "] : " + song[pointer]);
		// }
								// [a-gA-GzZ0-9/:<>]
		while(!song[pointer].match(notSkipCharacters)){
			// console.log("Saltados : " + song[pointer]);
			pointer++;
		// console.log("song[" + pointer + "] : " + song[pointer]);
		}
	}
}

