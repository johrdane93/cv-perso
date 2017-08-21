<?php 

if(isset($_POST['action'])){
	if($_POST['action'] == "update"){
		$new_postit = $_POST['value'];
		var_dump($new_postit);
	}
}

$data = json_decode(trim(file_get_contents("postits.json")),true);
echo trim(json_encode($data));



?>