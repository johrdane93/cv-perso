$(document).ready(function() {
	var a_unlock = [];
	var select = 0;

	function array_check (obj) {
		if(!$(obj).hasClass('selected')){
			$(obj).addClass('selected');
			a_unlock[select] = parseInt($(obj).attr('node'));
			select++;
		}
	}

	function set_color(classe){
		$.each(a_unlock, function(key, val) {
			$('#node-'+val).addClass(''+classe+'');
		});
	}

	function unlock(){
		$.ajax({
			url: 'ajax_code.php',
			dataType: 'json',
			data : {code : a_unlock},
			type: 'POST',
			cache: false,
			success: function(response) {
				if(response.check === "true"){
					set_color('good');
				}
				else{
					set_color('wrong');
				}
			}
		});
	}

	function reset(){
		$('.node').removeClass('good wrong selected');
		a_unlock = [];
		select = 0;
	}

	$('.node').hover(function(e){
		array_check(this);
	});

	$('#global').mouseenter(function(e){
		reset();
	});

	$('#global').mouseleave(function(e){
		unlock();
	});

});