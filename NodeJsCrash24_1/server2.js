import { createServer } from 'http'
const port = process.env.PORT;
const users = [
    { id: 1, name: 'ABC' },
    { id: 2, name: 'EFG' },
    { id: 3, name: 'MBV' }
];


const server = createServer((req, res) => {
    if (req.url == '/api/users' && req.method == 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.write(JSON.stringify(users));
        res.end()
    } else if (req.url.match((/\/api\/users\/([0-9]+)/)) && req.method == 'GET') {
        const id = req.url.split('/')[3];
        const user = users.find((user_single) => user_single.id === parseInt(id))
        if (user) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.write(JSON.stringify(user));
            res.end()
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 404;
            res.write(JSON.stringify({ message: "Not Found" }));
            res.end()
        }

    }
    else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({ message: "Not Found" }));
        res.end()
    }
});

server.listen(port, () => {
    console.log(`server running at port ${port}`)
})