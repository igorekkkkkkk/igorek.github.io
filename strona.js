$('body').on('click', '.password-checkbox', function(){
	if ($(this).is(':checked')){
		$('#pass').attr('type', 'text');
	} else {
		$('#pass').attr('type', 'password');
	}
}); 