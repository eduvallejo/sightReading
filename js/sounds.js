var volumen = 0.4; //volumen del sinte
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
  "_C,,": -12 - 12,"C,,": -11 - 12,"^C,,": -10 - 12,"_D,,": -10 - 12,"D,,": -9 - 12,"^D,,": -8 - 12,"_E,,": -8 - 12,"E,,": -7 - 12,"_F,,": -7 - 12,"^E,,": -6 - 12, "F,," : -6 - 12,"^F,," : -5 - 12,"_G,," : -5 - 12,"G,,": -4 - 12,"^G,,": -3 - 12,"_A,,": -3 - 12,"A,,": -2 - 12,"^A,,": -1 - 12,"_B,,": -1 - 12,"B,,": -12,
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
      "_C,,": -12 - 12,"C,,": -11 - 12,"^C,,": -10 - 12,"_D,,": -10 - 12,"D,,": -9 - 12,"^D,,": -8 - 12,"_E,,": -8 - 12,"E,,": -7 - 12,"_F,,": -7 - 12,"^E,,": -6 - 12, "F,," : -6 - 12,"^F,," : -5 - 12,"_G,," : -5 - 12,"G,,": -4 - 12,"^G,,": -3 - 12,"_A,,": -3 - 12,"A,,": -2 - 12,"^A,,": -1 - 12,"_B,,": -1 - 12,"B,,": -12,
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

  frecuenciaNota[posicionNota - 1] = obtenerFrecuenciaNota((indiceNota[noteLetter[posicionNota - 1]] + cantitadAlteracion), 4);
  // console.log("frecuenciaNota[" + (posicionNota - 1) + "] : " + frecuenciaNota[posicionNota - 1]);
}

