<?php 
$data = json_decode(trim(file_get_contents("post.json")),true);

if(isset($_POST) && !empty($_POST)){
	if(isset($_POST['action']) && $_POST['action'] == "update"){
		$new_postit = $_POST['value'];
		foreach($data as &$postit){ //par référence 
			if($postit['id'] == $new_postit['id']){
				$postit['content'] = $new_postit['content'];
				$postit['x'] = $new_postit['x'];
				$postit['y'] = $new_postit['y'];
				$postit['color'] = $new_postit['color'];
			}
		}
		$f = fopen("post.json", "w+");
		fputs($f, json_encode($data));
		fclose($f);
	}
	
	if(isset($_POST['action']) && $_POST['action'] == "create"){
		$postit = array();
		$postit['id'] = count($data);
		$postit['content'] = "Nouveau";
		$postit['x'] = rand(0,400);
		$postit['y'] = rand(0,400);
		$postit['color'] = "#FFF";

		$data[] = $postit;
		$f = fopen("post.json", "w+");
		fputs($f, json_encode($data));
		fclose($f);
	}

	if(isset($_POST['action']) && $_POST['action'] == "delete"){
		unset($data[$_POST['value']]);
		$f = fopen("post.json", "w+");
		fputs($f, json_encode($data));
		fclose($f);
	}
} 

echo trim(json_encode($data));
?>