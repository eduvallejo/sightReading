<?php 
$targetName = $_GET["name"];
// $path = realpath('/var/www/html/conway/structures/');
// echo('\$path: '. $path . '<br>');
$path = dirname(__FILE__); 
$path = str_replace("js/ajax", "songs", $path);
// echo 'path: ' . $path. '<br>';



$objects = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path), RecursiveIteratorIterator::SELF_FIRST);
foreach($objects as $name => $object){
    if (basename($name) == $targetName) {
    	
    	$result = str_replace($path , "../../songs", $name);
    }
}

$file = fopen($result , "r");
if (!$file) {
	echo 'Could not open: ' . $result;
}
// for ($i=0; $i < 3; $i++) { 
// 	$pattern[$i] = "";
// }
while(!feof($file)){
	$linea =(fgets($file));
	// echo $linea . "\\\l\n";
	// echo $linea . "\n";
	$pattern .= $linea;
	
	// echo $pattern;
	// if ($linea[0] != "#" && $linea[0] != "x" && $linea[0] != "y") {
	// 		# code...
	// 	$linea = str_replace("\r", "", $linea);
	// 	$linea = $linea . "\n";//para evitar el bug de cuando los rle no llevan un salto de linea
	// 	$pos = strpos($linea, "\n");
	// 	if ($pos !== false) {
		
	// 		$sublinea = substr($linea, 0, $pos); 
	// 		$pattern[2] = $pattern[2] . $sublinea;
	// 	}
	// }else if($linea[0] == "x" || $linea[0] == "y"){
	// 	$posEqualx = strpos($linea, "=");
	// 	$posCommaX = strpos($linea, ",");
	// 	$pattern[0] = substr($linea, $posEqualx + 2, ($posCommaX - $posEqualx)-2);

	// 	$posEqualY = strpos($linea, "=",  $posCommaX);
	// 	$posCommaY = strpos($linea, ",", $posEqualY);
	// 	$posY = strpos($linea, "y");
	// 	$pattern[1] = substr($linea, $posEqualY + 2, ($posCommaY - $posEqualY)-2);
	// }
}
// $pattern = str_replace('"', '', $pattern);
// $pattern = str_replace('Array', '', $pattern);
// $pattern = str_replace("<", "&lt", $pattern);
echo json_encode($pattern);
// echo $pattern;

fclose($file);






 ?>