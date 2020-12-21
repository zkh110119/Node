const http = require('http'),
    fs = require('fs'),
    path = require('path');
http.createServer(function (req, res) {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    //res.writeHead(200, { 'Content-Type': 'text/plain' });

    // 发送响应数据 "Hello World"
    //res.end('Hello Wolrd!');

    let result = getFileByPath(req);
    if (result) {
        // 内容类型为：text/html
        res.writeHead(result.code, { 'Content-Type': result.contentType });

        // 发送响应文件内容index.html
        res.end(result.data);
    }
    // 发送index.html文件内容
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');

function getFileByPath(req) {
    let path = req.url;
    if (path == '/index') {
        return jumpToPage('/html/index.html');
    }
}

function jumpToPage(pagePath) {
    let buf = fs.readFileSync(path.join(__dirname, pagePath));
    return { code: 200, err: '', contentType: 'text/html', data: buf.toString() };
}