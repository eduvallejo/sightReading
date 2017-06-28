var offset ;
var bars  = []; //array con cada uno de los elementos con class bar
var measureLengths = [];
var cantidadScrollHorizontal; 
//recorrer array con modulus
// for (var i = 0; i < 10; i++) {
// 	console.log(i + " % 3 : " + (i % 3));
// }
var screenWidth = window.innerWidth / 2;
function init(argument) {
	window.scrollTo(0, 93);
	comenzarMetronomo();
	// console.clear();
	//quitamos la screenwidth del array de los bars
	//hacemos array con las notas del dom(para pintarlas) y tb con las bars(medir distancia)
	notes = document.getElementsByClassName('note');
	bars = document.getElementsByClassName('bar');
	//la longitud de cada compas sera restando el margin izquierdo y tambien lo acumulado de margenes anteriores
	var measureLengthsTemp = [];
	console.log("screenWidth : " + screenWidth);

	for (var i = 0; i < bars.length; i++) {
		// console.log("bars[i].nextSibling[x] : " + bars[i].nextSibling["x"]);
		// console.log(" bars[i].nextSibling.getAttribute('x') : " +  bars[i].nextSibling.getAttribute("x"));
		measureLengthsTemp[i] = parseInt(bars[i].nextSibling.getAttribute("x"));
		// console.log("measureLengths[" + i + "] : " + measureLengths[i]); 
		// measureLengthsTemp[i] = measureLengthsTemp[i] - screenWidth;
		// measureLengthsTemp[i] = measureLengthsTemp[i];
		// measureLengths[i] = measureLengthsTemp[i];
		// measureLengthsTemp[i]  = measureLengths[i];
		// console.log("measureLengths[" + i + "] : " + measureLengths[i]); 
		// if (i > 0) {
		// 	measureLengths[i] = measureLengths[i] - measureLengths[i - 1];
		// 	console.log("measureLengths[" + i + "] : " + measureLengths[i]); 			
		// }
	}
	// console.log("measureLengthsTemp : " + measureLengthsTemp);
	cantidadScrollHorizontal = measureLengths[0] ; 
	for (var i = 0; i < bars.length; i++) {
		if (i > 0) {
			measureLengths[i] = measureLengthsTemp[i] - measureLengthsTemp[i -1];
		}else if(i == 0){
			measureLengths[i] = measureLengthsTemp[i] - screenWidth;
		} 
	}
	console.log("measureLengths : " + measureLengths);
	cantidadScrollHorizontal = measureLengths[0];
	console.log("cantidadScrollHorizontalMeasureLen[0] : " + cantidadScrollHorizontal);
	
	contadorSilencios = 0; //para saltarse los silencios cuando colereamos
	getNotesWidth(); //para el scroll horiz
	// console.clear();
	//key down
	// window.onkeydown = function(e){
	window.onkeydown = function(e){
		clickButton();
	}

	window.onkeyup = function(e){
		if (e.keyCode == 27){
			// console.log("keyCode : " + e.keyCode);
			reinitiate();
		}
	}
	//debug
	// clickButton();

}

var freq = 25;
var time = 0;
var context, oscillator;
context = new AudioContext;
freq = 100;
// console.log("freq : " + freq);
var noteLetter = [];
var frecuenciaNota = [];
var gainNode;


