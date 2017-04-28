function doblarTempo(argument) {
	console.log("doblarTempo");
	if (velocidadDoblada == false) {	
		for (var i = 0; i < tiemposCorrectos.length; i++) {
			tiemposCorrectos[i] = tiemposCorrectos[i] / 2; 
			// tiemposCorrectosAbsolutos[i] = tiemposCorrectosAbsolutos[i] / 2; 
		}
		velocidadDoblada = true;
		cambiarMargenes(0.5);
		defaultColor = document.getElementById('tempoDoble').style.backgroundColor;
		console.log("defaultColor: " + defaultColor);
		document.getElementById('tempoDoble').style.backgroundColor = 'green';
		document.getElementById('tempo').innerHTML = bpm * 2;

	}else if(velocidadDoblada == true){
		for (var i = 0; i < tiemposCorrectos.length; i++) {
			tiemposCorrectos[i] = tiemposCorrectos[i] * 2; 
			// tiemposCorrectosAbsolutos[i] = tiemposCorrectosAbsolutos[i] * 2; 
		}
		velocidadDoblada = false;
		cambiarMargenes(2);
		document.getElementById('tempoDoble').style.backgroundColor = defaultColor;
		document.getElementById('tempo').innerHTML = bpm ;
	}
	console.log("tiemposCorrectos : " + tiemposCorrectos);
	reinitiate();
}

function cambiarMargenes(argument) {
	for (var i = 0; i < tiemposCorrectos.length; i++) {
		margenesCorrectosSuperior[i] = margenesCorrectosSuperior[i] * argument;
		// console.log("margenesCorrectosSuperior[" + i + "] : " + margenesCorrectosSuperior[i]);
		margenesCorrectosInferior[i] = margenesCorrectosInferior[i] * argument;
		// console.log("margenesCorrectosInferior[" + i + "] : " + margenesCorrectosInferior[i]);
	}
}

function cambiarBpm(argument) {
	audio.pause();
	audio = new Audio('pulseLargo' + argument + '.wav');
	bpm = argument;
	msPerBeat = parseFloat(60000 / bpm).toFixed(0);//0 decimales de milisengundos

	decodeAjaxResponse(song);
	
	console.log("cghangeBpm : " + bpm);	
	console.log("audio : " + audio);	

	reinitiate();
	init();
}