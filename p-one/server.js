import http, { request } from 'http'

const PORT=7000;
const node_server=http.createServer((request,response)=>{
    //response.write("Allah Akbar");
    //response.setHeader('Content-Type','text/html');
   // response.statusCode = 404;
    response.writeHead(200,{'Content-Type':'application/json'});

    //response.write(`<h1>Allah Akbar</h1>`)
    response.end(JSON.stringify({
        'message':"Allah Akbar"
    }));
})

node_server.listen(PORT,()=>{
    console.log(`Running on ${PORT}`)
})