var volumen = 0.2;
function playSound(argument) {
	audio.play();
	// console.log("play any??");
	// console.log("audio: " + audio);
	// setInterval(playSound(), 1000);
}

function obtenerFrecuenciaNota(nota, octava) {
  return 440.0*Math.exp(
    (
      (octava-4)+
      (nota-10)/12.0
    )
    *Math.log(2.0)
  );
}


// // var indiceNota = {"C": 1, Do#=2, Re=3, Re#=4, Mi=5, Fa=6, Fa#=7, Sol=8, Sol#=9, La=10, La#=11, Si=12.}
// var indiceNota = {
//   "C,": -11, "D,": -9, "E,": -7, "F," : -6, "G,": -4, "A,": -2, "B,": 0,
//   "C": 1, "D": 3, "E": 5, "F" : 6, "G": 8, "A": 10, "B": 12, 
//   "c": 13, "d": 15, "e": 17, "f": 18, "g": 20, "a": 22, "b": 24, 
// 	"c'": 25, "d'": 27, "e'": 29, "f'": 30, "g'": 32, "a'": 34, "b'": 36, 
// 	"z": -100
// };

// var indiceNota = {"C": 1, Do#=2, Re=3, Re#=4, Mi=5, Fa=6, Fa#=7, Sol=8, Sol#=9, La=10, La#=11, Si=12.}
var indiceNota = {
  "_C,": -12, "C,": -11, "^C,": -10, "_D,": -10, "D,": -9, "^D,": -8, "_E,": -8, "E,": -7, "_F,": -7, "^E,": -6,  "F," : -6, "^F," : -5, "_G," : -5, "G,": -4, "^G,": -3, "_A,": -3, "A,": -2, "^A,": -1, "_B,": -1, "B,": 0,
  "_C": -12 + 12, "C": -11 + 12, "^C": -10 + 12, "_D": -10 + 12, "D": -9 + 12, "^D": -8 + 12, "_E": -8 + 12, "E": -7 + 12, "_F": -7 + 12, "^E": -6 + 12,  "F" : -6 + 12, "^F" : -5 + 12, "_G" : -5 + 12, "G": -4 + 12, "^G": -3 + 12, "_A": -3 + 12, "A": -2 + 12, "^A": -1 + 12, "_B": -1 + 12, "B": 0 + 12,
  // "C": 1, "D": 3, "E": 5, "F" : 6, "G": 8, "A": 10, "B": 12, 
  "_c": -12 + 24 ,"c": -11 + 24, "^c": -10 + 24, "_d": -10 + 24, "d": -9 + 24, "^d": -8 + 24, "_e": -8 + 24, "e": -7 + 24, "^e": -6 + 24, "_f": -7 + 24,  "f" : -6 + 24, "^f" : -5 + 24, "_g" : -5 + 24, "g": -4 + 24, "^g": -3 + 24, "_a": -3 + 24, "a": -2 + 24, "^a": -1 + 24, "_b": -1 + 24, "b": 0 + 24,
  // "c": 13, "d": 15, "e": 17, "f": 18, "g": 20, "a": 22, "b": 24, 
  "_c'": -12 + 36 ,"c'": -11 + 36, "^c'": -10 + 36, "_d'": -10 + 36, "d'": -9 + 36, "^d'": -8 + 36, "_e'": -8 + 36, "e'": -7 + 36, "^e'": -6 + 36, "_f'": -7 + 36,  "f'" : -6 + 36, "^f'" : -5 + 36, "_g'" : -5 + 36, "g'": -4 + 36, "^g'": -3 + 36, "_a'": -3 + 36, "a'": -2 + 36, "^a'": -1 + 36, "_b'": -1 + 36, "b'": 0 + 36,
  // "c'": 25, "d'": 27, "e'": 29, "f'": 30, "g'": 32, "a'": 34, "b'": 36, 
  "z": -100
};

