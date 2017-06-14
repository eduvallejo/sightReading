// var song = '"BM"z/2BA/2BA/2'; 
var pointer = 0;
var interval;
var notasLigadas = [];
// var ligarNota = false;
var notSkipCharacters = /[a-gA-GzZ0-9/:<>]/;
var timestamp;
var timestampUp;
var keyPressed = false; //para q al apreter una tecla se acabe la tecla anterior
var clickPressed = false;
var rest = true;
var appendPreId;

// var song = '(3Bdc (3f/e/2d/';
// var song = 'D|\\\l\n|G2B B>AB|';
var song =""; //parece q no funciona si simpl,mente se inicializa con var song;

// song += ""//appendo un ] al final para evitar errores pero parece q con | evita lo de acabar con :|
//quito la nomenclatura de acordes tipo "Am", con el fin de facilitar decode
for (var i = 0; i < song.length; i++) {//elimino simbolos innecesarios para el ritmo
	song = song.replace(/".*?"/, "");
	// song = song.replace("|", "");
}
		
var tunebookString;
// var song = 'goinghome';
// var song = 'oyecomova.abc';
var song = '0_tresillo_corcheas.abc';
// var song = 'albinoni.abc';
// var song = '0_negras.abc';
var song = '0_semicorcheas.abc';
var song = '0_tresillo_corcheas.abc';
var song = 'aranjuez1a.abc';
var song = '0_semicorcheas.abc';
var song = 'albinoni.abc';
var song = 'goinghome';
var song = 'himnoalegria.abc';
var song = 'arabesque120.abc';
var song = 'wild.abc';
var song = 'ravelA.abc';
var song = 'escalaDo.abc';
var song = 'ravelB.abc';
var song = 'puenteViejo.abc';
var song = 'arabesque110Compases38-70.abc';
var song = 'mahler_adagietto.abc';
var song = 'escalaCromaticaSostenidos.abc';
var song = 'escala5octavas.abc';
var song = 'bach_Suite1CelloPrelude.abc';
var song = 'bach_badinerie.abc';
var song = 'bach_BWV1056_II.abc';
var song = 'arabesque120Compases1-38.abc';
var song = 'giant_steps_solo1.abc';
var song = 'bach_BWV1056_I.abc';
var song = '000.abc';

// var song = 'bach_badinerieLento.abc';
var songResponse;
// audioSong = new Audio('ogg/silence.ogg'); //wav SILENCIO

// mp3/
// audioSong = new Audio('wav/' + song.replace('.abc', '.mp3')); //mp3
// console.log("song.replace('.abc', 'mp3') : " + song.replace('.abc', '.mp3'));
//wav
// audioSong = new Audio('wav/' + song.replace('.abc', '.wav')); //wavs
// audioSong = new Audio('mp3/' + song.replace('.abc', '.mp3')); //mp3
// audioSong = new Audio('ogg/' + song.replace('.abc', '.ogg')); //ogg
//conºle
// console.log("song.replace('.abc', 'wav') : " + song.replace('.abc', '.wav'));
// CON MELODIAS
// audioSong = new Audio('melodiasOgg/' + song.replace('.abc', '.ogg')); //wavs


var bpm ;//ahora se coje del decodeAjaxResponse

var key; //para aplicar sostenidos o bemoles

//colorear 
var notes = [];
var contadorColor = 0;

// console.log("song : " + song);
// var song = ' :G2 Ac | :E2 FE| :D2 FB, | :C2 EF| :G2 Ac | :E2 FE| :D2 FB | :C2 :G2 | :C4 | :e2 ed | :c2 GG | :A2 BA | :G2 :E2| :E2 ED | :E2 GE| :D2 FB | :C4|';
var songEscaped = song.replace("<", "&lt");// "<" needs to be "&lt" in pre
// console.log("songEscaped: " + songEscaped);

var repeticion = false; //para saber si tenemos q repetir desde el principio
var contadorRepeticion = 0; //saber desde donde repetir

var tupleApply = [];
var tupleType = 0; //3 para tresillos etc

var dotApply = [];
// var dotType = 0; //3 para tresillos etc

var tiemposCorrectos = []; // las respuestas del usuario se compararn con este array
var contadorTc = 0; //contador del array de los tiempos correctos
var tiemposRepetir = 0;
var tiemposUsuario = [];//las respuetas q pulsamos
var margenesCorrectosSuperior = [];
var margenesCorrectosInferior = [];
var contadorUsuario = 0;



var corcheasL = false; //cuando L:1/8 hay bug que una negra vale 2000 aunque sea compas 4/4
var semiCorcheasL = false; //cuando L:1/16 hay bug que una negra vale 4000 aunque sea compas 4/4

//dificultad, margen para aceptar acierto
var numErrores = 0;

//calculo cuando queremos error porcentual de cada nota
var dificultad = 20; //20=20% de margen
var limiteSuperior = 1 + (dificultad/100); //1.5 = 50%limite superior de margen
var limiteInferior = 1 - (dificultad/100); //0.5 = 50%limite inferior de margen
var compensation = 25; //EN MILISEGUNDOS: para hacer q las notas cortas se compensen en comparacion con las largas  en el % de error
// console.log("limiteSuperior : " + limiteSuperior);

//calculo para error igual para todas las notas
// var dificultad = 40; //en milisegundos

var mediaError = 0;
var errorPorcentual = 0;
var errorPorcentualAcumulado = 0;
//cambiar tempo
// var msPerBeat = parseFloat(60000 / bpm).toFixed(0);//0 decimales de milisengundos
var msPerBeat;
// parseFloat(mediaError).toFixed(2);
var velocidadDoblada = false;

// console.log("msPerBeat(valor negra) : " + msPerBeat + "ms");

var defaultColor;

//alteraciones
var mismoCompas = true; //para saber si aun se aplican las alteraciones
var sostenidoAccidental = { "C,": false, "D,": false, "E,": false, "F," : false, "G,": false, "A,": false, "B,": 0,
      "C":false, "D":false, "E":false, "F" :false, "G":false, "A":false, "B":false, 
      "c":false, "d":false, "e":false, "f":false, "g":false, "a":false, "b":false, 
      "c'":false, "d'":false, "e'":false, "f'":false, "g'":false, "a'":false, "b'":false
};
var bemolAccidental = { "C,": false, "D,": false, "E,": false, "F," : false, "G,": false, "A,": false, "B,": 0,
      "C":false, "D":false, "E":false, "F" :false, "G":false, "A":false, "B":false, 
      "c":false, "d":false, "e":false, "f":false, "g":false, "a":false, "b":false, 
      "c'":false, "d'":false, "e'":false, "f'":false, "g'":false, "a'":false, "b'":false
};
var becuadroAccidental = { "C,": false, "D,": false, "E,": false, "F," : false, "G,": false, "A,": false, "B,": 0,
      "C":false, "D":false, "E":false, "F" :false, "G":false, "A":false, "B":false, 
      "c":false, "d":false, "e":false, "f":false, "g":false, "a":false, "b":false, 
      "c'":false, "d'":false, "e'":false, "f'":false, "g'":false, "a'":false, "b'":false 
};
