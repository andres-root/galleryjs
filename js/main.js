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
		var inner = $('.carousel-inner');
		for(var i = 0; i < data.length; i++) {
						var slide = $('<div class="item" data-sequence="' + i + '">');
						
						if(i == 0) { slide.addClass('active'); }
						
						var img = $('<img src="' + data[i].image + '">');
		 
						slide.append(img);
						
						// create a caption for slide
						var caption = $('<div class="carousel-caption">');
						caption.append('<h4>'+data[i].title+'</h4>');
						caption.append('<p>'+data[i].date+'</p>');
		 
						// add the caption to the slide
						slide.append(caption);
						
						// put the slide in the .carousel-inner container
						inner.append(slide);
						
						// add the dot indicator for the slide			
						var indicator = $('<li data-target="#carousel" data-slide-to="'+i+'">');
						if(i == 0) { indicator.addClass('active'); }
						indicators.append(indicator);
					}	
		 
					// boot the bootstrap carousel plugin
	}, function(status) {
		alert('Something went wrong.');
	});
});


