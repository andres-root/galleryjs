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
	console.log(data);
}, function(status) {
	alert('Something went wrong.');
});
