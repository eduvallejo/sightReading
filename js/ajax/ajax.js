//ajax.js
function ajax(fileName) {
	// document.getElementById("preId").innerHTML = '';		
	
	var url = "js/ajax/echo.php?name=" + encodeURIComponent(fileName);
	// console.log("AJAXfileNameencoded : " + encodeURIComponent(fileName));

	//ajax
	var http = new XMLHttpRequest();
  	// document.getElementById("loading").innerHTML = '<img src="js/ajax/spinner.gif" />'; // Set here the image before sending request
	http.open("GET", url, true);
	http.send();

	http.onreadystatechange = function() {//Call a function when the state changes.
	// console.log("url : " + url);
	    if(http.readyState == 4 && http.status == 200) {
	        // console.log("numero de patrones: " + http.response.length);
	        // console.log("http.response : " + http.response);
	        response = JSON.parse(http.response);
	        // response = response.replace(/\n([^\n]*)$/, ']'); //bug5 NO funciona
	        // console.log("response : " + response);
		    appendSong(response);
      		// document.getElementById("loading").innerHTML = ''; // Hide the image after the response from the server
      		// document.getElementById("preId").innerHTML += response; // Hide the image after the response from the server
      		// preIdHtml = document.getElementById('preId').innerHTML;
      		// preIdHtml = document.getElementsByClassName('abctext').innerHTML;
      		// console.log("preIdHtml : " + preIdHtml);
	        // if(paused == false){pause();}
	        // //change board size according to pattern x, y
	        // if (response[0] > 100 || response[1] > 100) {
	        // 	if (response[0] >= response[1]) {
	        // 		canvasHeight = parseInt(response[0]) + 200;
	        // 		canvasWidth = parseInt(response[0]) + 200;
	        // 	}else if (response[1] >= response[0]){
	        // 		canvasHeight = parseInt(response[1]) + 200;
	        // 		canvasWidth = parseInt(response[1]) + 200;
	        // 	}
	        // 	origenPatternsImportadosX =+ 100;
	        // 	origenPatternsImportadosY =+ 100;
	        // 	console.log("canvasWidth : " + canvasWidth);
	        // 	zoom = 1;
	        // 	// console.log("origenPatternsImportadosX : " + origenPatternsImportadosX);
	        // 	console.log("grande");
	        // 	init();
	        // 	// console.log("pattern : " + response[2]);
	        // 	drawPattern(response[2]);
	        	
	        // 	}else{
			      //   // zoom = 2;
			      //   init();
			      //   console.log("pequeño");
			      //   drawPattern(response[2]);
		       // 	}
	    	}else{
	      // console.log("http.readyState: " + http.readyState);
	    }
	// console.log("ajax: " + fileName);
	}     

}
