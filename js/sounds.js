var volumen = 0.4; //volumen del sinte
// var volumen = 0.2; //volumen del sinte
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
  // "_C,,,": -12 - 24,"C,,,": -11 - 24,"^C,,,": -10 - 24,"_D,,,": -10 - 24,"D,,,": -9 - 24,"^D,,,": -8 - 24,"_E,,,": -8 - 24,"E,,,": -7 - 24,"_F,,,": -7 - 24,"^E,,,": -6 - 24, "F,,," : -6 - 24,"^F,,," : -5 - 24,"_G,,," : -5 - 24,"G,,,": -4 - 24,"^G,,,": -3 - 24,"_A,,,": -3 - 24,"A,,,": -2 - 24,"^A,,,": -1 - 24,"_B,,,": -1 - 24,"B,,,": 0 - 24,
  "_C,,": -12 - 12,"C,,": -11 - 12,"^C,,": -10 - 12,"_D,,": -10 - 12,"D,,": -9 - 12,"^D,,": -8 - 12,"_E,,": -8 - 12,"E,,": -7 - 12,"_F,,": -7 - 12,"^E,,": -6 - 12, "F,," : -6 - 12,"^F,," : -5 - 12,"_G,," : -5 - 12,"G,,": -4 - 12,"^G,,": -3 - 12,"_A,,": -3 - 12,"A,,": -2 - 12,"^A,,": -1 - 12,"_B,,": -1 - 12,"B,,": 0 - 12,
  "_C,": -12, "C,": -11, "^C,": -10, "_D,": -10, "D,": -9, "^D,": -8, "_E,": -8, "E,": -7, "_F,": -7, "^E,": -6,  "F," : -6, "^F," : -5, "_G," : -5, "G,": -4, "^G,": -3, "_A,": -3, "A,": -2, "^A,": -1, "_B,": -1, "B,": 0,
  "_C": -12 + 12, "C": -11 + 12, "^C": -10 + 12, "_D": -10 + 12, "D": -9 + 12, "^D": -8 + 12, "_E": -8 + 12, "E": -7 + 12, "_F": -7 + 12, "^E": -6 + 12,  "F" : -6 + 12, "^F" : -5 + 12, "_G" : -5 + 12, "G": -4 + 12, "^G": -3 + 12, "_A": -3 + 12, "A": -2 + 12, "^A": -1 + 12, "_B": -1 + 12, "B": 0 + 12,
  // "C": 1, "D": 3, "E": 5, "F" : 6, "G": 8, "A": 10, "B": 12, 
  "_c": -12 + 24 ,"c": -11 + 24, "^c": -10 + 24, "_d": -10 + 24, "d": -9 + 24, "^d": -8 + 24, "_e": -8 + 24, "e": -7 + 24, "^e": -6 + 24, "_f": -7 + 24,  "f" : -6 + 24, "^f" : -5 + 24, "_g" : -5 + 24, "g": -4 + 24, "^g": -3 + 24, "_a": -3 + 24, "a": -2 + 24, "^a": -1 + 24, "_b": -1 + 24, "b": 0 + 24,
  // "c": 13, "d": 15, "e": 17, "f": 18, "g": 20, "a": 22, "b": 24, 
  "_c'": -12 + 36 ,"c'": -11 + 36, "^c'": -10 + 36, "_d'": -10 + 36, "d'": -9 + 36, "^d'": -8 + 36, "_e'": -8 + 36, "e'": -7 + 36, "^e'": -6 + 36, "_f'": -7 + 36,  "f'" : -6 + 36, "^f'" : -5 + 36, "_g'" : -5 + 36, "g'": -4 + 36, "^g'": -3 + 36, "_a'": -3 + 36, "a'": -2 + 36, "^a'": -1 + 36, "_b'": -1 + 36, "b'": 0 + 36,
  // "c'": 25, "d'": 27, "e'": 29, "f'": 30, "g'": 32, "a'": 34, "b'": 36, 
  "_c''": -12 + 48 ,"c''": -11 + 48, "^c''": -10 + 48, "_d''": -10 + 48, "d''": -9 + 48, "^d''": -8 + 48, "_e''": -8 + 48, "e''": -7 + 48, "^e''": -6 + 48, "_f''": -7 + 48,  "f''" : -6 + 48, "^f''" : -5 + 48, "_g''" : -5 + 48, "g''": -4 + 48, "^g''": -3 + 48, "_a''": -3 + 48, "a''": -2 + 48, "^a''": -1 + 48, "_b''": -1 + 48, "b''": 0 + 48,
  "z": -100
};