//altreraciones pruebas para cuando tenga guardadas las frecuencias de las canciones
// function getAlteraciones(argument) {
//   console.log("alteracionesnuevas?");
//   switch(song) {
//     case "escalaCromaticaSostenidos.abc":
//           frecuenciaNota[0] = 65.40639132514966;frecuenciaNota[1] = 69.29565774421803;frecuenciaNota[2] = 73.41619197935188;frecuenciaNota[3] = 77.78174593052022;frecuenciaNota[4] = 82.4068892282175;frecuenciaNota[5] = 87.30705785825097;frecuenciaNota[6] = 92.49860567790861;frecuenciaNota[7] = 97.99885899543735;frecuenciaNota[8] = 103.82617439498628;frecuenciaNota[9] = 110  ;frecuenciaNota[10] = 116.54094037952248;frecuenciaNota[11] = 123.47082531403103;frecuenciaNota[12] = 130.81278265029934;frecuenciaNota[13] = 138.59131548843604;frecuenciaNota[14] = 146.83238395870382;frecuenciaNota[15] = 155.56349186104046;frecuenciaNota[16] = 164.81377845643496;frecuenciaNota[17] = 174.61411571650194;frecuenciaNota[18] = 184.99721135581723;frecuenciaNota[19] = 195.99771799087463;frecuenciaNota[20] = 207.65234878997256;frecuenciaNota[21] = 220  ;frecuenciaNota[22] = 233.08188075904496;frecuenciaNota[23] = 246.94165062806206;frecuenciaNota[24] = 261.6255653005986;frecuenciaNota[25] = 277.1826309768721;frecuenciaNota[26] = 293.6647679174076;frecuenciaNota[27] = 311.12698372208087;frecuenciaNota[28] = 329.6275569128699;frecuenciaNota[29] = 349.2282314330039;frecuenciaNota[30] = 369.99442271163446;frecuenciaNota[31] = 391.99543598174927;frecuenciaNota[32] = 415.3046975799451;frecuenciaNota[33] = 440  ;frecuenciaNota[34] = 466.1637615180899;frecuenciaNota[35] = 493.8833012561241;frecuenciaNota[36] = 523.2511306011972;frecuenciaNota[37] = 554.3652619537442;frecuenciaNota[38] = 587.3295358348151;frecuenciaNota[39] = 622.2539674441617;frecuenciaNota[40] = 659.2551138257398;frecuenciaNota[41] = 698.4564628660078;frecuenciaNota[42] = 739.9888454232688;frecuenciaNota[43] = 783.9908719634985;frecuenciaNota[44] = 830.6093951598903;frecuenciaNota[45] = 880  ;frecuenciaNota[46] = 932.3275230361796;frecuenciaNota[47] = 987.7666025122483;frecuenciaNota[48] = 1046.5022612023945;frecuenciaNota[49] = 1108.7305239074883;frecuenciaNota[50] = 1174.6590716696303;frecuenciaNota[51] = 1244.5079348883235;frecuenciaNota[52] = 1318.5102276514795;frecuenciaNota[53] = 1396.9129257320155;frecuenciaNota[54] = 1479.9776908465376;frecuenciaNota[55] = 1567.9817439269968;frecuenciaNota[56] = 1661.2187903197805;frecuenciaNota[57] = 1760  ;frecuenciaNota[58] = 1864.6550460723597;frecuenciaNota[59] = 1975.533205024496;frecuenciaNota[60] = 2093.004522404789;frecuenciaNota[61] = 2217.461047814977;frecuenciaNota[62] = 2349.31814333926;frecuenciaNota[63] = 2489.015869776647;frecuenciaNota[64] = 2637.02045530296;frecuenciaNota[65] = 2793.825851464031;frecuenciaNota[66] = 2959.9553816930757;frecuenciaNota[67] = 3135.963487853994;frecuenciaNota[68] = 3322.43758063956;frecuenciaNota[69] = 3519.999999999999;frecuenciaNota[70] = 3729.3100921447194;frecuenciaNota[71] = 3951.0664100489917;
//         break;
//     case "escala5octavas.abc":
//       console.log("5octavas");
//       frecuenciaNota[0] = 65.40639132514966;frecuenciaNota[1] = 69.29565774421803;
//       break;
//     case "bach_BWV1056_II.abc":
//       // console.log("switch: bach_BWV1056_II.abc");
//       frecuenciaNota[0] = 523.2511306011972;frecuenciaNota[1] = 523.2511306011972;frecuenciaNota[2] = 554.3652619537442;frecuenciaNota[3] = 622.2539674441617;frecuenciaNota[4] = 698.4564628660078;frecuenciaNota[5] = 523.2511306011972;frecuenciaNota[6] = 466.1637615180899;frecuenciaNota[7] = 466.1637615180899;frecuenciaNota[8] = 523.2511306011972;frecuenciaNota[9] = 554.3652619537442;frecuenciaNota[10] = 622.2539674441617;frecuenciaNota[11] = 415.3046975799451;frecuenciaNota[12] = 830.6093951598903;frecuenciaNota[13] = 698.4564628660078;frecuenciaNota[14] = 554.3652619537442;frecuenciaNota[15] = 554.3652619537442;frecuenciaNota[16] = 622.2539674441617;frecuenciaNota[17] = 554.3652619537442;frecuenciaNota[18] = 523.2511306011972;frecuenciaNota[19] = 554.3652619537442;frecuenciaNota[20] = 932.3275230361796;frecuenciaNota[21] = 783.9908719634985;frecuenciaNota[22] = 622.2539674441617;frecuenciaNota[23] = 554.3652619537442;frecuenciaNota[24] = 523.2511306011972;frecuenciaNota[25] = 554.3652619537442;frecuenciaNota[26] = 554.3652619537442;frecuenciaNota[27] = 523.2511306011972;frecuenciaNota[28] = 466.1637615180899;frecuenciaNota[29] = 415.3046975799451;frecuenciaNota[30] = 415.3046975799451;frecuenciaNota[31] = 830.6093951598903;frecuenciaNota[32] = 830.6093951598903;frecuenciaNota[33] = 783.9908719634985;frecuenciaNota[34] = 698.4564628660078;frecuenciaNota[35] = 783.9908719634985;frecuenciaNota[36] = 830.6093951598903;frecuenciaNota[37] = 466.1637615180899;frecuenciaNota[38] = 466.1637615180899;frecuenciaNota[39] = 587.3295358348151;frecuenciaNota[40] = 698.4564628660078;frecuenciaNota[41] = 830.6093951598903;frecuenciaNota[42] = 783.9908719634985;frecuenciaNota[43] = 783.9908719634985;frecuenciaNota[44] = 698.4564628660078;frecuenciaNota[45] = 622.2539674441617;frecuenciaNota[46] = 587.3295358348151;frecuenciaNota[47] = 523.2511306011972;frecuenciaNota[48] = 466.1637615180899;frecuenciaNota[49] = 415.3046975799451;frecuenciaNota[50] = 415.3046975799451;frecuenciaNota[51] = 466.1637615180899;frecuenciaNota[52] = 415.3046975799451;frecuenciaNota[53] = 391.99543598174927;frecuenciaNota[54] = 415.3046975799451;frecuenciaNota[55] = 523.2511306011972;frecuenciaNota[56] = 622.2539674441617;frecuenciaNota[57] = 783.9908719634985;frecuenciaNota[58] = 698.4564628660078;frecuenciaNota[59] = 698.4564628660078;frecuenciaNota[60] = 622.2539674441617;frecuenciaNota[61] = 587.3295358348151;frecuenciaNota[62] = 622.2539674441617;frecuenciaNota[63] = 698.4564628660078;frecuenciaNota[64] = 587.3295358348151;frecuenciaNota[65] = 466.1637615180899;frecuenciaNota[66] = 415.3046975799451;frecuenciaNota[67] = 391.99543598174927;frecuenciaNota[68] = 466.1637615180899;frecuenciaNota[69] = 587.3295358348151;frecuenciaNota[70] = 698.4564628660078;frecuenciaNota[71] = 622.2539674441617;frecuenciaNota[72] = 0.7656160859018546;frecuenciaNota[73] = 698.4564628660078;frecuenciaNota[74] = 783.9908719634985;frecuenciaNota[75] = 830.6093951598903;frecuenciaNota[76] = 783.9908719634985;frecuenciaNota[77] = 830.6093951598903;frecuenciaNota[78] = 1046.5022612023945;frecuenciaNota[79] = 587.3295358348151;frecuenciaNota[80] = 622.2539674441617;frecuenciaNota[81] = 622.2539674441617;frecuenciaNota[82] = 0.7656160859018546;frecuenciaNota[83] = 739.9888454232688;frecuenciaNota[84] = 698.4564628660078;frecuenciaNota[85] = 698.4564628660078;frecuenciaNota[86] = 622.2539674441617;frecuenciaNota[87] = 554.3652619537442;frecuenciaNota[88] = 523.2511306011972;frecuenciaNota[89] = 466.1637615180899;frecuenciaNota[90] = 440;frecuenciaNota[91] = 440;frecuenciaNota[92] = 466.1637615180899;frecuenciaNota[93] = 523.2511306011972;frecuenciaNota[94] = 554.3652619537442;frecuenciaNota[95] = 622.2539674441617;frecuenciaNota[96] = 698.4564628660078;frecuenciaNota[97] = 739.9888454232688;frecuenciaNota[98] = 880;frecuenciaNota[99] = 1046.5022612023945;frecuenciaNota[100] = 622.2539674441617;frecuenciaNota[101] = 0.7656160859018546;frecuenciaNota[102] = 698.4564628660078;frecuenciaNota[103] = 739.9888454232688;frecuenciaNota[104] = 698.4564628660078;frecuenciaNota[105] = 622.2539674441617;frecuenciaNota[106] = 554.3652619537442;frecuenciaNota[107] = 523.2511306011972;frecuenciaNota[108] = 466.1637615180899;frecuenciaNota[109] = 1108.7305239074883;frecuenciaNota[110] = 698.4564628660078;frecuenciaNota[111] = 739.9888454232688;frecuenciaNota[112] = 698.4564628660078;frecuenciaNota[113] = 622.2539674441617;frecuenciaNota[114] = 698.4564628660078;frecuenciaNota[115] = 1108.7305239074883;frecuenciaNota[116] = 0.7656160859018546;frecuenciaNota[117] = 1046.5022612023945;frecuenciaNota[118] = 932.3275230361796;frecuenciaNota[119] = 880;frecuenciaNota[120] = 880;frecuenciaNota[121] = 932.3275230361796;frecuenciaNota[122] = 698.4564628660078;frecuenciaNota[123] = 698.4564628660078;frecuenciaNota[124] = 587.3295358348151;frecuenciaNota[125] = 622.2539674441617;frecuenciaNota[126] = 0.7656160859018546;frecuenciaNota[127] = 698.4564628660078;frecuenciaNota[128] = 739.9888454232688;frecuenciaNota[129] = 698.4564628660078;frecuenciaNota[130] = 622.2539674441617;frecuenciaNota[131] = 1046.5022612023945;frecuenciaNota[132] = 1046.5022612023945;frecuenciaNota[133] = 622.2539674441617;frecuenciaNota[134] = 554.3652619537442; frecuenciaNota[135] = 523.2511306011972;frecuenciaNota[136] = 554.3652619537442;frecuenciaNota[137] = 698.4564628660078;frecuenciaNota[138] = 932.3275230361796;frecuenciaNota[139] = 1046.5022612023945;frecuenciaNota[140] = 1108.7305239074883;frecuenciaNota[141] = 932.3275230361796;frecuenciaNota[142] = 932.3275230361796;frecuenciaNota[143] = 0.7656160859018546;frecuenciaNota[144] = 554.3652619537442;frecuenciaNota[145] = 554.3652619537442;frecuenciaNota[146] = 622.2539674441617;frecuenciaNota[147] = 554.3652619537442;frecuenciaNota[148] = 523.2511306011972;frecuenciaNota[149] = 554.3652619537442;frecuenciaNota[150] = 932.3275230361796;frecuenciaNota[151] = 554.3652619537442;frecuenciaNota[152] = 523.2511306011972;frecuenciaNota[153] = 523.2511306011972;frecuenciaNota[154] = 523.2511306011972;frecuenciaNota[155] = 415.3046975799451;frecuenciaNota[156] = 466.1637615180899;frecuenciaNota[157] = 523.2511306011972;frecuenciaNota[158] = 554.3652619537442;frecuenciaNota[159] = 622.2539674441617;frecuenciaNota[160] = 554.3652619537442;frecuenciaNota[161] = 523.2511306011972;frecuenciaNota[162] = 554.3652619537442;frecuenciaNota[163] = 622.2539674441617;frecuenciaNota[164] = 698.4564628660078;frecuenciaNota[165] = 739.9888454232688;frecuenciaNota[166] = 830.6093951598903;frecuenciaNota[167] = 739.9888454232688;frecuenciaNota[168] = 698.4564628660078;frecuenciaNota[169] = 739.9888454232688;frecuenciaNota[170] = 523.2511306011972;frecuenciaNota[171] = 739.9888454232688;frecuenciaNota[172] = 739.9888454232688;frecuenciaNota[173] = 698.4564628660078;frecuenciaNota[174] = 698.4564628660078;frecuenciaNota[175] = 698.4564628660078;frecuenciaNota[176] = 466.1637615180899;frecuenciaNota[177] = 554.3652619537442;frecuenciaNota[178] = 523.2511306011972;frecuenciaNota[179] = 466.1637615180899;frecuenciaNota[180] = 523.2511306011972;frecuenciaNota[181] = 554.3652619537442;frecuenciaNota[182] = 391.99543598174927;frecuenciaNota[183] = 349.2282314330039;frecuenciaNota[184] = 391.99543598174927;frecuenciaNota[185] = 415.3046975799451;frecuenciaNota[186] = 391.99543598174927;frecuenciaNota[187] = 415.3046975799451;frecuenciaNota[188] = 466.1637615180899;frecuenciaNota[189] = 523.2511306011972;frecuenciaNota[190] = 466.1637615180899;frecuenciaNota[191] = 415.3046975799451;frecuenciaNota[192] = 466.1637615180899;frecuenciaNota[193] = 523.2511306011972;frecuenciaNota[194] = 554.3652619537442;frecuenciaNota[195] = 523.2511306011972;frecuenciaNota[196] = 554.3652619537442;frecuenciaNota[197] = 932.3275230361796;frecuenciaNota[198] = 932.3275230361796;frecuenciaNota[199] = 523.2511306011972;frecuenciaNota[200] = 554.3652619537442;frecuenciaNota[201] = 622.2539674441617;frecuenciaNota[202] = 554.3652619537442;frecuenciaNota[203] = 523.2511306011972;frecuenciaNota[204] = 466.1637615180899;frecuenciaNota[205] = 523.2511306011972;frecuenciaNota[206] = 622.2539674441617;frecuenciaNota[207] = 830.6093951598903;frecuenciaNota[208] = 698.4564628660078;frecuenciaNota[209] = 622.2539674441617;frecuenciaNota[210] = 554.3652619537442;frecuenciaNota[211] = 783.9908719634985;frecuenciaNota[212] = 830.6093951598903;frecuenciaNota[213] = 523.2511306011972;frecuenciaNota[214] = 466.1637615180899;frecuenciaNota[215] = 0.7656160859018546;frecuenciaNota[216] = 523.2511306011972;frecuenciaNota[217] = 523.2511306011972;frecuenciaNota[218] = 466.1637615180899;frecuenciaNota[219] = 554.3652619537442;frecuenciaNota[220] = 523.2511306011972;frecuenciaNota[221] = 622.2539674441617;frecuenciaNota[222] = 554.3652619537442;frecuenciaNota[223] = 698.4564628660078;frecuenciaNota[224] = 698.4564628660078;frecuenciaNota[225] = 466.1637615180899;frecuenciaNota[226] = 0.7656160859018546;frecuenciaNota[227] = 415.3046975799451;frecuenciaNota[228] = 523.2511306011972;frecuenciaNota[229] = 466.1637615180899;frecuenciaNota[230] = 554.3652619537442;frecuenciaNota[231] = 523.2511306011972;frecuenciaNota[232] = 622.2539674441617;frecuenciaNota[233] = 622.2539674441617;frecuenciaNota[234] = 415.3046975799451;frecuenciaNota[235] = 830.6093951598903;frecuenciaNota[236] = 698.4564628660078;frecuenciaNota[237] = 554.3652619537442;frecuenciaNota[238] = 0.7656160859018546;frecuenciaNota[239] = 932.3275230361796;frecuenciaNota[240] = 783.9908719634985;frecuenciaNota[241] = 622.2539674441617;frecuenciaNota[242] = 554.3652619537442;frecuenciaNota[243] = 523.2511306011972;frecuenciaNota[244] = 554.3652619537442;frecuenciaNota[245] = 554.3652619537442;frecuenciaNota[246] = 523.2511306011972;frecuenciaNota[247] = 554.3652619537442;frecuenciaNota[248] = 622.2539674441617;frecuenciaNota[249] = 554.3652619537442;frecuenciaNota[250] = 523.2511306011972;frecuenciaNota[251] = 466.1637615180899;frecuenciaNota[252] = 415.3046975799451;frecuenciaNota[253] = 415.3046975799451;frecuenciaNota[254] = 349.2282314330039;frecuenciaNota[255] = 369.99442271163446;frecuenciaNota[256] = 415.3046975799451;frecuenciaNota[257] = 369.99442271163446;frecuenciaNota[258] = 349.2282314330039;frecuenciaNota[259] = 369.99442271163446;frecuenciaNota[260] = 349.2282314330039;frecuenciaNota[261] = 391.99543598174927;frecuenciaNota[262] = 391.99543598174927;frecuenciaNota[263] = 415.3046975799451;frecuenciaNota[264] = 415.3046975799451;frecuenciaNota[265] = 0.7656160859018546;frecuenciaNota[266] = 466.1637615180899;frecuenciaNota[267] = 415.3046975799451;frecuenciaNota[268] = 391.99543598174927;frecuenciaNota[269] = 415.3046975799451;frecuenciaNota[270] = 554.3652619537442;frecuenciaNota[271] = 466.1637615180899;frecuenciaNota[272] = 415.3046975799451;frecuenciaNota[273] = 391.99543598174927;frecuenciaNota[274] = 415.3046975799451;frecuenciaNota[275] = 415.3046975799451;frecuenciaNota[276] = 523.2511306011972;frecuenciaNota[277] = 698.4564628660078;frecuenciaNota[278] = 587.3295358348151;frecuenciaNota[279] = 622.2539674441617;frecuenciaNota[280] = 622.2539674441617;frecuenciaNota[281] = 622.2539674441617;frecuenciaNota[282] = 622.2539674441617;frecuenciaNota[283] = 622.2539674441617;frecuenciaNota[284] = 698.4564628660078;frecuenciaNota[285] = 783.9908719634985;frecuenciaNota[286] = 830.6093951598903;frecuenciaNota[287] = 698.4564628660078;frecuenciaNota[288] = 523.2511306011972;frecuenciaNota[289] = 554.3652619537442;frecuenciaNota[290] = 523.2511306011972;frecuenciaNota[291] = 466.1637615180899;frecuenciaNota[292] = 523.2511306011972;frecuenciaNota[293] = 554.3652619537442;frecuenciaNota[294] = 415.3046975799451;frecuenciaNota[295] = 391.99543598174927;frecuenciaNota[296] = 415.3046975799451;frecuenciaNota[297] = 466.1637615180899;frecuenciaNota[298] = 415.3046975799451;frecuenciaNota[299] = 466.1637615180899;frecuenciaNota[300] = 523.2511306011972;frecuenciaNota[301] = 523.2511306011972;frecuenciaNota[302] = 466.1637615180899;frecuenciaNota[303] = 415.3046975799451;frecuenciaNota[304] = 391.99543598174927;frecuenciaNota[305] = 415.3046975799451;frecuenciaNota[306] = 523.2511306011972;frecuenciaNota[307] = 329.6275569128699;frecuenciaNota[308] = 349.2282314330039;frecuenciaNota[309] = 698.4564628660078;frecuenciaNota[310] = 698.4564628660078;frecuenciaNota[311] = 783.9908719634985;frecuenciaNota[312] = 698.4564628660078;frecuenciaNota[313] = 659.2551138257398;frecuenciaNota[314] = 698.4564628660078;frecuenciaNota[315] = 523.2511306011972;frecuenciaNota[316] = 523.2511306011972;frecuenciaNota[317] = 466.1637615180899;frecuenciaNota[318] = 523.2511306011972;frecuenciaNota[319] = 523.2511306011972;frecuenciaNota[320] = 523.2511306011972;frecuenciaNota[321] = 130.81278265029934;frecuenciaNota[322] = 195.99771799087463;frecuenciaNota[323] = 261.6255653005986;frecuenciaNota[324] = 329.6275569128699;frecuenciaNota[325] = 391.99543598174927;frecuenciaNota[326] = 523.2511306011972;frecuenciaNota[327] = 523.2511306011972;frecuenciaNota[328] = 523.2511306011972;
//       break;
//   }
// }





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

