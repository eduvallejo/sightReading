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
				var interval = 125 + timestampUp - timestamp;
				// console.log("posX : " + posX);  
				if (interval > 1800 && interval < 2300) {
					console.log("blanca!!!!!! : " + interval);
					drawHalf();
				}else if (interval > 800 && interval < 1200) {
					console.log("NEGRA(4th)!!!!!! : " + interval);
					drawQuarter();
				}else if (interval >= 280 && interval < 700) {
					console.log("corchea" + interval);
					drawEight();
				}else if (interval > 160 && interval < 280) {
					console.log("semicorchea" + interval);
					drawSixteenth();
				}else if (interval > 100 && interval <= 160) {
					// console.log("Fusa(32th)!!!!!! : " + interval);
					console.log("FALLO interval : " + interval);
				}else{
				}
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

