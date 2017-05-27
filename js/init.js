function init(argument) {
	comenzarMetronomo();
	notes = document.getElementsByClassName('note');
	// console.log("notes.length : " + notes.length);
	// console.clear();
	

	//key down
	// window.onkeydown = function(e){
	window.onkeydown = function(e){
		if (e.keyCode != 27){
			// console.log("keyCode : " + e.keyCode);
			clickButton();
		}else if(e.keyCode == 27){
	  		// console.clear();
			if (rest == false ) {
	  			timestampUp = audio.currentTime;
	  			var interval = (compensation + timestampUp - timestamp).toFixed(3);//75ms añadidos para compensar lo q se tarda en volver a apretar la tecla
	  			// console.log("posX : " + posX);
	  			// console.log("interval : " + interval);  
	  			// getNearestTime(interval);//version previa alos intervalos superio e inferior de dificultad
				pushTiempoUsuario(interval*1000);

	  			rest = true;
	  		}
	  		clickPressed = false;
		}
	}

	// window.onkeyup = function(e){
	// 	if (e.keyCode != 27){
	// 		// console.log("keyCode : " + e.keyCode);
	// 		clickButton();
	// 	}else if(e.keyCode == 27){//lo de abajo era para cuando hacia Esc para silencios
	//   		// console.clear();
	// 		if (rest == false ) {
	//   			timestampUp = audio.currentTime;
	//   			var interval = (compensation + timestampUp - timestamp).toFixed(3);//75ms añadidos para compensar lo q se tarda en volver a apretar la tecla
	//   			// console.log("posX : " + posX);
	//   			// console.log("interval : " + interval);  
	//   			// getNearestTime(interval);//version previa alos intervalos superio e inferior de dificultad
	// 			pushTiempoUsuario(interval*1000);

	//   			rest = true;
	//   		}
	//   		clickPressed = false;
	// 	}
	// }

}

    var freq = 25;
    var time = 0;
	var context, oscillator;
	context = new AudioContext;
	freq = 100;
	// console.log("freq : " + freq);
	var noteLetter = [];
	var gainNode = context.createGainNode();

	
function clickButton(argument) {
	if (clickPressed == false) {
		// console.log("audioSong: " + audioSong.paused);

		timestamp = audio.currentTime;
		console.log("audio.currentTime : " + audio.currentTime);

		//sound webaudio
		// oscillator.stop(time );
		// oscillator = context.createOscillator();
		oscillator = context.createOscillator();
		oscillator.frequency.value = frecuenciaNota(indiceNota[noteLetter[contadorColor]],4);//200hz
		// oscillator.connect(context.destination);    
		// oscillator.connect(context.destination);    
		// Connect the source to the gain node.
		oscillator.connect(gainNode);
		// Connect the gain node to the destination.
		gainNode.connect(context.destination);
		// Reduce the gainNode.
		gainNode.gain.value = volumen;		
		if (audioSong.paused == true) {
			audioSong.volume = 0.5;
			audioSong.play(timestamp);
		}
		oscillator.start(timestamp);
		//no se si poner la animacion
		ABCJS.startAnimation(outputElement, tuneObjectArray[0], {showCursor : true, bpm : bpm});
		notes[contadorColor].setAttribute("fill", "green");
		// console.log("clickPressed : " + clickPressed);  
		clickPressed = true;		
	}else if(clickPressed == true){
		timestampUp = audio.currentTime;
		// console.log("timestamp : " + timestamp);
		var interval = (timestampUp - timestamp).toFixed(3);//75ms añadidos para compensar lo q se tarda en volver a apretar la tecla
		// console.log("interval : " + interval.toFixed(3));
		// getNearestTime(interval);
		// colorear("green");
		pushTiempoUsuario(interval*1000);
		notes[contadorColor].setAttribute("fill", "green");

		//
		// this._time = timestamp;	
		timestamp = audio.currentTime;
		//sound webaudio
		oscillator.stop(timestamp );
		oscillator = context.createOscillator();
		// console.log("frecuenciaNota("+ indiceNota[noteLetter[contadorColor]] + ",4) : " + frecuenciaNota(indiceNota[noteLetter[contadorColor]],4));
		oscillator.frequency.value = frecuenciaNota(indiceNota[noteLetter[contadorColor]],4);//200hz
		// oscillator.connect(context.destination);    
		// oscillator.connect(context.destination);    
		// Connect the source to the gain node.
		oscillator.connect(gainNode);
		// Connect the gain node to the destination.
		gainNode.connect(context.destination);
		// Reduce the gainNode.
		gainNode.gain.value = volumen;
		oscillator.start(timestamp);

	}
	rest = false;	
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
	audio.load();
}
function comenzarMetronomo(argument) {

	console.log("audio.play : " );
	console.log("audio.currentTime : " + audio.currentTime);
	audio.volume = 0;
	audio.play();
	
	// p5
	setup();
	draw();
}

function colorear(argument) {
	// console.log("colorear");
	// bug8
	notes[contadorColor].setAttribute("fill", argument);
	if (notasLigadas[contadorColor] == true) {
		contadorColor++;
		notes[contadorColor].setAttribute("fill", argument);
	}
	if (notasLigadas[contadorColor] == true) {
		contadorColor++;
		notes[contadorColor].setAttribute("fill", argument);
	}
	
}

function resetearColores(argument) {
	// console.clear();
	//colores
	// console.log("resetearColores");
	for (var i = 0; i < notes.length; i++) {
		notes[i].setAttribute("fill", "black");
	// 			notes[contadorColor].setAttribute("class", "note note_selected");
	// notes[contadorColor].setAttribute("fill", "grey");
	}
	contadorColor = 0;
	notes = document.getElementsByClassName('note');
	// ABCJS.stopAnimation();
	// console.log("notes.length : " + notes.length);
}



