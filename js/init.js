var tiempoAbsolutoInicial = 0;
function inicioPrimerClick(argument) {
	resetearMarcador();
	comenzarMetronomo();
	window.onkeydown = function(e){
		if (clickPressed == true) {
			clickButton();
		}else{
			tiempoAbsolutoInicial = audio.currentTime;
			console.log("tiempoAbsolutoInicial : " + tiempoAbsolutoInicial);
			clickPressed = true;//feature10
			init();
		}
	}
	//feature11
	window.onkeyup = function(e){
		clickButton();
	}
}



function init(argument) {
	// console.log("init? l16 " );
	//key down
	// window.onkeydown = function(e){
	window.onkeydown = function(e){
		if (e.keyCode != 13){
			// console.log("keyCode : " + e.keyCode);
			clickButton();
		}else if(e.keyCode == 13){  //enter key
			console.log("e.keyCode : " + e.keyCode);
			inicioPrimerClick();
	  		// console.clear();
			// if (rest == false ) {
	  // 			tiempoFinalNota = audio.currentTime;
	  // 			var interval = (compensation + tiempoFinalNota -tiempoAbsolutoInicial).toFixed(3);//75ms añadidos para compensar lo q se tarda en volver a apretar la tecla
			// 	pushTiempoUsuario(interval*1000);

	  // 			rest = true;
	  // 		}
	  // 		clickPressed = false;
		}
	}
}

function clickButton(argument) {
	// console.log("clicked a la entrada: " + clickPressed);
	if(clickPressed == true){
		// time = this._time;
		// console.log("audio.currentTime : " + audio.currentTime);
	
		tiempoFinalNota = audio.currentTime;
		// console.log("tiempoInicioNota : " +tiempoAbsolutoInicial);
		var interval = (tiempoFinalNota -tiempoAbsolutoInicial).toFixed(3);
		// console.log("interval : " + interval.toFixed(3));
		// console.log("interval  : " + interval*1000 );
		// getNearestTime(interval);
		pushTiempoUsuario(interval*1000);

		//
		// this._time =tiempoAbsolutoInicial;	
		tiempoInicioNota = audio.currentTime;

		// clickPressed = false;
		// console.log("clickPressed : " + clickPressed);  
	}else if (clickPressed == false) {
		comenzarMetronomo();
		// tiempoInicioNota = audio.currentTime; //previo al feature10
		tiempoAbsolutoInicial = audio.currentTime; //al feature10
		console.log("tiempoAbsolutoInicial : " + tiempoAbsolutoInicial);

		comenzarMetronomo();

		clickPressed = true;		
	}
	rest = false;	
}

//vaciar los resultados y eliminar el objeto tiempo
function reinitiate(argument) {
	console.clear();
	contadorUsuario = 0;
	// tiemposUsuario = [];
	clickPressed = false;
	resetearMarcador();
	// rest = true;
	// deletetiempoAbsolutoInicial; deletetiempoAbsolutoInicial;
	// console.log("tiempoInicioNota : " +tiempoAbsolutoInicial);
	// console.log("tiempoFinalNota : " + tiempoFinalNota);
}

//FIX bug7
function clickPressedFalse(argument) {
	// console.clear();
	clickPressed = false;
	inicioPrimerClick();
}

function comenzarMetronomo(argument) {
	audio.play();
}



