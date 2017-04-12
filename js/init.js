function init(argument) {
	// audio.play();
	//eventos asociados a teclas
	// left arrow 	37
	// up arrow 	38
	// right arrow 	39
	// down arrow 	40 
	//
	// window.onkeydown = function(e) {
	// 	console.log("keyDown");
	// 	// var timestamp = new Date().getTime();
	// 	timestamp = new Date().getTime();
	// 	// console.log("timestamp : " + timestamp);
	//    	//13 enter, 8 backspace, 37left
	//    	var keyPressed = true;
	// }
	// window.onkeyup = function(e){
 //  		var key = e.keyCode ? e.keyCode : e.which;
	// 	console.log("keyup");
	// 	var time = this._time;
	// 	// console.clear();
	// 	if (key != 27 && key != 81) {//not escape(stop) or q(play) 
	// 		timestampUp = new Date().getTime();
	// 		var interval = 75 + timestampUp - timestamp;//75ms añadidos para compensar lo q se tarda en volver a apretar la tecla
	// 		// console.log("posX : " + posX);  
	// 		getNearestTime(interval);
	// 		//
	// 		this._time = timestamp;	
	// 	}else if (key == 27) {//esc
	// 		audio.pause();
	// 		audio.currentTime = 0;
	// 	}else if (key == 81) {
	// 		audio.play();
	// 	}
	// }
	//para clickbutton
	window.onkeyup = function(e){
		// console.log("clickPressed : " + clickPressed);
		// console.log("rest : " + rest);
  		if (rest == false ) {
		// console.log("e.keyCode" + e.keyCode);
  			time = this._time;
  			// console.clear();
  			
  			timestampUp = new Date().getTime();
  			var interval = 100 + timestampUp - timestamp;//75ms añadidos para compensar lo q se tarda en volver a apretar la tecla
  			// console.log("posX : " + posX);  
  			getNearestTime(interval);
  			//
  			this._time = timestamp;	
  			
  			rest = true;
  		}
	}
}
var clickPressed = false;
var rest = true;
function clickButton(argument) {
	// console.log("clicked: " + clickPressed);
	rest = false;
	if (clickPressed == false) {
		timestamp = new Date().getTime();
		clickPressed = true;		
		// console.log("clickPressed : " + clickPressed);  
	}else if(clickPressed == true){
		time = this._time;
	
		timestampUp = new Date().getTime();
		// console.log("timestamp : " + timestamp);
		var interval = timestampUp - timestamp;//75ms añadidos para compensar lo q se tarda en volver a apretar la tecla
		getNearestTime(interval);
		//
		this._time = timestamp;	
		timestamp = new Date().getTime();

		// clickPressed = false;
		// console.log("clickPressed : " + clickPressed);  
	}
	
}