// console.log("indiceNota['C'] : deberia ser(1) : " + indiceNota["C"]);
// console.log("indiceNota['^C'] : deberia ser(2) : " + indiceNota["^C"]);
// console.log("indiceNota[b'] : deberia ser(36) : " + indiceNota["b'"]);
// console.log("indiceNota[f] : deberia ser(18) : " + indiceNota["f"]);

function getAlteraciones(posicionNota, cantitadAlteracion) {
  // console.log("noteLetter.length : " + noteLetter.length);
  // console.log("posicionNota : " + posicionNota);
    indiceNota = {
      "_C,": -12, "C,": -11, "^C,": -10, "_D,": -10, "D,": -9, "^D,": -8, "_E,": -8, "E,": -7, "_F,": -7, "^E,": -6,  "F," : -6, "^F," : -5, "_G," : -5, "G,": -4, "^G,": -3, "_A,": -3, "A,": -2, "^A,": -1, "_B,": -1, "B,": 0,
        "_C": -12 + 12, "C": -11 + 12, "^C": -10 + 12, "_D": -10 + 12, "D": -9 + 12, "^D": -8 + 12, "_E": -8 + 12, "E": -7 + 12, "_F": -7 + 12, "^E": -6 + 12,  "F" : -6 + 12, "^F" : -5 + 12, "_G" : -5 + 12, "G": -4 + 12, "^G": -3 + 12, "_A": -3 + 12, "A": -2 + 12, "^A": -1 + 12, "_B": -1 + 12, "B": 0 + 12,
        // "C": 1, "D": 3, "E": 5, "F" : 6, "G": 8, "A": 10, "B": 12, 
        "_c": -12 + 24 ,"c": -11 + 24, "^c": -10 + 24, "_d": -10 + 24, "d": -9 + 24, "^d": -8 + 24, "_e": -8 + 24, "e": -7 + 24, "^e": -6 + 24, "_f": -7 + 24,  "f" : -6 + 24, "^f" : -5 + 24, "_g" : -5 + 24, "g": -4 + 24, "^g": -3 + 24, "_a": -3 + 24, "a": -2 + 24, "^a": -1 + 24, "_b": -1 + 24, "b": 0 + 24,
        // "c": 13, "d": 15, "e": 17, "f": 18, "g": 20, "a": 22, "b": 24, 
        "_c'": -12 + 36 ,"c'": -11 + 36, "^c'": -10 + 36, "_d'": -10 + 36, "d'": -9 + 36, "^d'": -8 + 36, "_e'": -8 + 36, "e'": -7 + 36, "^e'": -6 + 36, "_f'": -7 + 36,  "f'" : -6 + 36, "^f'" : -5 + 36, "_g'" : -5 + 36, "g'": -4 + 36, "^g'": -3 + 36, "_a'": -3 + 36, "a'": -2 + 36, "^a'": -1 + 36, "_b'": -1 + 36, "b'": 0 + 36,
        // "c'": 25, "d'": 27, "e'": 29, "f'": 30, "g'": 32, "a'": 34, "b'": 36, 
        "z": -100
    };
  // console.log("Alteracioneskey:" + key);
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
      // console.log("indiceNota[C] : " + indiceNota["C"]);
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
      // console.log("indiceNota[C] : " + indiceNota["C"]);
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
      // console.log("indiceNota[C] : " + indiceNota["C"]);
      break;
    case "Fmaj":
      // console.log("indiceNota['B'] : " + indiceNota['B']);
      indiceNota["B,"]--;
      indiceNota["B"]--;
      indiceNota["b"]--;
      indiceNota["b'"]--;
      // console.log("indiceNota['B'] : " + indiceNota['B']);
      break;
    case "Ebmaj":
      // console.log("ANTES---indiceNota['A'] : " + indiceNota['A']);
      indiceNota["B,"]--;
      indiceNota["B"]--;
      indiceNota["b"]--;
      indiceNota["b'"]--;
      indiceNota["E,"]--;
      indiceNota["E"]--;
      indiceNota["e"]--;
      indiceNota["e'"]--;
      indiceNota["A,"]--;
      indiceNota["A"]--;
      indiceNota["a"]--;
      indiceNota["a'"]--;

      // console.log("DESPUES---indiceNota['A'] : " + indiceNota['A']);
      break;    
    break;
    // default:      
  } 

  frecuenciaNota[posicionNota - 1] = obtenerFrecuenciaNota((indiceNota[noteLetter[posicionNota - 1]] + cantitadAlteracion), 4);
    console.log("frecuenciaNota[" + (posicionNota - 1) + "] : " + frecuenciaNota[posicionNota - 1]);

