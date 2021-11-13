const mysql = require('mysql2');
const path = require('path');
const http = require('http');
const fs = require('fs');
const db = require('./db');
const Folder = db.folder;
http.createServer((req, res) =>{
    console.log("Запрос: "+ req.url);
    if(req.url == '/'){
        sendRes('index.html', "text/html", res);
    }else{
        sendRes(req.url, getType(req.url), res)
    }
}).listen(301, ()=>{
    console.log('server start 3000');
});
function sendRes(url, contentType, res){
    let file = path.join(__dirname + '/static/' + url);
    fs.readFile(file, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.write("file not found");
            res.end();
            console.log('Error 404');
        }else{
            res.writeHead(200, {"Content-Type": contentType});
            res.write(content);
            res.end()
            console.log("Ответ:" + file + "\n Content-Type: " + contentType);
        }
    });
}
function getType(url){
    switch(path.extname(url)){
        case ".html":
            return 'text/html'
        case ".css":
            return 'text/css'
        case ".js":
            return 'text/javascript'
        case ".js":
            return 'application/json'
        default:
            return "application/octate-stream";
    }
}