const http = require('http');

const books = [
    { 'title': 'Programming Book', 'author': 'Luisangel Marcia' },
    { 'title': 'The Human Body', 'author': 'Marvin Marcia' },
    { 'title': 'Harry Potter', 'author': 'JK Rowling' },
];

const server = http.createServer((request, response) => {
    const { method, url } = request;

    let body = [];

    request.on('data', chunk => {
        body.push(chunk)
    })
        .on('end', () => {
            body = Buffer.concat(body).toString();
            let status = 404;
            const res = {
                status: 404,
                data: null
            };

            if (method === 'GET' && url === '/books') {
                status = 200;
                res.status = 200;
                res.data = books;
            } else if (method === 'POST' && url === '/books') {
                status = 200;
                const { title, author } = JSON.parse(body);
                books.push({ title, author });
                res.status = 200;
                res.data = books;
            }

            response.writeHead(status, {
                'Content-Type': 'application/json'
            });

            response.end(
                JSON.stringify({ res })
            );
        });
});

const PORT = 5000;

server.listen(PORT, () => console.log('The server is executing'));
