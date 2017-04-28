// var song = '"BM"z/2BA/2BA/2'; 
var pointer = 0;
var interval;
var notasLigadas = [];
// var ligarNota = false;
var notSkipCharacters = /[a-gA-GzZ0-9/:<>]/;
var compensation = 0.00;
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
var tiemposUsuario = [];//las respuetas q pulsamos
var margenesCorrectosSuperior = [];
var margenesCorrectosInferior = [];
var contadorUsuario = 0;
var audio = new Audio('pulseLargo60.wav');
var bpm = 60;
// var audio = new Audio('pulseLargo80.wav');
// var bpm = 80;
// var audio = new Audio('pulseLargo100.wav');
// var bpm = 100;


var corcheasL = false; //cuando L:1/8 hay bug que una negra vale 2000 aunque sea compas 4/4
var semiCorcheasL = false; //cuando L:1/16 hay bug que una negra vale 4000 aunque sea compas 4/4

//dificultad, margen para aceptar acierto
var numErrores = 0;
var dificultad = 10; //20=20% de margen
var limiteSuperior = 1 + (dificultad/100); //1.5 = 50%limite superior de margen
var limiteInferior = 1 - (dificultad/100); //0.5 = 50%limite inferior de margen
// console.log("limiteSuperior : " + limiteSuperior);
// console.log("limiteInferior : " + limiteInferior);
var mediaError = 0;
var errorPorcentual = 0;
var errorPorcentualAcumulado = 0;
//cambiar tempo
var msPerBeat = parseFloat(60000 / bpm).toFixed(0);//0 decimales de milisengundos
// parseFloat(mediaError).toFixed(2);
var velocidadDoblada = false;

console.log("msPerBeat(valor negra) : " + msPerBeat + "ms");

var defaultColor;
