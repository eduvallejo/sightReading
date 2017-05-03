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
	        songResponse = response;
	        // response = response.replace(/\n([^\n]*)$/, ']'); //bug5 NO funciona
	        // console.log("response : " + response);
		    appendSong(response);
      		// document.getElementById("loading").innerHTML = ''; // Hide the image after the response from the server
      		// document.getElementById("preId").innerHTML += response; // Hide the image after the response from the server
	    	}
	// console.log("ajax: " + fileName);
	}     

}
