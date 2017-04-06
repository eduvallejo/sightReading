// var song = '"BM"z/2BA/2BA/2'; 
var pointer = 0;
var song = ':A,2 c/2d/2 e| c/4d/4c/4d/4 e c/4d/4c/4d/4 f |]';
//turkey
var song = 'B/2A/2 | G/2F/2G/2A/2 GB,/2C/2 | D/2E/2D/2B,/2 DG/2A/2 | BB "Em"B/2A/2G/2A/2 | "Am"BA "D7"AB/2A/2 | G/2F/2G/2A/2 GB,/2C/2 | D/2E/2D/2B,/2 DG/2A/2 | B/2de/2 "Em"d/2B/2G/2A/2 | \
"D7"BA G | ';
var song = ' :G2 Ac | :E2 FE| :D2 FB, | :C2 EF| :G2 Ac | :E2 FE| :D2 FB | :C2 :G2 | :C4 | :e2 ed | :c2 GG | :A2 BA | :G2 :E2| :E2 ED | :E2 GE| :D2 FB | :C4|';
var songEscaped = song.replace("<", "&lt");// "<" needs to be "&lt" in pre
console.log("songEscaped: " + songEscaped);

var tiemposCorrectos = []; // las respuestas del usuario se compararn con este array
var contadorTc = 0; //contador del array de los tiempos correctos
var msPerBeat = 1000;//para 60bpm
var tiemposUsuario = [];//las respuetas q pulsamos
var contadorUsuario = 0;
var audio = new Audio('pulseLargo.wav');
