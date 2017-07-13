var time1 = audioSong.currentTime;
var time2 = 0; //hack
console.log("time1 : " + time1);
var mic;
function setup(argument) {
	console.log("SETUP");
	// time1 = audioSong.currentTime;
	// console.log("SKETCH time1 : " + this.currentTime);
	mic = new p5.AudioIn();	
	console.log("mic : " + mic);
	mic.start();
console.clear();
}
// console.log("SKETCH!!");

function draw(argument) {
	// console.log("DRAW");
	var vol = mic.getLevel();
	if (vol > 0.008 && time2 > 0.00001) {
		time2 = audioSong.currentTime;
		// console.log("time2 : " + time2);
		// clickButton();
		if ((time2 - time1) > 0.07) {
			console.log("vol : " + vol);
			// console.log("time2 -time1 : " + (time2 -time1));
			clickButton();			
		}
		time1 = audioSong.currentTime;
		// console.log("time1 : " + time1);
	}else if(vol > 0.008 && time2 < 0.00001){
		clickButton();
		time1 = audioSong.currentTime;
		time2 = audioSong.currentTime;
		console.log("time1 : " + time1);
		console.log("time2 : " + time2);
	}
	// console.log("vol	 : " + vol	);
	// console.log("time2 : " + time2);
}
setup();
draw();