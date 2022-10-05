// Import a module
const http = require('http')

const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'       <p>Hello Class, we are improving our NPM level</p>' +
'    </body>' +
'</html>'

//callback function
const serverHandle = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(content);
  }
  
  const server = http.createServer(serverHandle);
  server.listen(8080)
