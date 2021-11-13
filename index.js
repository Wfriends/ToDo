let config = require('./config'),
    mysql = require('mysql2'),
    path = require('path'),
    http = require('http'),
    fs = require('fs'),
    conn = mysql.createConnection(config);
http.createServer((req, res) =>{
    console.log(req.url);
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
        }else{
            res.writeHead(200);
            res.write(content);
            res.end();
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
            return "application/octate-stream"
    }
}