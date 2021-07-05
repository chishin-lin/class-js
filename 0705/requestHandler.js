var querystring = require("querystring");

function start(response, postData) {
  console.log("Request handler 'start' was called.");
  //return "Hello Start";
  var body =
    "<html>" +
    "<head>" +
    '<meta http-equiv="Content-Type" content="text/html ; ' +
    'charset=UTF-8"  />' +
    "</head>" +
    "<body>" +
    '<form action="/upload" method="post">' +
    '<textarea name=:"text" rows="20" cols=:60"></textarea>' +
    '<input type="submit" value="Submit text" />' +
    "</form>" +
    "</body>" +
    "</html>";

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(body);
  response.end();
}
function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, { "Content-Type": "text/html; charset=uft8" });
  response.write("you've sant [" + decodeURI(postData) + "]", "utf8");
  response.end();
}

exports.upload = upload;
exports.start = start;
