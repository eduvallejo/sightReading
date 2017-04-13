function init(argument) {
	audio.play();

	//para clickbutton
	window.onkeyup = function(e){
		// console.log("clickPressed : " + clickPressed);
		// console.log("rest : " + rest);
  		if (rest == false ) {
		console.log("e.keyCode" + e.keyCode);
  			// time = this._time;
  			// console.clear();
  			
  			timestampUp = audio.currentTime;
  			var interval = (compensation + timestampUp - timestamp).toFixed(3);//75ms añadidos para compensar lo q se tarda en volver a apretar la tecla
  			// console.log("posX : " + posX);
  			console.log("interval : " + interval);  
  			getNearestTime(interval);
  			//
  			// this._time = timestamp;	
  			
  			rest = true;
  		}
  		clickPressed = false;
	}

}

function clickButton(argument) {
	// console.log("clicked: " + clickPressed);
	if (clickPressed == false) {
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
		getNearestTime(interval);
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
	// rest = true;
	// delete timestamp; delete timestamp;
	console.log("timestamp : " + timestamp);
	console.log("timestampUp : " + timestampUp);
}



