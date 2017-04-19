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
var song = 'D|\\\l\n|G2B B>AB|';
var song = '|: Aeed eAcd | eaaf gedg | Aeed eAcd | [1 egdB BAGB :| [2 egdB BAAf |\\\l\n|: ge ~e2 a2 af | ge ~e2 fddf | ge ~e2 a2 cd | [1 egdB BAAf :| [2egdB BAGB ||';
var song = 'a>b f/d/ f/>d/|f/<d/ f/d/ a>b';
var song = 'a>b f/d/ f/>d/|';
// var song = 'G |c>de dcB | c3 G3 | ABc GFE | D3- D2B |\\\l\nc>BA dcB | A3 D2D | E>^FG DG^F | G3- G2 :||: B |\\\l\nc>BA d>ef | ^G3 E2E | FED EA^G | A3- A2c |\\\l\nB>AG cde | d>cd G2f | edc Adc | B3- B2f |\\\l\nedc GcB | c3- c2 :|';
// var song = 'D-D d-d d2-d';
// var song = 'z4 [C4z/2] [c3/2z/2] g/2 [^d2z/2]';
// var song = 'z4 [C4e/2] [c3/2e/2] g/2 ';
// var song = '|(3a,b,c, G/>A /-G/G/|(3a,b,c, G/>A /-G/G/|(3a,b,c, G/>A /-G/G/|';
// var song = 'g/>g/ -g/g/ (3 ggg';
// var song = 'g/>g/ z3/2 g/ -g/4d3/4';
var song = 'g/>g/ g/>g/ g/4g/4g/4g/4 g/2<g/2' ; //fulanito es cojonudo
// var song = 'g/>g/' ;
// var song = 'g/<g/ g2 z' ;
// var song = 'G/>A/ -G/G/ G/>A/ -G/G/ (3a,b,c, (3a,b,c,';
// var song = 'G/>A/ -G/G/ G/>A/ -G/G/';
// var song = 'a/2a/2 a/2>a/2- a/2a/2';
// var song = '(3a/a/a/';
// var song = 'a3/4 a3/4 a3/4 a3/4';
// var song = 'a/2aaaa/';
// var song = '(3a/a/a/'; //tresillo corcheas
// var song = 'a/4a/4a/4a/4'; //semicorcheas
var song = 'z/4g/4g/4g/4 a/4>a/4-a/4a/4'; //primer toque
var song = 'a/2>a/2 -a/2a/2 (3aaa'; //*  */
var song = 'a/2>a/2 -a/2a/2'; //*  */
var song = '(3aaa'; //tresillos negras
// var song = 'a'; //tresillos negras

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
var msPerBeat = 1000;//para 60bpm
var tiemposUsuario = [];//las respuetas q pulsamos
var contadorUsuario = 0;
var audio = new Audio('pulseLargo.wav');

var corcheasL = false; //cuando L:1/8 hay bug que una negra vale 2000 aunque sea compas 4/4
