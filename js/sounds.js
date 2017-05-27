var volumen = 0.2;
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
var indiceNota = {
  "C,": -11, "D,": -9, "E,": -7, "F," : -6, "G,": -4, "A,": -2, "B,": 0,
  "C": 1, "D": 3, "E": 5, "F" : 6, "G": 8, "A": 10, "B": 12, 
  "c": 13, "d": 15, "e": 17, "f": 18, "g": 20, "a": 22, "b": 24, 
	"c'": 25, "d'": 27, "e'": 29, "f'": 30, "g'": 32, "a'": 34, "b'": 36, 
	"z": 100
};

console.log("frecuenciaNota(-6, 4) : " + frecuenciaNota(-6, 4));

function getAlteraciones() {
  console.log("Alteracioneskey:" + key);
  switch(key) {
    case "Gmaj":
      indiceNota["F"]++;
      indiceNota["f"]++;
      indiceNota["F,"]++;
      indiceNota["f'"]++;
      break;
    case "Dmaj":
      indiceNota["F"]++;
      indiceNota["f"]++;
      indiceNota["F,"]++;
      indiceNota["f'"]++;
      indiceNota["C"]++;
      indiceNota["c"]++;
      indiceNota["C,"]++;
      indiceNota["c'"]++;
      console.log("indiceNota[C] : " + indiceNota["C"]);
      break;
    case "Amaj":
      indiceNota["F"]++;
      indiceNota["f"]++;
      indiceNota["F,"]++;
      indiceNota["f'"]++;
      indiceNota["C"]++;
      indiceNota["c"]++;
      indiceNota["C,"]++;
      indiceNota["c'"]++;
      indiceNota["G"]++;
      indiceNota["G,"]++;
      indiceNota["g"]++;
      indiceNota["g'"]++;
      console.log("indiceNota[C] : " + indiceNota["C"]);
      break;
    case "Emaj":
      indiceNota["F"]++;
      indiceNota["f"]++;
      indiceNota["F,"]++;
      indiceNota["f'"]++;
      indiceNota["C"]++;
      indiceNota["C,"]++;
      indiceNota["c"]++;
      indiceNota["c'"]++;
      indiceNota["G"]++;
      indiceNota["G,"]++;
      indiceNota["g"]++;
      indiceNota["g'"]++;
      indiceNota["D"]++;
      indiceNota["D,"]++;
      indiceNota["d"]++;
      indiceNota["d'"]++;
      console.log("indiceNota[D] : " + indiceNota["D"]);
      break;
    case "Fmaj":
      console.log("indiceNota['B'] : " + indiceNota['B']);
      indiceNota["B,"]--;
      indiceNota["B"]--;
      indiceNota["b"]--;
      indiceNota["b'"]--;
      console.log("indiceNota['B'] : " + indiceNota['B']);
      break;    
    break;
    // default:
          
  } 
}