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
		url:'../ajax/mail.php',
		type: 'POST',
		cache: false,
		data: { 'name': name, 'email': email, 'message': message },
		dataType: 'html',
		beforeSend: function() {
			$("#sendMail").prop("disabled", true);
		},
		success: function(data) {
			alert(data);
			$("#sendMail").prop("disabled", false);
		}
	});


});