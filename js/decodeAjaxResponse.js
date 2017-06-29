
function resetearAjax(argument) {
	// console.clear();
	pointer = 0;
	tiemposCorrectos = [];
	tiemposUsuario = [];
	contadorUsuario = 0;
	fallos = 0;
	numErrores = 0;
	//bug valores raros ajax
	notasLigadas = [];
	repeticion = false; //para saber si tenemos q repetir desde el principio
	contadorRepeticion = 0; //saber desde donde repetir

	tupleApply = [];
	tupleType = 0; //3 para tresillos etc
	dotApply = [];
	corcheasL = false;

	noteLetter = [];
	audioSong.pause();
	// console.log("song : " + song);
	// mp3/
	// audioSong = new Audio('wav/' + song.replace('.abc', '.mp3')); //mp3
	// console.log("song.replace('.abc', 'mp3') : " + song.replace('.abc', '.mp3'));
	//wav
	// audioSong = new Audio('wav/silence.wav'); //wav SILENCIO
	// audioSong = new Audio('wav/' + song.replace('.abc', '.wav')); //wavs
	// audioSong = new Audio('mp3/' + song.replace('.abc', '.mp3')); //mp3
	// audioSong = new Audio('ogg/' + song.replace('.abc', '.ogg')); //ogg
	// console.log("audioSong : " + audioSong);
	//conºle
	// console.log("song.replace('.abc', 'wav') : " + song.replace('.abc', '.wav'));

		// tiemposRepetir = 0;
	document.getElementById('fallos').innerHTML = 'Fallos: ' + numErrores;
	// console.log("reset");
	// console.log("corcheasL : " + corcheasL);
	// console.clear();
	
}

