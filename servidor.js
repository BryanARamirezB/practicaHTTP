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
});

fs.readFile(filePath, function(error, content) {
    if(error) {
        if(error.code == 'ENOENT'){
            fs.readFile('./404.html', function(error, content) {
                response.writeHead(200, { 'Content-Type': contentType});
                responde.end(content, 'utf-8');
            });
        }
        else {
            response.writeHead(500);
            responde.end('Sorry, check with the site admin for error: '+error.code+'..\n');
            response.end();
        }
    }
    else{
        response.writeHead(200, {'Content-Type': contentType});
        responde.end(content, 'utf-8');
    }
});