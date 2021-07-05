var http = require("http");
//const { start } = require("repl");
var url = require("url");
function start(route, handle) {
  function onRequest(request, response) {
    var postData = "";
    var pathName = url.parse(request.url).pathName;

    console.log("Request for ", pathName, " received.");

    request.setEncoding("utf8");
    request.addListener("data", function (postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '" + postDataChunk + "'.");
    });
    request.addListener("end", function () {
      route(handle, pathName, response, postData);
    });
    //route(handle, pathName, response);
    //console.log("Reques recieved.");

    //var content = route(handle, pathName, response);

    //response.writeHead(200, { "Content-Type": "text/html" });
    /*if(pathName==="/")
    response.write('Hello World');
    else if(pathName==="/test")
    response.write('Testing Page!');
    else
    response.write('Not Found!')

    response.write("Hello World");*/

    //response.write(content);
    //response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}
exports.start = start;
