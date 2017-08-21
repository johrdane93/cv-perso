<?php 
	$a_unlock = array(1,3,6,7,8);
	if($_POST['code'] ==$a_unlock)
		$a_ajax['check'] = 'true';
	else
		$a_ajax['check'] = 'false';
	echo trim(json_encode($a_ajax));
	session_write_close();
	die;
?>