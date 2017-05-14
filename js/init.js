function init(argument) {
	notes = document.getElementsByClassName('note');
	console.log("notes.length : " + notes.length);
	console.clear();
	// notes[contadorColor].style.backgroundColor = "red";
	// notes[contadorColor].className += "note_selected";
	// console.log("notes[contadorColor] : " + notes[contadorColor]);
	// console.log("contadorColor : " + contadorColor);
	// contadorColor++;
	comenzarMetronomo();
	//parece q la animacion se sincroniza mejor con el metronomo si se pone aqui el render
	// ABCJS.startAnimation(outputElement, tuneObjectArray[0], {showCursor : true, bpm : 60});
	// ABCJS.stopAnimation();

		//colores
	
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

	window.onkeyup = function(e){
		if (e.keyCode != 27){
			// console.log("keyCode : " + e.keyCode);
			clickButton();
		}else if(e.keyCode == 27){//lo de abajo era para cuando hacia Esc para silencios
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


}

function clickButton(argument) {
	// console.clear();
	// console.log("clicked a la entrada: " + clickPressed);
	if (clickPressed == false) {
		console.log("startAnimation");
		ABCJS.startAnimation(outputElement, tuneObjectArray[0], {showCursor : true, bpm : 60});
		// console.log("clickPressed : " + clickPressed);
		timestamp = audio.currentTime;
		console.log("tiemposCorrectos.length: " +  tiemposCorrectos.length);
		// console.log("audio.currentTime : " + audio.currentTime);
		clickPressed = true;		
		notes[contadorColor].setAttribute("fill", "green");
		// colorear("green");
		// console.log("clickPressed : " + clickPressed);  
	}else if(clickPressed == true){
		// console.log("ClickcontadorColor : " + contadorColor);
				// time = this._time;
		// console.log("audio.currentTime : " + audio.currentTime);
	
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

	}
	rest = false;	
}	

//vaciar los resultados y eliminar el objeto tiempo
function reinitiate(argument) {
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
	console.log("tiemposUsuario : " + tiemposUsuario);
	
	// //colores
	// for (var i = 0; i < notes.length; i++) {
	// 	notes[i].setAttribute("fill", "black");
	// // 			notes[contadorColor].setAttribute("class", "note note_selected");
	// // notes[contadorColor].setAttribute("fill", "grey");
	// }
	// contadorColor = 0;
}

function comenzarMetronomo(argument) {
	audio.play();
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



