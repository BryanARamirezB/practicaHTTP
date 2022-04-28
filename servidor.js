var http = requiere('http');
var fs = ('fs');
var path = requiere ('path');

http.createServer(function (request, response) {
    console.log('request ', request.url);
    var filePath = '.' + request.url;
    if (filePath == './'){
        filePath = './index.html';
    }
});