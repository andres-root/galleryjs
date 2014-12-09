var xhrGet = function(url, successHandler, errorHandler) {
 	var xhr = typeof XMLHttpRequest != 'undefined'
    	? new XMLHttpRequest()
    	: new ActiveXObject('Microsoft.XMLHTTP');
  	xhr.open('get', url, true);
  	xhr.onreadystatechange = function() {
    	var status;
    	var data;
    	if (xhr.readyState == 4) {
	      	status = xhr.status;
	      	if (status == 200) {
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
	var images = JSON.parse(data);
	for(var i = 0; i < images.legth; i++) {
	  	$( ".carousel-inner" ).append( '<div class="item active"> \
					      <img src="img/image_1.jpg" alt=""> \
					      <div class="carousel-caption"> \
					        <h3>Experimental Projects at Intel</h3> \
					        <p>June 17, 2013</p> \
					      </div> \
					    </div>' );
	 }

}, function(status) {
	alert('Something went wrong.');
});
