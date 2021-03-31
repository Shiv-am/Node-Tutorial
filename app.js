const express = require('express');

//creating react app

const app = express();

//Listening to server
app.listen(3000);

app.get('/',(req,res)=>{
    res.send('<p>Hii Shivam</p>');
})