//la diferencia de un semitono es 16.4821369405355
}

function resetearAlteracionesAccidentales(argument) {
  sostenidoAccidental = { "C,": false, "D,": false, "E,": false, "F," : false, "G,": false, "A,": false, "B,": 0,
        "C":false, "D":false, "E":false, "F" :false, "G":false, "A":false, "B":false, 
        "c":false, "d":false, "e":false, "f":false, "g":false, "a":false, "b":false, 
        "c'":false, "d'":false, "e'":false, "f'":false, "g'":false, "a'":false, "b'":false
  };
  bemolAccidental = { "C,": false, "D,": false, "E,": false, "F," : false, "G,": false, "A,": false, "B,": 0,
        "C":false, "D":false, "E":false, "F" :false, "G":false, "A":false, "B":false, 
        "c":false, "d":false, "e":false, "f":false, "g":false, "a":false, "b":false, 
        "c'":false, "d'":false, "e'":false, "f'":false, "g'":false, "a'":false, "b'":false 
  };
  becuadroAccidental = { "C,": false, "D,": false, "E,": false, "F," : false, "G,": false, "A,": false, "B,": 0,
        "C":false, "D":false, "E":false, "F" :false, "G":false, "A":false, "B":false, 
        "c":false, "d":false, "e":false, "f":false, "g":false, "a":false, "b":false, 
        "c'":false, "d'":false, "e'":false, "f'":false, "g'":false, "a'":false, "b'":false
  };
}


// var notasMusicales = [];
for (var i = 0; i < 13; i++) {
  for (var j = 3; j < 7; j++) {
    // console.log("obtenerFrecuenciaNota(" + i + ", " + j + "] : " + obtenerFrecuenciaNota(i, j));
  }
}

// function convertirLetraEnDigito(argument) {
//   switch(argument) {
//       case "C,":
//           return 
//           break;
//       case :
          
//           break;
//       default:
          
//   } 
// }

var frecuenciasOctavaNota = [ //las octavas 0,1 y 2 no se usan de momento
  [0], //octava0
  [0], //octava1
  [0], //octava2
  //C,               ^C,                 D,
  [123.470825314031, 130.81278265029934, 138.59131548843607, 146.8323839587038,155.56349186104046,164.81377845643496,174.61411571650194,184.99721135581723,195.99771799087463,207.65234878997256,220.0,233.08188075904496],
  [246.94165062806206,261.6255653005986,277.1826309768721,293.6647679174076,311.12698372208087,329.6275569128699,349.2282314330039,369.99442271163446,391.99543598174927,415.3046975799451,440.0,466.1637615180899],
  [493.8833012561241,523.2511306011972,554.3652619537442,587.3295358348151,622.2539674441617,659.2551138257398,698.4564628660078,739.9888454232688,783.9908719634985,830.6093951598903,880.0,932.3275230361796],
  [987.766602512248,1046.5022612023945,1108.7305239074883,1174.65907166963,1244.5079348883235,1318.5102276514795,1396.9129257320155,1479.9776908465376,1567.9817439269968,1661.2187903197805,1760.0,1864.6550460723597]
];
console.log("frecuenciasOctavaNota.length : " + frecuenciasOctavaNota.length);
// for (var i = 0; i < frecuenciasOctavaNota.length; i++) {
//   for (var j = 0; j < frecuenciasOctavaNota[i].length; j++) {
//     console.log("frecuenciasOctavaNota[" + i + "][" + j + "] : " + frecuenciasOctavaNota[i][j]);
//   }
// }