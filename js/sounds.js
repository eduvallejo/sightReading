var volumen = 0.1;
function playSound(argument) {
	audio.play();
	// console.log("play any??");
	// console.log("audio: " + audio);
	// setInterval(playSound(), 1000);
}

function frecuenciaNota(nota, octava) {
  return 440.0*Math.exp(
    (
      (octava-4)+
      (nota-10)/12.0
    )
    *Math.log(2.0)
  );
}

// var indiceNota = {"C": 1, Do#=2, Re=3, Re#=4, Mi=5, Fa=6, Fa#=7, Sol=8, Sol#=9, La=10, La#=11, Si=12.}
var indiceNota = {"C": 1, "D": 3, "E": 5, "F" : 6, "G": 8, "A": 10, "B": 12, 
					"c" : 13, "d": 15, "e": 17, "f": 18, "g": 20, "a": 22, "b": 24, 
						"z": 150}