function xhrGet(reqUri, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", reqUri, true);
	xhr.onload = callback;
	xhr.send();
}

function load (data) {
    var response = JSON.parse(data.responseText);
    console.log(response);
}
xhrGet('gallery_json.js', load);