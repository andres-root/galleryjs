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
		for(var i = 0; i < data.length; i++) {
						// create a slide with the class .item which boostrap carousel will manage
						var slide = $('<div class="item" data-sequence="' + i + '">');
						
						// if it's the first one mark it a active
						if(i == 0) { slide.addClass('active'); }
						
						// create a viewport for centering the image in the container
						var viewport = $('<div>');
						
						// create an lazy loading image
						var img = $('<img data-lazy-src="' + data[i].src + '">');
		 
						// put the image in the viewport
						viewport.append(img);
						
						// put the viewport in the slide
						slide.append(viewport);
						
						// create a caption for slide
						var caption = $('<div class="carousel-caption">');
						caption.append('<h4>'+data[i].title+'</h4>');
						caption.append('<p>'+data[i].date+'</p>');
		 
						// add the caption to the slide
						slide.append(caption);
						
						// put the slide in the .carousel-inner container
						inner.append(slide);
						
						// make the viewport a container that is always the same size as the carousel
						viewport.digitopiaContainer({fillContainer:inner})
						
						// make the viewport a digitopiaViewport that can enlarge images if needed
						viewport.digitopiaViewport({ blowup: true, crop:true, align:'center', listenTo: viewport });
						
						// make the image lazy
						img.digitopiaLazyImg();
			
						// add the dot indicator for the slide			
						var indicator = $('<li data-target="#carousel" data-slide-to="'+i+'">');
						if(i == 0) { indicator.addClass('active'); }
						indicators.append(indicator);
					}	
		 
					// boot the bootstrap carousel plugin
					this.element.carousel({pause:'hover'});
	}, function(status) {
		alert('Something went wrong.');
	});
});


