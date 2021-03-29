const http = require('http');

const server = http.createServer((req,res) =>{
    console.log(req.url,req.method);
 
//set header contnent type
   res.setHeader('Content-Type','text/plain');
   res.write('Hello Shivam');
   res.end();




})


server.listen(3000,'localhost',()=>{
    console.log("listening to server on 3000")
})