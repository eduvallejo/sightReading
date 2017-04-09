function init(argument) {
	audio.play();
	//eventos asociados a teclas
	// left arrow 	37
	// up arrow 	38
	// right arrow 	39
	// down arrow 	40 
	window.onkeydown = function(e) {
		// console.log("keyDown");
		var timestamp = new Date().getTime();
		// console.log("timestamp : " + timestamp);
	   	//13 enter, 8 backspace, 37left
		window.onkeyup = function(e){
	  		var key = e.keyCode ? e.keyCode : e.which;
			// console.log("keyup");
			var time = this._time;
			// console.clear();
			if (key != 27 && key != 81) {//not escape(stop) or q(play) 
				timestampUp = new Date().getTime();
				var interval = 50 + timestampUp - timestamp;
				// console.log("posX : " + posX);  
				getNearestTime(interval);
				//
				this._time = timestamp;	
			}else if (key == 27) {//esc
				audio.pause();
				audio.currentTime = 0;
			}else if (key == 81) {
				audio.play();
			}
		}
	}

}



