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
var song = 'goinghome';
var song = 'himnoalegria.abc';
var song = 'arabesque120.abc';
var song = 'wild.abc';
var song = 'puenteViejo.abc';
var song = 'escala5octavas.abc';
var song = 'escalaDo.abc';
var song = 'escalaCromaticaSostenidos.abc';
var song = 'ravelB.abc';
var song = 'arabesque110Compases38-70.abc';
var song = 'bach_prelude_1.abc';
var song = 'bach_Toccata_And_Fugue_in_D_Minor1voz.abc';
var song = 'ravelA.abc';
var song = 'arabesque120Compases1-38.abc';
var song = 'albinoni.abc';
// var song = 'arabesque1-70.abc';
var song = 'arabesque70-.abc';
var song = 'mahler_adagietto.abc';
var song = 'bach_Suite1CelloPrelude.abc';
var song = 'giant_steps_solo1.abc';
var song = 'rimsky_bumble_bee.abc';
var song = 'rimsky_from_The_Sea_and_Sinbads_Ship_Scheherazade.abc';
var song = 'rimsky_bumble_bee75.abc';
var song = '000.abc';   
var song = 'bach_badinerie.abc';
var song = 'arabesqueN1.abc';
var song = 'mozart_turkish.abc';
var song = 'bach_BWV1056_I.abc';
var song = 'bach_BWV1056_II.abc';
var song = 'vivaldi_RV93_II.abc';
// var song = 'z000.abc';

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
// audioSong = new Audio('ogg/arabesque120Compases1-38.abc.ogg'); //ogg
//conºle
// console.log("song.replace('.abc', 'wav') : " + song.replace('.abc', '.wav'));
// CON MELODIAS
// audioSong = new Audio('melodiasOgg/' + song.replace('.abc', '.ogg')); //wavs


var bpm ;//ahora se coje del decodeAjaxResponse

var key; //para aplicar sostenidos o bemoles

//colorear 
var notes = [];
var contadorColor = 0;
var contadorSilenciosNotaActual = 0;
var contadorLigadasActual = 0;


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
var dificultad = 15; //20=20% de margen
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
var velocidadDoblada = false; //quitar?

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


//bug11 conseguir scroll hacia abajo
var contadorLinea = 0;
var notasPorLinea = [];
notasPorLinea[0] = 0; //para no tener NAN
var notasPorLineaUsuario = 0;
var cantidadScroll = 0;

// bug12 scroll horizontal
// var cantidadScrollHorizontal = 0;
var notesWidth = [];
// var scale = 1.5;
var escala = 2;

//oscillator
var decayRate = 0.4; //cuan to mas PEQUEÑO, mas RAPIDO DECAE
var decayTarget = 0; //si es 0 se acxaba apagando la nota depues de decaer

//noSilencios
var posicionSilencios = [];

//json  decayNota
decayRateNota = [];

//cambiarTempo
var bpmArray = [];
var contadorBpmArray = 0;

//colors.js
var contadorLigadas = 0;
var posicionSilenciosColorear = [];

var scrollsPorBeatDenominador = 20  ;
var scrollsPorBeat = 1 / scrollsPorBeatDenominador; // el denominador indica el numero de scrolls en 1 beat
var intervalSet;
// var contador = 0;//
// var contadorCompases = 0;//cambio tempo lanzado por usuario
var contadorChangeTempoInThisNoteTimes = 0;//cambio tempo lanzado por setInterval
var changeTempoInThisNote = [];
var changeTempoInThisNoteTimes = []; //para q los cambios de tempo los haga el scroll y no haya los desajustes
var timeSignatures = [] ; //es un array de string del stilo 4/4, 3/4, etc...
var timeSignaturesCounter = 0 ; 
var measureNumberTimeSignaturesCounter = 0;
var measureNumberTimeSignatures = []; //cada elemento representa un compas y si contiene cambio de signature
//de tener q lanzarse por el usuario al llegar a la nota