function doblarTempo(argument) {
	console.log("doblarTempo");
	if (doblarVelocidad == false) {	
		for (var i = 0; i < tiemposCorrectos.length; i++) {
			tiemposCorrectos[i] = tiemposCorrectos[i] / 2; 
			// tiemposCorrectosAbsolutos[i] = tiemposCorrectosAbsolutos[i] / 2; 
		}
		doblarVelocidad = true;
		cambiarMargenes(0.5);
		defaultColor = document.getElementById('doblarTempo').style.backgroundColor;
		console.log("defaultColor : " + defaultColor);
		document.getElementById('doblarTempo').style.backgroundColor = 'green';
		document.getElementById('tempo').innerHTML = bpm * 2;

	}else if(doblarVelocidad == true){
		for (var i = 0; i < tiemposCorrectos.length; i++) {
			tiemposCorrectos[i] = tiemposCorrectos[i] * 2; 
			// tiemposCorrectosAbsolutos[i] = tiemposCorrectosAbsolutos[i] * 2; 
		}
		doblarVelocidad = false;
		cambiarMargenes(2);
		document.getElementById('doblarTempo').style.backgroundColor = defaultColor;
		document.getElementById('tempo').innerHTML = bpm ;
	}
	console.log("tiemposCorrectos : " + tiemposCorrectos);
	// console.log("tiemposCorrectosAbsolutos : " + tiemposCorrectosAbsolutos);
	// clickPressedFalse();//reinicar despues de cambiar valores
	reinitiate();
}

function cambiarMargenes(argument) {
	for (var i = 0; i < tiemposCorrectos.length; i++) {
		margenesCorrectosSuperior[i] = margenesCorrectosSuperior[i] * argument;
		console.log("margenesCorrectosSuperior[" + i + "] : " + margenesCorrectosSuperior[i]);
		margenesCorrectosInferior[i] = margenesCorrectosInferior[i] * argument;
		console.log("margenesCorrectosInferior[" + i + "] : " + margenesCorrectosInferior[i]);
	}
}