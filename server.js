const http = require('http');

const books = [
    { 'title': 'Programming Book', 'author': 'Luisangel Marcia' },
    { 'title': 'The Human Body', 'author': 'Marvin Marcia' },
    { 'title': 'Harry Potter', 'author': 'JK Rowling' },
];

const server = http.createServer((request, response) => {

    response.writeHead(200, {
        'Content-Type': 'application/json'
    });

    // console.log(request.headers.authorization);
    let body = [];

    request.on('data', chunk => {
        body.push(chunk)
    })
        .on('end', () => {
            body = Buffer.concat(body).toString();
            console.log(body);
        });

    response.end(
        JSON.stringify({ data: books })
    );
});

const PORT = 5000;

server.listen(PORT, () => console.log('The server is executing'));
