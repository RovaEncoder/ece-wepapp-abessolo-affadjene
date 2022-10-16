const http = require("http");
//import of root
const port = 8080;
const handles = require("./handles");
const server = http.createServer(handles.serverHandle);
server.listen(port);
