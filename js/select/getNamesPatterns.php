<?php 
// $targetName = $_GET["name"];
$path = dirname(__FILE__); //echoes path: /var/www/html/conway/js/select
$path = str_replace("js/select", "songs", $path);

$nameArray = array();
$objects = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path), RecursiveIteratorIterator::SELF_FIRST);
foreach($objects as $name => $object){
	// echo 
	if (!strpos($name, "~")) {
		if (!is_dir($name)) {
	    	
			$name = basename($name);
			// $needles = array(".rle", ".lif", ".txt", ".zip");
			// $name = str_replace($needles, "", $name);
			// echo $name.'<br>';
			array_push($nameArray, $name);
		}    
	}
}
//eliminamos patterns duplicados
$nameArray = array_unique($nameArray);
//ordenar alfabeticamente el array
sort($nameArray);
echo json_encode($nameArray);
?>
