var http = requiere('http');
var fs = ('fs');
var path = requiere ('path');

http.createServer(function (request, response) {
    console.log('request ', request.url);
    var filePath = '.' + request.url;
    if (filePath == './'){
        filePath = './index.html';
        var extname = String(path.extname(filePath)).toLowerCase();
        var contentType = 'text/html';
        var mimeTypes = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css',
            '.jpg': 'image/jpg'
        }
    }
})