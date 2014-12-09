$(document).ready(function() {
	var intelGallery = function () {
		// Ajax request function
		var xhrGet = function(url, successHandler, errorHandler) {
		 	var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
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
		// Loads the images in the gallery
		var load = function (jsonUri) {
			this.xhrGet(jsonUri, function(data) {
				var inner = $('.carousel-inner');
				var indicators = $('.carousel-indicators');
				for(var i = 0; i < data.length; i++) {
					var slide = $('<div class="item" data-sequence="' + i + '">');
					if(i == 0) { slide.addClass('active'); }
					var img = $('<img src="' + data[i].image + '">');
					slide.append(img);
					var caption = $('<div class="carousel-caption">');
					caption.append('<h4>'+data[i].title+'</h4>');
					caption.append('<p>'+data[i].date+'</p>');
					slide.append(caption);
					inner.append(slide);
					var indicator = $('<li data-target="#carousel" data-slide-to="'+i+'">');
					if(i == 0) { indicator.addClass('active'); }
					var thumb = $('<img src="' + data[i].thumbUrl + '">');
					indicator.append(thumb)
					indicators.append(indicator);
				}	
			}, function(status) {
				console.log(status);
			});
		}

		return {
			load: load
		}
	};
	intelGallery.load('js/gallery.json');
});
