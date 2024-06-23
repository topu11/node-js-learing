import { error } from 'console';
import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const port = process.env.PORT;
const __filename=url.fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
//console.log(__filename,__dirname)

const server = http.createServer(async (request, response) => {
    //response.setHeader('Content-Type','text/plain') 
    //response.setHeader('Content-Type','text/html') 
    //response.statusCode=200;
    //response.write(`<h1 style="background-color:blue">Allah Akbar<h1>`);
    //response.end();
    //console.log(request.url);
    // console.log(request.method);
    //response.writeHead(200,{'Content-Type':'application/json'});
    //response.write(JSON.stringify({'message':'Allah Akbar '}));
    // response.writeHead(200,{'Content-Type':'text/html'});
    // response.write(`<h1 style="background-color:blue">Allah Akbar<h1>`);
    // response.end();
   // console.log(__dirname)
   // console.log(__filename)
    try {
        if (request.method === 'GET') {
            let filePath;
            if (request.url == "/") {
                filePath=path.join(__dirname,'public','index.html')
            } else if (request.url == "/about") {
                filePath=path.join(__dirname,'public','about.html')
            } else {
                response.writeHead(404, { 'Content-Type': 'text/html' });
                response.end(`<h1>Not Found<h1>`);
            }
            const data=await fs.readFile(filePath)
            response.setHeader('Content-Type','text/html') 
            response.write(data);
            response.end();
        }else
        {
            throw new error('Method not Allowed');
        }
    } catch (error) {
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.end(`<h1>Server Error<h1>`);
    }

})

server.listen(port, () => {
    console.log(`server running at port ${port}`)
})