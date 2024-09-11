const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    let count = 0;
    const interval = setInterval(() => {
        res.write(`${count}\n`);
        count++;

        if (count === 10) {
            clearInterval(interval);
            res.end();
        }
    }, 1000);
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on port 3000');
});
