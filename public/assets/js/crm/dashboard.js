$(document).on("click" , "#Logout", function(){

	$.ajax({
	    url:"logout",
	    cache: false,
	    processData: false,
	    contentType: false,
	    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
	    type: 'POST',
	        success: function(response)
	        {
	        	window.location.href = "login";
	        },
	        error: function(response)
	        {
	        	console.log(0);
	        }
	});

});