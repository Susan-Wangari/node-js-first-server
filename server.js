const http = require('http');

//creating a server
const server = http.createServer(function(req, res) {
    //will display plain text
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    //displays a json file
    // res.writeHead(200, {'Content-Type': 'application/json'});
    //displays html file
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
    <html>
    <head>
    <title>My web page</title>
    </head>
    <body style="background:black; color: white; text-align: center">
    <h1>Susan Wangari</h1>
    <p>I am a Software developer specializing in back end development</p>
    <p>To contact me please input your message and your email address below.<br> <br>
    <input type="text" placeholder="message here" required><br><br>
    <input type="email" placeholder="email address" required><br><br>
    <input type="submit" required>
    </body>
    </html>`)
    // res.end("Welcome to Kenya")
//     res.end(`
// {
//     "name": "Susan",
//     "country": "Kenya",
//     "hobby": "Singing"
// }`);
});

//create a port
server.listen(3000, '127.0.0.1');

console.log('successfully created your first server');