function decodeAjaxResponse(song) {
	resetearAjax();
	// song = song.replace("<", "&lt");// "<" needs to be "&lt" in pre
	song = song.replace(/".*?"/g, ""); //elimino las quotes de los acordes, asi descode mmas facil

	var musicLines = false;
	while(musicLines == false){
		// Q:1/4=100
			// console.log("header song[" + pointer + "]: " + song[pointer]);
		// console.log("pointer : " + pointer);
		if ((isNaN(song[pointer]) && (song[pointer + 1] == ":")) || (song[pointer] == "%" ) || (song[pointer] == "\n")) {
			// pointer++;
			if (song[pointer] == "L" && song[pointer + 4] == "8") {
				corcheasL = true;
				// console.log("corcheasL : " + corcheasL);
			}else if (song[pointer] == "L" && song[pointer + 5] == "6") {//1/16
				semiCorcheasL = true;
				// console.log("corcheasL : " + corcheasL);
			}else if(song[pointer] == "K"){
				pointer++;
				pointer++;
				key = song[pointer];
				while(song[pointer] != "\n"){
					// console.log("song[pointer]: " + song[pointer]);
					pointer++;
					key = key + song[pointer];
				}
				key = key.replace("\n", "");
				// console.log("key : " + key);
			}else if(song[pointer] == "M"){
				pointer++;
				pointer++;
				timeSignatures[timeSignaturesCounter] = song[pointer];
				// console.log("song[pointer]: " + song[pointer]);
				// compas = song[pointer];
				for (var i = 0; i < 2; i++) {
					pointer++;
					timeSignatures[timeSignaturesCounter] = timeSignatures[timeSignaturesCounter] + song[pointer];
					// console.log("song[pointer]: " + song[pointer]);
				}
				// console.log("timeSignatures : " + timeSignatures);
			}else if(song[pointer] == "Q"){
				pointer++;
				pointer++;
				pointer++;
				pointer++;
				pointer++;
				var bpmTemp = 0;
				while(song[pointer] != "\n"){
					pointer++;
					bpmTemp = parseInt(bpmTemp + song[pointer]);
				}
				// bpm = bpmTemp.replace("\n", "");
				bpm = bpmTemp;
				bpmArray.push(bpm);
				msPerBeat = parseFloat(60000 / bpm).toFixed(0);//0 decimales de milisengundos

				// console.log("bpm : " + bpm);
			}
			while(song[pointer] != "\n"){
				pointer++
			}
		}else {
		// console.log("music lines");
		// console.log("song[" + pointer + "] : " + song[pointer]);
			// console.log("header song[" + pointer + "]: " + song[pointer]);
			musicLines = true;
			pointer--;//para q no se salte la primera nota al decode
			// console.log("header song[" + pointer + "]: " + song[pointer]);
		}
			pointer++;
	}

	// console.log("song : " + song);
	// console.log("body song[" + pointer + "]: " + song[pointer]);
	// pointer = 0; volver a poner si no funciona lo de arriba
	contadorTc = 0;
	// song = song.replace(/".*?"/g, ""); //elimino las quotes de los acordes, asi descode mmas facil
		// console.log("song[" + pointer + "] : " + song[pointer]);
	// console.log("song : " + song);
		// console.clear();

	//NOTAS MUSICALES
	while(song[pointer] != undefined){
		// console.log("song[" + pointer + "]: " + escape(song[pointer]));
		// //vertical scrolling
		// bug11(song[pointer]);
		// console.log(encodeURI(song[pointer]));
		// console.log("song[" + (pointer - 1) + "] : " + song[pointer - 1]);
		// console.log("song[" + pointer + "  ] : " + song[pointer]);
		if (song[pointer] == '|') {
			// console.log("song[" + pointer + "] : " + song[pointer]);
			resetearAlteracionesAccidentales();
		}
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
				// console.log("contadorTc -contadorRepeticion : " + (contadorTc - contadorRepeticion));
				tiemposRepetir = contadorTc - contadorRepeticion;
				// console.log("tiemposRepetir : " + tiemposRepetir);
				// for (var i = 0; i < tiemposRepetir; i++) {
				// 	tiemposCorrectos[contadorTc] = tiemposCorrectos[contadorRepeticion + i];
					console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
				// 	contadorTc++;
				// 	// console.log("contadorTc : " + contadorTc);
				// 	// console.log("song[" + pointer + "] : " + song[pointer]);
				// console.log("arrayCorrectos: " + tiemposCorrectos);
				// }
				repeticion = false;
			}else if(repeticion == false){//repetir desde principio si no hay |:
				tiemposRepetir = contadorTc - 0;
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
		//  C-C-D/
		if (song[pointer] == "-") {
			notasLigadas[contadorTc - 1] = true;
		}else{//hack para colorear ligaduras bug8
			notasLigadas[contadorTc] = false;
		}
		
		//contar measures
		if (song[pointer] == "|") {
			measureNumberTimeSignatures.push(false);
			// console.log("measureNumberTimeSignatures : " + measureNumberTimeSignatures);
		}

		saltarCaracter(pointer); //posicion original de la funcion salyar

		//mirar si hay una nueva Tune y saltar todo su head
		if (song[pointer] == "X" && song[pointer + 1] == ":") {
			// console.log("song[" + pointer + "] : " + song[pointer]);
			// pointer++;
			// // console.log("song[" + pointer + "] : " + song[pointer]);
			// pointer++;
			// // console.log("song[" + pointer + "] : " + song[pointer]);
			// pointer++;
			// console.log("song[" + pointer + "] : " + song[pointer]);
			for (var i = 0; i < 8; i++) {
				while(song[pointer] != "\n"){
					// console.log("song[" + pointer + "] : " + song[pointer]);
					pointer++
				}
				pointer++;
			}
			console.log("song[" + pointer + "] : " + song[pointer]);
			pointer--;
		}

		// checkearCambioArmadura(); cambioTempo [Q:1/4=160]
		if (song[pointer] = "[" && song[pointer + 1] == "K" && (song[pointer + 3] != "t" || song[pointer + 3] != "b")) { //treble or bass key
			var armadura = "";
			// console.log("cambiode Armadura : " );
			pointer++;pointer++;pointer++;
			while(song[pointer] != "]"){
				// console.log("song[pointer] : " + song[pointer]);
				armadura = armadura + song[pointer];
				pointer++;
			}
			console.log("armadura :" + armadura);
			key = armadura;
		}else if(song[pointer] = "[" && song[pointer + 1] == "K" && (song[pointer + 3] == "t" || song[pointer + 3] == "b")) {
			while(song[pointer] != "]"){
				pointer++;
			}
		}else if(song[pointer] = "[" && song[pointer + 1] == "M" ){
			measureNumberTimeSignatures.pop();//ya que cuando encontramos un | le ponemos como false
			measureNumberTimeSignatures.push(true);//asi q lo popeamos y le ponemos true
			timeSignaturesCounter++;
			pointer++;
			pointer++;
			pointer++;
			timeSignatures[timeSignaturesCounter] = song[pointer];
			pointer++;
			timeSignatures[timeSignaturesCounter] = timeSignatures[timeSignaturesCounter] + song[pointer];
			pointer++;
			timeSignatures[timeSignaturesCounter] = timeSignatures[timeSignaturesCounter] + song[pointer];
				// console.log("song[pointer]: " + song[pointer]);
			// console.log("compas : " + compas);
		}else if(song[pointer] = "[" && song[pointer + 1] == "Q"){ //changeTempoInThisNote
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
			// console.log("noteLetter : " + noteLetter);
			// console.log("noteLetter.length : " + noteLetter.length);
			// console.log("bpmArray : " + bpmArray);
			// console.log("tiemposCorrectos : " + tiemposCorrectos);
			msPerBeat = parseFloat(60000 / bpm).toFixed(0);
		}

		// LETRAS 
		var lettersTime = /[a-gA-GzZ]/;//letters involved in time
		if (song[pointer].match(lettersTime) ) {
			//sumamos una nota para el bug 11
			notasPorLinea[contadorLinea]++;
			// console.log("notasPorLinea[" + contadorLinea + "] : " + notasPorLinea[contadorLinea]);
			if (song[pointer + 1] == "," && song[pointer + 2] == ",") {
				noteLetter.push(song[pointer] + ",,");
			}
			else if (song[pointer + 1] == ",") {
				noteLetter.push(song[pointer] + ",");
			}else if(song[pointer + 1] == "'" && song[pointer + 2] == "'"){
				noteLetter.push(song[pointer] + "''");
			}else if(song[pointer + 1] == "'"){
				noteLetter.push(song[pointer] + "'");
			}else{
				noteLetter.push(song[pointer]);
			}
			//rama changeBpm
			// console.log("notasLigadas : " + notasLigadas);
		if (changeTempoInThisNote[noteLetter.length - 1] != true) {//
			changeTempoInThisNote[noteLetter.length - 1] = (false);
		}
			// console.log("noteLetter : " + noteLetter);
			// console.log("changeTempoInThisNote : " + changeTempoInThisNote);
			// ^CC | C | D|
			// console.log("noteLetter.length : " + noteLetter.length);
			tiemposCorrectos[contadorTc]  = msPerBeat;//letra a secas 
			if (song[pointer - 1] == "^"  && becuadroAccidental[noteLetter[noteLetter.length - 1]] == false) {
				// console.log("216");
				getAlteraciones(noteLetter.length, 1);
				// console.log("sp[" + (pointer - 1 ) + "]: " + song[pointer - 1]);
				sostenidoAccidental[noteLetter[noteLetter.length - 1] ] = true;
				// for (var i = 0; i < sostenidoAccidental.length; i++) {
					// console.log("sostenidoAccidental[" + noteLetter.length - 1 + "] : " + sostenidoAccidental[noteLetter.length - 1]);
				// }
				// console.log("sostenidoAccidental[" + noteLetter[noteLetter.length - 1] + "] : " + sostenidoAccidental[noteLetter[noteLetter.length - 1]]);
			}else if (song[pointer - 1] == "^"  && becuadroAccidental[noteLetter[noteLetter.length - 1]] == true) {
				if (bemolesTonalidades[key][noteLetter[noteLetter.length - 1]] != true) {
					// getAlteraciones(noteLetter.length, 0); //apaño ,momentaneo
					console.log("song[pointer - 1] : " + song[pointer - 1]);
					console.log("song[pointer] : " + song[pointer]);
					getAlteraciones(noteLetter.length, 1); //apaño ,momentaneo
				}else{
					getAlteraciones(noteLetter.length, 0);
				}
				// getAlteraciones(noteLetter.length, 0);
				becuadroAccidental[noteLetter[noteLetter.length - 1]] = false;
			//BECUADROS
			}else if (song[pointer - 1] == "="  && becuadroAccidental[noteLetter[noteLetter.length - 1]] == true) {
				getAlteraciones(noteLetter.length, 0);
				// console.log("sp[" + (pointer - 1 ) + "]: " + song[pointer - 1]);
				// sostenidoAccidental[noteLetter[noteLetter.length - 1] ] = true;
			}else if (song[pointer - 1] == "=") {
				// console.log("sp[" + (pointer - 1 ) + "]: " + song[pointer - 1]);
				// getAlteraciones(noteLetter.length, 16.4821369405355);
				if (key[1] == "b" || (key[0] == "F" && key[1] == "m")) { // o Fmaj o por ejempo Eb , Bb, Ab...
					// console.log("242");
					// console.log("243");
					// console.log("song[pointer] : " + song[pointer]);
					// console.log("key : " + key);
					// console.log("bemolesTonalidades[" + key + "][" + noteLetter[noteLetter.length - 1] + "] : " + bemolesTonalidades[key][noteLetter[noteLetter.length - 1]]);
					// getAlteraciones(noteLetter.length, 1); //apaño ,momentaneo
					if (bemolesTonalidades[key][noteLetter[noteLetter.length - 1]] == false) {
						// console.log("247");
						// console.log("EOO!!");
						getAlteraciones(noteLetter.length, 0); //apaño ,momentaneo
					// bugnoteletter abajo , añado [0]
					}else if (bemolesTonalidades[key][noteLetter[noteLetter.length - 1][0]] == true){
					// console.log("250");
					// console.log("noteLetter[noteLetter.length - 1] : " + noteLetter[noteLetter.length - 1][0]);
						getAlteraciones(noteLetter.length, 1); //apaño ,momentaneo
					}
					//ha de ser alter 0 si no tienen bemoles naturalkes
				}else{
					getAlteraciones(noteLetter.length, -1); //apaño ,momentaneo
				}
				becuadroAccidental[noteLetter[noteLetter.length - 1] ] = true;
				//anulamos las alteraciones q coincidan con el becuadro
				if (sostenidoAccidental[noteLetter[noteLetter.length - 1] ] == true) {
					sostenidoAccidental[noteLetter[noteLetter.length - 1] ] = false;
					// console.log("252");
					getAlteraciones(noteLetter.length, 0);
				}
				if (bemolAccidental[noteLetter[noteLetter.length - 1] ] == true) {
					bemolAccidental[noteLetter[noteLetter.length - 1] ] = false;
					getAlteraciones(noteLetter.length, 0);
				}
				// console.log("becuadroAccidental[" + noteLetter[noteLetter.length - 1] + "] : " + becuadroAccidental[noteLetter[noteLetter.length - 1]]);
			//BEMOLES
			}else if (song[pointer - 1] == "_" && becuadroAccidental[noteLetter[noteLetter.length - 1]] == false) {
				// console.log("243 : ");
				// console.log("sp[" + (pointer - 1 ) + "]: " + song[pointer - 1]);
				getAlteraciones(noteLetter.length, -1);
				bemolAccidental[noteLetter[noteLetter.length - 1]] = true;
				// console.log("bemolAccidental[" + noteLetter[noteLetter.length - 1] + "] : " + bemolAccidental[noteLetter[noteLetter.length - 1]]);
			}else if (song[pointer - 1] == "_" && becuadroAccidental[noteLetter[noteLetter.length - 1]] == true) {
				// console.log("becuadroAccidental[noteletter.length - 1] : " + becuadroAccidental[noteLetter[noteLetter.length - 1]]);
				// console.log("249 : ");
				// console.log("sp[" + (pointer - 1 ) + "]: " + song[pointer - 1]);
				if (bemolesTonalidades[key][noteLetter[noteLetter.length - 1]] != true) {
				// console.log("286");
					// getAlteraciones(noteLetter.length, 0); //apaño ,momentaneo
					getAlteraciones(noteLetter.length, -1); //apaño ,momentaneo
				}else{
				// console.log("289");
					getAlteraciones(noteLetter.length, 0);
				}
				becuadroAccidental[noteLetter[noteLetter.length - 1]] = false;
				// bemolAccidental[noteLetter[noteLetter.length - 1]] = true;
				// console.log("bemolAccidental[" + noteLetter[noteLetter.length - 1] + "] : " + bemolAccidental[noteLetter[noteLetter.length - 1]]);
			}else if (sostenidoAccidental[noteLetter[noteLetter.length - 1]] == true) {
				// console.log("sp[" + (pointer - 1 ) + "]: " + song[pointer - 1]);
				// console.log("sostenidoAccidental[" + noteLetter[noteLetter.length - 1] + "] : " + sostenidoAccidental[noteLetter[noteLetter.length - 1]]);
				getAlteraciones(noteLetter.length, 1);
			}else if (bemolAccidental[noteLetter[noteLetter.length - 1]] == true) {
				// console.log("sp[" + (pointer - 1 ) + "]: " + song[pointer - 1]);
				// console.log("sostenidoAccidental[" + noteLetter[noteLetter.length - 1] + "] : " + sostenidoAccidental[noteLetter[noteLetter.length - 1]]);
				getAlteraciones(noteLetter.length, -1);
			}else if (becuadroAccidental[noteLetter[noteLetter.length - 1]] == true) {
					// console.log("235");
				if (sostenidoAccidental[noteLetter[noteLetter.length - 1]] == true) {
					getAlteraciones(noteLetter.length, 0); //apaño ,momentaneo
					// console.log("237");
				}else if (bemolAccidental[noteLetter[noteLetter.length - 1]] == true) {
					getAlteraciones(noteLetter.length, 0); //apaño ,momentaneo
					// console.log("240");
				}else if (key[1] == "b" || key[0] == "F" ) { // por ejempo Eb , Bb, Ab...
					// console.log("noteLetter[noteLetter]: " + noteLetter[noteLetter.length - 1]);
					// console.log("bemolesTonalidades[" + key + "]['c'] : " + bemolesTonalidades[key]["c"]);
					if (bemolesTonalidades[key][noteLetter[noteLetter.length - 1]] != true) {
					// console.log("286");
						getAlteraciones(noteLetter.length, 0); //apaño ,momentaneo
					}else{
					// console.log("289");
						getAlteraciones(noteLetter.length, 1); //apaño ,momentaneo
					}
				}else{
					getAlteraciones(noteLetter.length, -1); //apaño ,momentaneo
					// console.log("288");
				}
			}else{//nota sin alteracion accidental
				// console.log("sp[" + (pointer - 1 ) + "]: " + song[pointer - 1]);
				getAlteraciones(noteLetter.length, 0);
			}
		}

		//mirar si hay division
		if (song[pointer] == "/" ) {//areglar bug de / sin nada dtras(/2 por defecto)
			contadorTc--;
			//miramos cual es el divisor
			//pasamos al siguiente elemento del array de tiempos
			if (!isNaN(song[pointer + 1]) && song[pointer + 1] != " ") {
				// console.log("3/2" );
				tiemposCorrectos[contadorTc] = tiemposCorrectos[contadorTc] / song[pointer+1];
				// console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
				// console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
				pointer++;
			// console.log("song[" + pointer + "] : " + song[pointer]);
			}else{
				tiemposCorrectos[contadorTc] = tiemposCorrectos[contadorTc] / 2;
				// console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
				// console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
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
				// console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
				// console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
			}else if (song[pointer] != "\n"){//evitar bug fin de linea \
				// console.log("song[" + pointer + "] : " + (song[pointer]));
				tiemposCorrectos[contadorTc] = tiemposCorrectos[contadorTc] * song[pointer];
				// console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
			}else{
				contadorTc++;
			}
		}
		if(song[pointer].match(notSkipCharacters)){ ///[a-gA-GzZ0-9/:<>]/
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

		//solo calculamos los tiempos de la primera voz  //desde commit fa913e2dcad44cf2d9664425d398a4feb87c656b rama scrollhorizontal
		if (song[pointer] == "V" && song[pointer + 2] != 1) {
			// || (song[pointer  + 1] == "V") && song[pointer + 3] != "1"
			// console.log("sp : " + song[pointer]);
			// console.log("sp+2 : " + song[pointer + 2]);
			break;		}
	}//end While
	// console.log("sp end of while V : " + song[pointer]);
	// console.log("sp end of while 2 : " + song[pointer + 2]);

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
	var temp = 0;
	for (var i = 0; i < tiemposCorrectos.length; i++) {
		// console.log("notasLigadas[" + i + "] : " + notasLigadas[i]);
		if (notasLigadas[i] == true){
			// console.log("tiemposCorrectos : " + tiemposCorrectos);
			tiemposCorrectos[i] = parseInt(tiemposCorrectos[i]) + parseInt(tiemposCorrectos[i + 1]);
			// console.log("tiemposCorrectos : " + tiemposCorrectos);
			temp = tiemposCorrectos[i + 1];
			if (notasLigadas[i + 1] == true) {
				// console.log("temp : " + temp);
				tiemposCorrectos[i] = parseInt(tiemposCorrectos[i]) + parseInt(tiemposCorrectos[i + 2]);
				tiemposCorrectos[i + 2] = 0;
			}
			tiemposCorrectos[i + 1] = 0;
			// tiemposCorrectos.splice([i+1], 1);
			// delete tiemposCorrectos[i+1];
		}
		temp = 0;
	}

	//guardamos la posicion silencios en un array sin Pop , para coloreaar mas facilemente
	for (var i = 0; i < noteLetter.length; i++) {
		// console.log("i : " + i);
		if (noteLetter[i] == "z") {
			// console.log("noteLetter[i] : " + noteLetter[i]);
			posicionSilenciosColorear[i] = true;
		}else{
			posicionSilenciosColorear[i] = false;

		}
	}
	// console.log("posicionSilenciosColorear : " + posicionSilenciosColorear);

	//quitamos los silencios como posibles triggers de changeTempo
	for (var i = 0; i < noteLetter.length; i++) {
		if (noteLetter[i] == "z"){
			changeTempoInThisNote.splice([i], 1);
			// frecuenciaNota.splice([i + 1 - contadorPop], 1);
		}
	}

	//expulsar(pop) las notas ligadas
	var contadorPop = 0;
	// console.log("tiemposCorrectosAntesPOP : " + tiemposCorrectos);
	// console.log("noteLetterAntesPopo : " + noteLetter);
	var tiemposCorrectosLenghtAntesDelPop = tiemposCorrectos.length; //para evitar el bug de las notas ligadas cuando hay muchas
	for (var i = 0; i <= tiemposCorrectosLenghtAntesDelPop ; i++) {
		if (notasLigadas[i] == true){
			// console.log("tiemposCorrectos : " + tiemposCorrectos);
			tiemposCorrectos.splice([i + 1 - contadorPop], 1);
			noteLetter.splice([i + 1 - contadorPop], 1);
			frecuenciaNota.splice([i + 1 - contadorPop], 1);
			//rama changeBpm
			changeTempoInThisNote.splice([i + 1 - contadorPop], 1);

			// console.log("tiemposCorrectos.length : " + tiemposCorrectos.length);
			// console.log("tiemposCorrectos : " + tiemposCorrectos);
			// console.log(i + " + 1 - " + contadorPop +": " + (i + 1 - contadorPop));
			// console.log("__");
			contadorPop++;
			//bug6 de las repeticiones q no se aplican ligaduras etc...
			tiemposRepetir--;
			// console.log("tiemposRepetir: " + tiemposRepetir);
		}
		//ramaChangeTempo
		// console.log("changeTempoInThisNote : " + changeTempoInThisNote);
		// console.clear();
	}

	//dividimos entre dos si L:8
	if (corcheasL == true) {
		// console.log("1/8->la negra vale : " + (msPerBeat/2) + "ms");
		for (var i = 0; i < tiemposCorrectos.length; i++) {
			// console.log("tiemposCorrectos[i] : " + tiemposCorrectos[i]);
			tiemposCorrectos[i] = parseInt(tiemposCorrectos[i] / 2);
			// console.log("tiemposCorrectos[i] : " + tiemposCorrectos[i]);
		}
	}else if (semiCorcheasL == true) {
		// console.log("1/16->la negra vale : " + (msPerBeat/4) + "ms");
		for (var i = 0; i < tiemposCorrectos.length; i++) {
			// console.log("tiemposCorrectos[i] : " + tiemposCorrectos[i]);
			tiemposCorrectos[i] = parseInt(tiemposCorrectos[i] / 4);
			// console.log("tiemposCorrectos[i] : " + tiemposCorrectos[i]);
		}
	}

	// console.log("contREpeticion: " + contadorRepeticion);
	// console.log("tiempos a repetir: " + tiemposRepetir);
	//BUG en las repeticiones no se replican los > ni las ligaduras etc...	
	for (var i = contadorRepeticion; i < tiemposRepetir+contadorRepeticion; i++) {
		// console.log(tiemposCorrectos[i]);
		tiemposCorrectos.splice(i + tiemposRepetir, 0, tiemposCorrectos[i]);
	}

	// console.log("noteLetter.lenght: " + noteLetter.length );
	// getAlteraciones();//ponemos los bemoles y sostrenidos esegun la armadura

	//rama noSilencios
	var tiemposCorrectosSinSilencios = [];
	var noteLetterLength = noteLetter.length; 
	var contadorSilencios = 0; //este cuenta la posicion de los silencions en el svg -> no tiene q haber pop
	// console.log("tiemposCorrectosANTESsplit : " + tiemposCorrectos);
	// console.log("noteLetterANTESsplit : " + noteLetter);



	//sumamos los silencios a la nota anterior
	for (var i = 0; i < noteLetterLength; i++) {
		// console.log("noteLetter[i] : " + noteLetter[i]);
		if (noteLetter[i] == "z") {
			tiemposCorrectos[i - 1]  = parseFloat(tiemposCorrectos[i - 1]) + parseFloat(tiemposCorrectos[i]);
			tiemposCorrectos.splice([i], 1);
			// console.log("noteLetter[" + i + "] : " + noteLetter[i]);
			noteLetter.splice([i], 1);
			// console.log("frecuenciaNota[i] : " + frecuenciaNota[i]);
			// frecuenciaNota.splice([i + 1], 1);
			posicionSilencios[contadorSilencios] = true;
			i--;
		}else if(contadorSilencios < noteLetterLength){
			posicionSilencios[contadorSilencios] = false;
			// decayRateNota[i] = parseFloat((tiemposCorrectos[i] * 60) / (5500 * bpm) + parseFloat(0.25)).toFixed(3);
			// console.log("decayRateNota[" + i + "] : " + decayRateNota[i]);
		}
		contadorSilencios++;
	}
	// console.log("decayRateNota : " + decayRateNota);
	// console.log("tiemposCorrectosDespuesSplit : " + tiemposCorrectos);
	// console.log("posicionSilencios : " + posicionSilencios);
	// console.log("frecuenciaNota : " + frecuenciaNota);
		
	//para q los cambios de tempo no los lance el usuario sino el scroll
	scrollTimeChanging();

	var frecuenciaNotaLength = frecuenciaNota.length; 
	for (var i = 0; i < frecuenciaNotaLength; i++) {
		if (frecuenciaNota[i] < 1) {
			frecuenciaNota.splice([i], 1);
			i--;
		}
	}

	//aplicamos los decayRates en funcion de si hay cambio de tempo
	contadorRates = 0;
	// console.log("decayRateNotaPrevio : " + decayRateNota);
	// console.log("changeTempoInThisNote : " + changeTempoInThisNote);
	// console.log("bpmArray : " + bpmArray);
	for (var i = 0; i < tiemposCorrectos.length; i++) {
		// decayRate (exponential) approach to the target value. 
		//The larger this value is, the slower the transition will be.
		if (changeTempoInThisNote[i] == true){
			contadorRates++;
			// console.log("bpmArray[" + contadorRates + "] : " + bpmArray[contadorRates]);
			decayRateNota[i] = parseFloat((Math.pow(tiemposCorrectos[i], 1.15) * 60) / (5500 * bpmArray[contadorRates]*2) + parseFloat(0.2)).toFixed(3);	
			// console.log("decayRateNota["+ i + "] : " + decayRateNota[i]);
		}
		else{
			decayRateNota[i] = parseFloat((Math.pow(tiemposCorrectos[i], 1.15) * 60) / (5500 * bpmArray[contadorRates]*2) + parseFloat(0.2)).toFixed(3);		
			// console.log("decayRateNota["+ i + "] : " + decayRateNota[i]);
		}
		// console.log("tiemposCorrectos[" + i + "] : " + tiemposCorrectos[i]);
	}

	//determinar margenes
	for (var i = 0; i < tiemposCorrectos.length; i++) {
		margenesCorrectosSuperior[i] = parseInt(tiemposCorrectos[i]) + parseInt(tiemposCorrectos[i] * (dificultad / 100)) + compensation;//error relativo a la duracion
		// margenesCorrectosSuperior[i] = parseInt(tiemposCorrectos[i]) + dificultad;//margen error igual para todos (25ms)
		// console.log("margenesCorrectosSuperior[" + i + "] : " + margenesCorrectosSuperior[i]);

		margenesCorrectosInferior[i] = parseInt(tiemposCorrectos[i]) - parseInt(tiemposCorrectos[i] * (dificultad / 100)) - compensation;//error relativo a la duracion
		// margenesCorrectosInferior[i] = parseInt(tiemposCorrectos[i]) - dificultad;//margen error igual para todos
		// console.log("margenesCorrectosInferior[" + i + "] : " + margenesCorrectosInferior[i]);
	}

	//hacemos un array con la anchura de cada nota para poder hacer scroll horiz
	getNotesWidth();
}

// var song = 'B/2A/2|"G"G/2F/2G/2A/2 GB,/2C/2|"G"D/2E/2D/2B,/2 DG/2A/2| "G"BB "Em"B/2A/2G/2A/2|"Am"BA "D7"AB/2A/2| "G"G/2F/2G/2A/2 GB,/2C/2|"G"D/2E/2D/2B,/2 DG/2A/2|"G"B/2de/2 "Em"d/2B/2G/2A/2| "D7"BA "G"G:|'; 

function saltarCaracter(pointer) {
	// console.log("funSaltar song[" + pointer + "] : " + song[pointer]);
	// console.log("song[ " + pointer+ "] : " + song[pointer]);
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
// C-C-D/
