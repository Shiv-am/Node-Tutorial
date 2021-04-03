const express = require('express');

//Registring view Engine

app.set('view engine','ejs');

//Creating Middleware
app.use((req,res,next)=>{
    console.log('new request made');
    console.log('host',res.hostname());
    console.log('path',res.path());
    console.log('method',req.method());
})




//creating react app

const app = express();

//Listening to server
app.listen(3000);

app.get('/',(req,res)=>{
    //res.send('<p>Hii Shivam</p>');
    res.sendFile('./views/index.html',{root: __dirname});
})

app.get('/about',(req,res)=>{
    //res.send('<p>Hii This is about page</p>');

    res.sendFile('./views/about.html',{root: __dirname});
})

//Redirects
app.get('/about-us',(req,res)=>{
    res.redirect('./about');
})

//404 Page

app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root: __dirname});
})