// var offset ;
function init(argument) {
	window.scrollTo(0, 93);
	comenzarMetronomo();
	notes = document.getElementsByClassName('note');
	getNotesWidth(); //para el scroll horiz

	//key down
	// window.onkeydown = function(e){
	window.onkeydown = function(e){
		// if (e.keyCode != 13){
			// console.log("keyCode : " + e.keyCode);
		clickButton();
		// }else if(e.keyCode == 13){ //ctrl key
		// 	// console.log("keyCode : " + e.keyCode);
	 //  		// console.clear();
		// // 	if (rest == false ) {
		//  //  			timestampUp = audioSong.currentTime;
		//  //  			var interval = (compensation + timestampUp - timestamp).toFixed(3);//75ms añadidos para compensar lo q se tarda en volver a apretar la tecla
		//  //  			// console.log("posX : " + posX);
		//  //  			// console.log("interval : " + interval);  
		//  //  			// getNearestTime(interval);//version previa alos intervalos superio e inferior de dificultad
		// 	// 		pushTiempoUsuario(interval*1000);

		//  //  			rest = true;
		//  //  		}
		//  //  		clickPressed = false;
		// // 
		// 	scrollDown(); //ahora uso la tecla para scroll 
		// }
	}

	// window.onkeyup = function(e){
	// 	if (e.keyCode != 27){
	// 		// console.log("keyCode : " + e.keyCode);
	// 		clickButton();
	// 	}else if(e.keyCode == 27){//lo de abajo era para cuando hacia Esc para silencios
	//   		// console.clear();
	// 		if (rest == false ) {
	//   			timestampUp = audioSong.currentTime;
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
	var frecuenciaNota = [];
	var gainNode;
	var decayRate = 0.4; //cuan to mas PEQUEÑO, mas RAPIDO DECAE
	var decayTarget = 0; //si es 0 se acxaba apagando la nota depues de decaer

// get position of cursor using jquery
// $( "p:last" ).text( "left: " + position.left + ", top: " + position.top );
var screenWidth = window.innerWidth / 2;
console.log("screenWidth : " + screenWidth);
function autoScroll(argument) {
	try {
		p = $(".cursor").offset().left;
	} catch (e) {  }
	// console.log("autoscroll?");
	// var position = p.position();
	// console.log("position.left : " + p);
	// cantidadScrollHorizontal = cantidadScrollHorizontal + 2; 
	cantidadScrollHorizontal = p - screenWidth; 
	window.scroll({
	  top: 93, 
	  left: cantidadScrollHorizontal, 
	  behavior: 'smooth' 
	});

}
	
function clickButton(argument) {
	gainNode = context.createGainNode();
	if (clickPressed == false) {
		// setInterval(autoScroll, 2 * (60 / bpm)); //2 por estar debugeando con 2x4 compas 
		setInterval(autoScroll, 4 * (60 / bpm) * 10); //2 por estar debugeando con 2x4 compas  (setinterval es en miliseconds asi q *1000 )
		// //bug11 scroll down
		// contadorLinea = 0;
		// console.log("audioSong: " + audioSong.paused);
		if (oscillator) {
			oscillator.stop();
		}
		timestamp = audioSong.currentTime;
		console.log("audioSong.currentTime : " + audioSong.currentTime);

		//sound webaudio
		// oscillator.stop(time );
		// oscillator = context.createOscillator();
		oscillator = context.createOscillator();
		// oscillator.frequency.value = obtenerFrecuenciaNota(indiceNota[noteLetter[contadorColor]],4);//200hz
		console.log("contadorColor : " + contadorColor);
		oscillator.frequency.value = frecuenciaNota[contadorColor];
		// oscillator.connect(context.destination);    
		// oscillator.connect(context.destination);    
		// Connect the source to the gain node.
		oscillator.connect(gainNode);
		// Connect the gain node to the destination.
		gainNode.connect(context.destination);
		// Reduce the gainNode.
		gainNode.gain.value = volumen;		
		gainNode.gain.setTargetAtTime(decayTarget, timestamp , decayRate);
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
		ABCJS.startAnimation(outputElement, tuneObjectArray[0], {showCursor : true, bpm : bpm ,});
		
		notes[contadorColor].setAttribute("fill", "green");
		// console.log("clickPressed : " + clickPressed);  
		clickPressed = true;		
	}else if(clickPressed == true){
		timestampUp = audioSong.currentTime;
		// console.log("timestamp : " + timestamp);
		var interval = (timestampUp - timestamp).toFixed(3);//75ms añadidos para compensar lo q se tarda en volver a apretar la tecla
		// console.log("interval : " + interval.toFixed(3));
		// getNearestTime(interval);
		// colorear("green");
		pushTiempoUsuario(interval*1000);
		notes[contadorColor].setAttribute("fill", "green");

		//
		// this._time = timestamp;	
		timestamp = audioSong.currentTime;
		//sound webaudio
		oscillator.stop(timestamp );
		oscillator = context.createOscillator();
		// console.log("frecuenciaNota("+ indiceNota[noteLetter[contadorColor]] + ",4) : " + frecuenciaNota(indiceNota[noteLetter[contadorColor]],4));
		// oscillator.frequency.value = obtenerFrecuenciaNota(indiceNota[noteLetter[contadorColor]],4);//previo a la version precompilada de las freq
		oscillator.frequency.value = frecuenciaNota[contadorColor];
		// oscillator.connect(context.destination);    
		// oscillator.connect(context.destination);    
		// Connect the source to the gain node.
		oscillator.connect(gainNode);
		// Connect the gain node to the destination.
		gainNode.connect(context.destination);
		// Reduce the gainNode.
		gainNode.gain.value = volumen;
		gainNode.gain.setTargetAtTime(decayTarget, timestamp , decayRate);
		oscillator.start(timestamp);

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
	// console.log("notes[" + contadorColor + "] : " + notes[contadorColor].nextSibling.outerHTML);
	// console.log("notes[" + contadorColor + "] : " + notes[contadorColor].nextSibling.getAttribute("width"));
	// var siguienteHermano = notes[contadorColor].nextSibling;
	// for(var propertyName in siguienteHermano) {
 //   	// propertyName is what you want
 //   	// you can myObject[propertyName]
 //   		console.log("siguienteHermano[" + propertyName + "] : " + siguienteHermano[propertyName]);
	// }
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
	//necesario lo de abajo? ya lo hicimos al principio del init.js
	// notes = document.getElementsByClassName('note');//con esto se rellena el array  notes con todos los elementos de class="note"
	// ABCJS.stopAnimation();
	console.log("notes.length : " + notes.length);
	cantidadScroll = 0;
	notasPorLineaUsuario = 0;
	contadorLinea = 0;
	cantidadScrollHorizontal = 0;

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