function clickButton(argument) {

	// console.log("bpmArray[0] : " + bpmArray[0]);
	gainNode = context.createGainNode();
	if (clickPressed == false) {
	 	// cantidadScrollHorizontal = measureLengths[0] ; 

		// setInterval(autoScroll, 2 * (60 / bpm)); //2 por estar debugeando con 2x4 compas
		// console.log("timeSignatures[" + timeSignaturesCounter + "][0]INIT : " + timeSignatures[timeSignaturesCounter][0]); 
intervalSet = setInterval(autoScroll, timeSignatures[timeSignaturesCounter][0] * (60 / bpmArray[0]) * 1000 * scrollsPorBeat); //4 por estar debugeando con 4x4 compas  (setinterval es en miliseconds asi q *1000 ) = duracion en ms de un compas
														

		// console.log("compas[0] * (60 / bpm) * 100): " + compas[0] * (60 / bpm) * 1000);
		// console.clear();
		// //bug11 scroll down
		// contadorLinea = 0;
		// console.log("audioSong: " + audioSong.paused);
		if (oscillator) {
			oscillator.stop();
		}
		timestamp = audioSong.currentTime;
		// console.log("audioSong.currentTime : " + audioSong.currentTime);

		//sound webaudio
		// oscillator.stop(time );
		// oscillator = context.createOscillator();
		oscillator = context.createOscillator();
		// oscillator.frequency.value = obtenerFrecuenciaNota(indiceNota[noteLetter[contadorColor]],4);//200hz
		// console.log("contadorColor : " + contadorColor);
		oscillator.frequency.value = frecuenciaNota[contadorColor];
		// console.log("frecuenciaNota[" + contadorColor + "] : " + frecuenciaNota[contadorColor]);

		// oscillator.connect(context.destination);    
		// oscillator.connect(context.destination);    
		// Connect the source to the gain node.
		oscillator.connect(gainNode);
		// Connect the gain node to the destination.
		gainNode.connect(context.destination);
		// Reduce the gainNode.
		gainNode.gain.value = volumen;		
		// gainNode.gain.setTargetAtTime(decayTarget, timestamp , decayRate);
		gainNode.gain.setTargetAtTime(decayTarget, timestamp , decayRateNota[contadorColor]);
		if (audioSong.paused == true) {
			audioSong.volume = 0.5;
			audioSong.play(timestamp);
		}
		// if (song = "bach_badinerieLento.abc") {
		// 	audioSong.playbackRate = 0.5;
		// }
		//play audio and oscillator
		audioSong.play();
		oscillator.start(timestamp);
		//no se si poner la animacion
		// ABCJS.startAnimation(outputElement, tuneObjectArray[0], {showCursor : true, bpm : bpm ,});
		
		// console.log("clickPressed : " + clickPressed);  
		clickPressed = true;		
		pintarNotaActual();

	}else if(clickPressed == true){
		timestampUp = audioSong.currentTime;
		// console.log("timestamp : " + timestamp);
		var interval = (timestampUp - timestamp).toFixed(3);//75ms añadidos para compensar lo q se tarda en volver a apretar la tecla
		// console.log("interval : " + interval.toFixed(3));
		// getNearestTime(interval);
		// colorear("green");
		pushTiempoUsuario(interval*1000);
		// console.log("interval*1000 : " + interval*1000);

		//
		// this._time = timestamp;	
		timestamp = audioSong.currentTime;
		//sound webaudio
		oscillator.stop(timestamp );
		oscillator = context.createOscillator();
		// console.log("frecuenciaNota("+ indiceNota[noteLetter[contadorColor]] + ",4) : " + frecuenciaNota(indiceNota[noteLetter[contadorColor]],4));
		// oscillator.frequency.value = obtenerFrecuenciaNota(indiceNota[noteLetter[contadorColor]],4);//previo a la version precompilada de las freq
		// console.log("frecuenciaNota[" + contadorColor + "] : " + frecuenciaNota[contadorColor]);
		oscillator.frequency.value = frecuenciaNota[contadorColor];
		// oscillator.connect(context.destination);    
		// oscillator.connect(context.destination);    
		// Connect the source to the gain node.
		oscillator.connect(gainNode);
		// Connect the gain node to the destination.
		gainNode.connect(context.destination);
		// Reduce the gainNode.
		gainNode.gain.value = volumen;
		// gainNode.gain.setTargetAtTime(decayTarget, timestamp , decayRate);
		gainNode.gain.setTargetAtTime(decayTarget, timestamp , decayRateNota[contadorColor]);
		oscillator.start(timestamp);

		//rama changeTempo -->el cambio de tempo lo lanza el usuario
		// if (changeTempoInThisNote[contadorColor] == true) {
		// 	console.log("cambiarBpm");
		// 	stopSetInterval();
		// 	cambiarBpm();
		// }
		pintarNotaActual();
	}
	rest = false;	//esto sirve de algo???
	
	// //bug 11contador notas para scroll
	// notasPorLineaUsuario++;
	// if (notasPorLineaUsuario >= notasPorLinea[contadorLinea]) {
	// 	scrollDown();
	// 	notasPorLineaUsuario = 0;
	// 	contadorLinea++;
	// }

	//bug12
	// scrollRight();
}	

//vaciar los resultados y eliminar el objeto tiempo
function reinitiate(argument) {
	oscillator.stop(timestamp );
	audioSong.pause();
	audioSong.load();

	console.clear();
	resetearColores();
	// ABCJS.stopAnimation();

	contadorUsuario = 0;
	tiemposUsuario = [];
	clickPressed = false;


	if (velocidadDoblada == true) {
		document.getElementById('tempoDoble').style.backgroundColor = "green";
		document.getElementById('tempo').innerHTML = bpm * 2;

	}
	// document.getElementById('tempo').innerHTML = bpm ;

	resetearMarcador();
	// console.log("tiemposUsuario : " + tiemposUsuario);
	
	// //colores
	// for (var i = 0; i < notes.length; i++) {
	// 	notes[i].setAttribute("fill", "black");
	// // 			notes[contadorColor].setAttribute("class", "note note_selected");
	// // notes[contadorColor].setAttribute("fill", "grey");
	// }
	// contadorColor = 0;
}

function reloadMetronomo(argument) {
	audioSong.load();
}
function comenzarMetronomo(argument) {

	// console.log("audioSong.play : " );
	// console.log("audioSong.currentTime : " + audioSong.currentTime);
	audioSong.volume = volumen;
	// audioSong.play();
	
	// p5
	setup();
	draw();
}





function scrollDown(argument) {
	// console.log("scrolldown?")
	// offset = $('.cursor').offset();
	// console.log("offset.left : " + offset.left);
	// console.log("offset.top : " + offset.top);
	// if (offset.top > 200) {
	// }

	// window.scrollBy(0, 85); //scrollBy(x, y)
	cantidadScroll = cantidadScroll + 93;
	window.scroll({
	  top: cantidadScroll, 
	  left: 0, 
	  behavior: 'smooth' 
	});

}

function scrollRight(argument) {
	// cantidadScrollHorizontal = parseFloat(parseFloat(cantidadScrollHorizontal) + parseFloat(notesWidth[contadorColor]));
	window.scroll({
	  top: 93, 
	  left: notesWidth[contadorColor], 
	  behavior: 'smooth' 
	});

}