// console.log("indiceNota['A,,'] : deberia ser(-14) : " + indiceNota["A,,"]);
// console.log("indiceNota['C'] : deberia ser(1) : " + indiceNota["C"]);
// console.log("indiceNota['^C'] : deberia ser(2) : " + indiceNota["^C"]);
// console.log("indiceNota[b'] : deberia ser(36) : " + indiceNota["b'"]);
// console.log("indiceNota[f] : deberia ser(18) : " + indiceNota["f"]);

//esta funcion se llama desde el decodeResponse
function getAlteraciones(posicionNota, cantitadAlteracion) {
  // console.log("noteLetter.length : " + noteLetter.length);
  // console.log("posicionNota : " + posicionNota);
    indiceNota = {
        // "_C,,,": -12 - 24,"C,,,": -11 - 24,"^C,,,": -10 - 24,"_D,,,": -10 - 24,"D,,,": -9 - 24,"^D,,,": -8 - 24,"_E,,,": -8 - 24,"E,,,": -7 - 24,"_F,,,": -7 - 24,"^E,,,": -6 - 24, "F,,," : -6 - 24,"^F,,," : -5 - 24,"_G,,," : -5 - 24,"G,,,": -4 - 24,"^G,,,": -3 - 24,"_A,,,": -3 - 24,"A,,,": -2 - 24,"^A,,,": -1 - 24,"_B,,,": -1 - 24,"B,,,": 0 - 24,
      "_C,,": -12 - 12,"C,,": -11 - 12,"^C,,": -10 - 12,"_D,,": -10 - 12,"D,,": -9 - 12,"^D,,": -8 - 12,"_E,,": -8 - 12,"E,,": -7 - 12,"_F,,": -7 - 12,"^E,,": -6 - 12, "F,," : -6 - 12,"^F,," : -5 - 12,"_G,," : -5 - 12,"G,,": -4 - 12,"^G,,": -3 - 12,"_A,,": -3 - 12,"A,,": -2 - 12,"^A,,": -1 - 12,"_B,,": -1 - 12,"B,,": 0 - 12,
      "_C,": -12, "C,": -11, "^C,": -10, "_D,": -10, "D,": -9, "^D,": -8, "_E,": -8, "E,": -7, "_F,": -7, "^E,": -6,  "F," : -6, "^F," : -5, "_G," : -5, "G,": -4, "^G,": -3, "_A,": -3, "A,": -2, "^A,": -1, "_B,": -1, "B,": 0,
        "_C": -12 + 12, "C": -11 + 12, "^C": -10 + 12, "_D": -10 + 12, "D": -9 + 12, "^D": -8 + 12, "_E": -8 + 12, "E": -7 + 12, "_F": -7 + 12, "^E": -6 + 12,  "F" : -6 + 12, "^F" : -5 + 12, "_G" : -5 + 12, "G": -4 + 12, "^G": -3 + 12, "_A": -3 + 12, "A": -2 + 12, "^A": -1 + 12, "_B": -1 + 12, "B": 0 + 12,
        // "C": 1, "D": 3, "E": 5, "F" : 6, "G": 8, "A": 10, "B": 12, 
        "_c": -12 + 24 ,"c": -11 + 24, "^c": -10 + 24, "_d": -10 + 24, "d": -9 + 24, "^d": -8 + 24, "_e": -8 + 24, "e": -7 + 24, "^e": -6 + 24, "_f": -7 + 24,  "f" : -6 + 24, "^f" : -5 + 24, "_g" : -5 + 24, "g": -4 + 24, "^g": -3 + 24, "_a": -3 + 24, "a": -2 + 24, "^a": -1 + 24, "_b": -1 + 24, "b": 0 + 24,
        // "c": 13, "d": 15, "e": 17, "f": 18, "g": 20, "a": 22, "b": 24, 
        "_c'": -12 + 36 ,"c'": -11 + 36, "^c'": -10 + 36, "_d'": -10 + 36, "d'": -9 + 36, "^d'": -8 + 36, "_e'": -8 + 36, "e'": -7 + 36, "^e'": -6 + 36, "_f'": -7 + 36,  "f'" : -6 + 36, "^f'" : -5 + 36, "_g'" : -5 + 36, "g'": -4 + 36, "^g'": -3 + 36, "_a'": -3 + 36, "a'": -2 + 36, "^a'": -1 + 36, "_b'": -1 + 36, "b'": 0 + 36,
        // "c'": 25, "d'": 27, "e'": 29, "f'": 30, "g'": 32, "a'": 34, "b'": 36, 
          "_c''": -12 + 48 ,"c''": -11 + 48, "^c''": -10 + 48, "_d''": -10 + 48, "d''": -9 + 48, "^d''": -8 + 48, "_e''": -8 + 48, "e''": -7 + 48, "^e''": -6 + 48, "_f''": -7 + 48,  "f''" : -6 + 48, "^f''" : -5 + 48, "_g''" : -5 + 48, "g''": -4 + 48, "^g''": -3 + 48, "_a''": -3 + 48, "a''": -2 + 48, "^a''": -1 + 48, "_b''": -1 + 48, "b''": 0 + 48,
        "z": -100
    };
    // console.log("indiceNota[B,,] : " + indiceNota['B,,']);
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
      // indiceNota["B,,,"]--;
      indiceNota["B,,"]--; 
      indiceNota["B,"]--;
      indiceNota["B"]--;
      indiceNota["b"]--;
      indiceNota["b'"]--;
      indiceNota["b''"]--;
      // indiceNota["b'''"]--;
      // console.log("indiceNota['B'] : " + indiceNota['B']);
    // console.log("indiceNota[B,,] : " + indiceNota['B,,']);

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
      indiceNota["A,,"]--;
      indiceNota["A,"]--;
      indiceNota["A"]--;
      indiceNota["a"]--;
      indiceNota["a'"]--;
      indiceNota["a''"]--;

      // console.log("DESPUES---indiceNota['A'] : " + indiceNota['A']);
      break;    
    case "Abmaj":
      // console.log("ANTES---indiceNota['A'] : " + indiceNota['A']);
      indiceNota["B,,"]--;
      indiceNota["B,"]--;
      indiceNota["B"]--;
      indiceNota["b"]--;
      indiceNota["b'"]--;
      indiceNota["b''"]--;
      indiceNota["E,,"]--;
      indiceNota["E,"]--;
      indiceNota["E"]--;
      indiceNota["e"]--;
      indiceNota["e'"]--;
      indiceNota["e''"]--;
      indiceNota["A,,"]--;
      indiceNota["A,"]--;
      indiceNota["A"]--;
      indiceNota["a"]--;
      indiceNota["a'"]--;
      indiceNota["a''"]--;
      indiceNota["D,,"]--;
      indiceNota["D,"]--;
      indiceNota["D"]--;
      indiceNota["d"]--;
      indiceNota["d'"]--;
      indiceNota["d''"]--;

      // console.log("DESPUES---indiceNota['A'] : " + indiceNota['A']);
      break;  
    case "Cbmaj":
      // console.log("ANTES---indiceNota['A'] : " + indiceNota['A']);
      indiceNota["B,,"]--;
      indiceNota["B,"]--;
      indiceNota["B"]--;
      indiceNota["b"]--;
      indiceNota["b'"]--;
      indiceNota["b''"]--;
      indiceNota["E,,"]--;
      indiceNota["E,"]--;
      indiceNota["E"]--;
      indiceNota["e"]--;
      indiceNota["e'"]--;
      indiceNota["e''"]--;
      indiceNota["A,,"]--;
      indiceNota["A,"]--;
      indiceNota["A"]--;
      indiceNota["a"]--;
      indiceNota["a'"]--;
      indiceNota["a''"]--;
      indiceNota["D,,"]--;
      indiceNota["D,"]--;
      indiceNota["D"]--;
      indiceNota["d"]--;
      indiceNota["d'"]--;
      indiceNota["d''"]--;
      indiceNota["G,,"]--;
      indiceNota["G,"]--;
      indiceNota["G"]--;
      indiceNota["g"]--;
      indiceNota["g'"]--;
      indiceNota["g''"]--;
      indiceNota["C,,"]--;
      indiceNota["C,"]--;
      indiceNota["C"]--;
      indiceNota["c"]--;
      indiceNota["c'"]--;
      indiceNota["c''"]--;
      indiceNota["F,,"]--;
      indiceNota["F,"]--;
      indiceNota["F"]--;
      indiceNota["f"]--;
      indiceNota["f'"]--;
      indiceNota["f''"]--;

      // console.log("DESPUES---indiceNota['A'] : " + indiceNota['A']);
      break;      
    break;
    // default:      
  } 

  frecuenciaNota[posicionNota - 1] = parseInt(obtenerFrecuenciaNota((indiceNota[noteLetter[posicionNota - 1]] + cantitadAlteracion), 4));
  // console.log("frecuenciaNota[" + (posicionNota - 1) + "] : " + frecuenciaNota[posicionNota - 1]);
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

