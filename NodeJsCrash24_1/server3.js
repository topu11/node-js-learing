import { createServer } from 'http'
const port = process.env.PORT;
const users = [
    { id: 1, name: 'ABC' },
    { id: 2, name: 'EFG' },
    { id: 3, name: 'MBV' }
];

const entryMiddleware=(request,response,next)=>{
    response.setHeader('Content-Type', 'application/json');
    next();
}

const getAllUser=(req,res)=>{
    res.statusCode = 200;
    res.write(JSON.stringify(users));
    res.end()
}

const getnotfound=(req,res)=>{
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Not Found" }));
    res.end()
}

const postDataHandler=(req,res)=>{
   let body='';
   req.on('data',(chunk)=>{
         body=body+chunk.toString();  
   })
   req.on('end',()=>{
      const newUser=JSON.parse(body);
      users.push(newUser);
      res.statusCode=201;
      res.write(JSON.stringify(newUser));
      res.end();
   })
}

const getUserByID=(req, res)=>{
    const id = req.url.split('/')[3];
    const user = users.find((user_single) => user_single.id === parseInt(id))
    if (user) {
        
        res.statusCode = 200;
        res.write(JSON.stringify(user));
        res.end()
    } else {
        
        res.statusCode = 404;
        res.write(JSON.stringify({ message: "Not Found" }));
        res.end()
    }
}

const server = createServer((req, res) => {
    entryMiddleware(req, res,()=>{
        if (req.url == '/api/users' && req.method == 'GET') {
            getAllUser(req,res);
           
        } else if (req.url.match((/\/api\/users\/([0-9]+)/)) && req.method == 'GET') {
            getUserByID(req,res)
        }else if (req.url == '/api/add/user' && req.method == 'POST') {
            postDataHandler(req,res)
        }
        else {
            
            getnotfound(req,res);
        }
    })
});

server.listen(port, () => {
    console.log(`server running at port ${port}`)
})