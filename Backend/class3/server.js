const os=require('os');
const http=require('http');
const path=require('path');
const fs=require('fs')

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200);
        res.end("successfully load")
    }
    else if((req.url=="/")){
        res.writeHead(200);
        res.end("Home")
    }
    else if((req.url=="/contact")){
        res.writeHead(200);
        res.end("contact")
    }
    else if((req.url=="/service")){
        res.writeHead(200);
        res.end("service")
    }
    else if((req.url=="/sing up")){
        res.writeHead(200);
        res.end("sing up")
    }
    else{
        res.writeHead(400);
        res.end("not found")
    }
});
server.listen(3000,()=>{
    console.log("server is ruuning at 3000")
});