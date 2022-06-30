var form = new FormData();
var settings = {
  "url": "http://api.airvisual.com/v2/countries?key=8b66e194-162e-4ff6-b2a5-c3241a6f4d56",
  "method": "GET",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
  console.log(response);
});