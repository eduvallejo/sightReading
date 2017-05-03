function init(argument) {
	comenzarMetronomo();
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


}

function clickButton(argument) {
	// console.log("clicked a la entrada: " + clickPressed);
	if (clickPressed == false) {
		// console.log("clickPressed : " + clickPressed);
		timestamp = audio.currentTime;
		// console.log("audio.currentTime : " + audio.currentTime);
		clickPressed = true;		
		// console.log("clickPressed : " + clickPressed);  
	}else if(clickPressed == true){
		// time = this._time;
		// console.log("audio.currentTime : " + audio.currentTime);
	
		timestampUp = audio.currentTime;
		// console.log("timestamp : " + timestamp);
		var interval = (timestampUp - timestamp).toFixed(3);//75ms añadidos para compensar lo q se tarda en volver a apretar la tecla
		// console.log("interval : " + interval.toFixed(3));
		// getNearestTime(interval);
		pushTiempoUsuario(interval*1000);

		//
		// this._time = timestamp;	
		timestamp = audio.currentTime;

		// clickPressed = false;
		// console.log("clickPressed : " + clickPressed);  
	}
	rest = false;	
}

//vaciar los resultados y eliminar el objeto tiempo
function reinitiate(argument) {
	console.clear();
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
	
	// rest = true;
	// delete timestamp; delete timestamp;
	// console.log("timestamp : " + timestamp);
	// console.log("timestampUp : " + timestampUp);
}

function comenzarMetronomo(argument) {
	audio.play();
}



