const fs= require('fs');

//Reading Files

fs.readFile('./docs/blog1.txt', (err,data)=>{
    if(err)
    {
        console.log(err);
    }
   console.log(data.toString());
});

//Writing Files

fs.writeFile('./docs/blog1.txt','Hello Vaibhav',()=>{
    console.log("File has been updated")
});

//Directories

if(!fs.existsSync('./demo')){
    fs.mkdir('./demo',(err)=>{
        if(err)
        {
            console.log(err);
        }
        console.log("folder created");
    })
}else{
    fs.rmdir('./demo',(err)=>{
        if(err){
            console.log(err);
        }
        console.lof("folder deteled");
    })
}

//Deleting Files

if(fs.existsSync('./docs/delete.txt')){
   fs.unlink('./docs/delete.txt' , (err)=>{
    if(err)
    {
        console.log(err);
    }
    console.log("file deleted");
   })
}