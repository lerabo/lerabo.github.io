$("#sendMail").on("click", function(){
	var name = $("#name").val().trim();
	var email = $("#email").val().trim();
	var message = $("#message").val().trim();

	if (name == ""){
		$("#errorMess").text("Введіть ім'я");
		return false;
	} else if (email == ""){
		$("#errorMess").text("Введіть email");
		return false;
	} else if (message == ""){
		$("#errorMess").text("Введіть повідомлення");
		return false;
	}


	$("#errorMess").text("");

	$.ajax({
		url:'send.php',
		type:'GET',
		cache:false,
		data:{ 'name': name, 'email':email, 'message': message},
		dataType:'html',
		beforeSend: function() {
			$("#sendMail").prop("disabled", true);
		},
		success: function(data){
			if(!data)
				alert("Виникла помилка, повідомлення не відправлене!");
			else
				$("#mailForm").trigger("reset");
			
			$("#sendMail").prop("disabled", false);
		}
	});


});


$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#scroll_top').show();
		} else {
			$('#scroll_top').hide();
		}
	});
 
	$('#scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});