var  bemolesTonalidades = { //hay q añadir las notas bajas  y altas (ej: C,, c'')
  "Fmaj": {
        "B" :true,"b" :true, "E" :false, "e" :false, "A" :false, "a" :false, "D" :false, "d" :false, "G" :false, "g" :false, "C" :false, "c" :false, "F" :false, "f" :false
  },
  "Bbmaj": {
        "B" :true,"b" :true, "E" :true, "e" :true, "A" :false, "a" :false, "D" :false, "d" :false, "G" :false, "g" :false, "C" :false, "c" :false, "F" :false, "f" :false
  },
  "Ebmaj": {
        "B,," :true, "B," :true, "B" :true, "b" :true, "b'" :true,"b''" :true, "E,," :true, "E," :true, "E" :true, "e" :true, "e'" :true,"e''" :true,"A,," :true ,"A," :true ,"A" :true , "a" :true , "a'" :true , "a''" :true ,  "D,," :false, "D," :false, "D" :false, "d" :false, "d'" :false, "d''" :false, "G,," :false, "G," :false,"G" :false, "g" :false, "g'" :false, "g''" :false, "C,," :false, "C," :false, "C" :false, "c" :false, "c'" :false, "c''" :false, "F,," :false, "F," :false, "F" :false, "f" :false, "f'" :false, "f''" :false
  },
  "Abmaj": {
        "B,," :true, "B," :true, "B" :true, "b" :true, "b'" :true,"b''" :true, "E,," :true, "E," :true, "E" :true, "e" :true, "e'" :true,"e''" :true,"A,," :true ,"A," :true ,"A" :true , "a" :true , "a'" :true , "a''" :true ,  "D,," :true, "D," :true, "D" :true, "d" :true, "d'" :true, "d''" :true, "G,," :false, "G," :false,"G" :false, "g" :false, "g'" :false, "g''" :false, "C,," :false, "C," :false, "C" :false, "c" :false, "c'" :false, "c''" :false, "F,," :false, "F," :false, "F" :false, "f" :false, "f'" :false, "f''" :false
  },
  "Dbmaj": {
        "B" :true,"b" :true, "E" :true, "e" :true, "A" :true, "a" :true, "D" :true, "d" :true, "G" :true, "g" :true, "C" :false, "c" :false, "F" :false, "f" :false
  },
   "Gbmaj": {
        "B" :true,"b" :true, "E" :true, "e" :true, "A" :true, "a" :true, "D" :true, "d" :true, "G" :true, "g" :true, "C" :true, "c" :true, "F" :false, "f" :false
  },
   "Cbmaj": {
        "B" :true,"b" :true, "E" :true, "e" :true, "A" :true, "a" :true, "D" :true, "d" :true, "G" :true, "g" :true, "C" :true, "c" :true, "F" :true, "f" :true
  },
  "Cmaj" : {}, "Gmaj" : {}, "Dmaj" : {}, "Amaj" : {}, "Emaj" : {},  "B" : {}, "F#maj" : {}, "C#maj" : {},
};

// key = "Abmaj";
// console.log("bemolesTonalidades[" + key + "]['A'] : " + bemolesTonalidades[key]["A"]);
// var  bemolesTonalidades = {"Abmaj": {"B" : true, "b" : true, "E" : true, "e" : true, "A" : true, "a" : true, "D" : true, "d" : true}};
// console.log("bemolesTonalidades : " + bemolesTonalidades.length);
// for (x in bemolesTonalidades) {
//     console.log("bemolesTonalidades[y] : " + bemolesTonalidades[x][0]);
// } 
// console.log(JSON.stringify(bemolesTonalidades))