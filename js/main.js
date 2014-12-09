$(document).ready(function() {
	var xhrGet = function(url, successHandler, errorHandler) {
	 	var xhr = typeof XMLHttpRequest != 'undefined'
	    	? new XMLHttpRequest()
	    	: new ActiveXObject('Microsoft.XMLHTTP');
	  	xhr.open('get', url, true);
	  	xhr.onreadystatechange = function() {
	    	var data;
	    	if (xhr.readyState == 4) {
		      	if (xhr.status == 200) {
			        data = JSON.parse(xhr.responseText);
		    	    successHandler && successHandler(data);
		      	} else {
		        	errorHandler && errorHandler(status);
		      	}
	    	}
	  };
	  xhr.send();
	};

	xhrGet('js/gallery.json', function(data) {
		image = data[0]
		alert(image)
		console.log(image)
		$(".carousel-inner").append('<div class="item"><img src="' + image['image'] + '"><div class="carousel-caption"><h3>' + image['title'] + '</h3><p>' + image['date'] + '</p></div></div>');
		//for (var i = 0; i < data.length; i++) {
		//}
	}, function(status) {
		alert('Something went wrong.');
	});
});