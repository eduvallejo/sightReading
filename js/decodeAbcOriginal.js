//decode rle pattern and give values to grid1.
function decodeAbc(pattern) {
	var pointer = 0; 
	var row = [];
	var isaNumber = false;
	// var run_countB = 1;
	gridX = origenPatternsImportadosX; 
	gridY = origenPatternsImportadosY;
	var run_count = 1;

	while(pattern[pointer] != '!'){
	// console.log("pattern[" + pointer + "] : " + pattern[pointer]);
	if (isNaN(pattern[pointer]) && (pattern[pointer] != '$')) { //letters
	 	for (var i = 0; i < run_count; i++) {
	      // run_count[i];
	      if (pattern[pointer] == "o") {              
	        grid1[gridX][gridY] = 1;
	        // console.log("pattern[" + pointer + "] : " + pattern[pointer]);	            
	      }
	      gridX++;
	      // console.log("gridX = " + gridX + " + gridY= " + gridY );

	    }
	  // }
	isaNumber = false;
	  // gridX++;
	run_count = 1;
	}else if(pattern[pointer] == '$'){
	  gridY = gridY + parseInt(run_count);
	  gridX = origenPatternsImportadosX;
	  isaNumber = false;
	  // console.log("number(pattern[" + pointer + "] : " + pattern[pointer]);
	  // console.log("gridY++ : ");
	}else{//is a Number
	  if (isaNumber == false) {
	    run_count = 0;
	  }
	 // console.log("number(pattern[" + pointer+ "] : " + pattern[pointer]);   
	  isaNumber = true;
	  
	  //para solucionar el bug del tipo 25o, runcounts de dos cifras
	  run_count = "" + run_count + pattern[pointer];
	  
	}
	
	pointer++;
	}//end While
	console.log("pattern[" + pointer + "] : " + pattern[pointer]);
	  // consoleGrid();
}