// var frecuenciasOctavaNota = [ //las octavas 0,1 y 2 no se usan de momento
//   [0], //octava0
//   [0], //octava1
//   [0], //octava2
//   //C,               ^C,                 D,
//   [123.470825314031, 130.81278265029934, 138.59131548843607, 146.8323839587038,155.56349186104046,164.81377845643496,174.61411571650194,184.99721135581723,195.99771799087463,207.65234878997256,220.0,233.08188075904496],
//   [246.94165062806206,261.6255653005986,277.1826309768721,293.6647679174076,311.12698372208087,329.6275569128699,349.2282314330039,369.99442271163446,391.99543598174927,415.3046975799451,440.0,466.1637615180899],
//   [493.8833012561241,523.2511306011972,554.3652619537442,587.3295358348151,622.2539674441617,659.2551138257398,698.4564628660078,739.9888454232688,783.9908719634985,830.6093951598903,880.0,932.3275230361796],
//   [987.766602512248,1046.5022612023945,1108.7305239074883,1174.65907166963,1244.5079348883235,1318.5102276514795,1396.9129257320155,1479.9776908465376,1567.9817439269968,1661.2187903197805,1760.0,1864.6550460723597]
// ];
// console.log("frecuenciasOctavaNota.length : " + frecuenciasOctavaNota.length);
// for (var i = 0; i < frecuenciasOctavaNota.length; i++) {
//   for (var j = 0; j < frecuenciasOctavaNota[i].length; j++) {
//     console.log("frecuenciasOctavaNota[" + i + "][" + j + "] : " + frecuenciasOctavaNota[i][j]);
//   }
// }

var  bemolesTonalidades = { 
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