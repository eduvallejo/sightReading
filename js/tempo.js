// var contadorBpmArray = 0;
function cambiarBpm() {
	// console.log("newTempo : " + newTempo);
	contadorBpmArray++;
	console.log("bpmArray.length : " + bpmArray.length);
	console.log("bpmArray[" + contadorBpmArray + "] : " + bpmArray[contadorBpmArray]);
	// ABCJS.stopAnimation();
	// tuneObjectArray = ABCJS.renderAbc('notation', tunebookString,{}, { scale : scale, add_classes: true , paddingright : screenWidth, paddingleft : screenWidth }, {startingTune: 1,viewportHorizontal : true, scrollHorizontal : false});//scroll horizontal

	// ABCJS.startAnimation(outputElement, tuneObjectArray[0], {showCursor : true, bpm : bpmArray[contadorBpmArray], });
	// ABCJS.pauseAnimation(true);
	// ABCJS.pauseAnimation(false);

	intervalSet = setInterval(autoScroll, compas[0] * (60 / bpmArray[contadorBpmArray]) * 1000 * intervalosPorCompas); //4 por estar debugeando con 4x4 compas  (setinterval es en miliseconds asi q *1000 ) = duracion en ms de un compas


}

function stopSetInterval(argument) {
	// intervalSet = setInterval(autoScroll, compas[0] * (60 / bpmArray[0]) * 1000 * intervalosPorCompas); //4 por estar debugeando con 4x4 compas  (setinterval es en miliseconds asi q *1000 ) = duracion en ms de un compas
	clearTimeout(intervalSet);
	
}

// function myFunction() {
//     myVar = setTimeout(function(){ alert("Hello"); }, 3000);
// }

// function myStopFunction() {
//     clearTimeout(myVar);
// }

function cambiarMargenes(argument) {
	for (var i = 0; i < tiemposCorrectos.length; i++) {
		margenesCorrectosSuperior[i] = margenesCorrectosSuperior[i] * argument;
		// console.log("margenesCorrectosSuperior[" + i + "] : " + margenesCorrectosSuperior[i]);
		margenesCorrectosInferior[i] = margenesCorrectosInferior[i] * argument;
		// console.log("margenesCorrectosInferior[" + i + "] : " + margenesCorrectosInferior[i]);
	}
}

// function cambiarBpm(argument) {
// 	audio.pause();
// 	audio = new Audio('pulseLargo' + argument + '.wav');
// 	// for (var i = 0; i < tiemposCorrectos.length; i++) {
// 	// 	tiemposCorrectos[i] = (tiemposCorrectos[i] * argument)/ bpm; 
// 	// } 
// 	bpm = argument;
// 	msPerBeat = parseFloat(60000 / bpm).toFixed(0);//0 decimales de milisengundos
// 	console.log("songResponse : " + songResponse);
// 	console.log("song : " + song);
// 	ajax(song);
	
// 	console.log("cghangeBpm : " + bpm);	
// 	console.log("audio : " + audio);	
// 	// console.log("tiemposCorrectos: " + tiemposCorrectos);
// 	document.getElementById('tempo').innerHTML = bpm;
// 	console.log("song : " + song);

// 	reinitiate();
// 	init();
// }