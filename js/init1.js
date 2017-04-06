function init(argument) {
	canvas = document.getElementById("myCanvas");
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	context = canvas.getContext("2d");
	playSound();
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
			console.clear();
			// console.log("time : " + time);
			if (key == 17) {//"right ctrl" 
				timestampUp = new Date().getTime();
				var interval = 75 + timestampUp - timestamp;
				console.log("interval : " + interval);
				if (interval > 950 && interval < 1050) {
					// console.log("NEGRA(4th)!!!!!! : " + interval);
					drawQuarter();
				}else if (interval > 460 && interval < 540) {
					// console.log("Corchea(8th)!!!!!! : " + interval);
					drawEight();
				}else if (interval > 220 && interval < 280) {
					// console.log("Semi-corchea(16th)!!!!!! : " + interval);
					drawSixteenth();
				}else if (interval > 100 && interval < 150) {
					// console.log("Fusa(32th)!!!!!! : " + interval);
				}
				this._time = timestamp;	
			}else{//"right ctrl" 
				console.log("ELSE");
				timestampUp = new Date().getTime();
				var interval = 75 + timestampUp - timestamp;
				console.log("interval : " + interval);
				if (interval > 950 && interval < 1050) {
					// console.log("NEGRA(4th)!!!!!! : " + interval);
					drawQuarter();
				}else if (interval > 460 && interval < 540) {
					// console.log("Corchea(8th)!!!!!! : " + interval);
					drawEight();
				}else if (interval > 220 && interval < 280) {
					// console.log("Semi-corchea(16th)!!!!!! : " + interval);
					drawSixteenth();
				}else if (interval > 100 && interval < 150) {
					// console.log("Fusa(32th)!!!!!! : " + interval);
				}
				this._time = timestamp;	
			}
		}

	}
}