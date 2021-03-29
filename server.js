const http = require('http');
const fs= require('fs');

const server = http.createServer((req,res) =>{
    console.log(req.url,req.method);
 
//set header contnent type
  // res.setHeader('Content-Type','text/plain');
  // res.write('Hello Shivam');
  // res.end();
 //returning html pages

   res.setHeader('Content-Type',"text/html");
    
   let path ='./views/';
   switch(req.url){
       case '/':
           path += 'index.html';
           break;
        case '/about':
            path += 'about.html';
            break;
         default:
             path += '404.html';
             break;
                   
   }








   fs.readFile(path,(err,data)=>{
       if(err)
       {
           console.log(err);
           res.end();
       }else{
           res.write(data);
           res.end();
       }
   })
})


server.listen(3000,'localhost',()=>{
    console.log("listening to server on 3000")
})