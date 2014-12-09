function xhrGet(reqUri, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", reqUri, true);
	xhr.onload = callback;
	xhr.send();
}

xhrGet('gallery_json.js', function (data) {
    var response = JSON.parse(data.responseText);
    console.log(response);
});