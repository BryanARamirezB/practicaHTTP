//Llamamos el modulo http
const http = require('http');
//Establecemos la url o IP de nuestro servidor
const hostname = '172.16.0.98';
//Establecemos el puerto de escucha
const port = 3000;
//creamos una instancia HTTP con un request y un response
const server = http.createServer((req, res) => {
    //El servidor respondera con un código 200
    res.statusCode = 200;
    //El servidor respondera con un texto plano
    res.setHeader('Conent-Type', 'text/plain');
    //El servidor respondera el mensaje hola mundo
    res.end('Hola Mundo\n');
});

server.listen(port, hostname, () => {
    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`);
});