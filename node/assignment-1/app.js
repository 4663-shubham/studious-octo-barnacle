const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit>Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>List</title></head>");
    res.write(
      "<body><p>Skumar practice time don't bother<p><li>qwe</li><li>asd</li></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const pasreBody = Buffer.concat(body).toString();
      console.log(pasreBody.split("=")[1]);
    });
    res.statusCode = 303;
    res.setHeader("Location", "/");
    res.end();
  }
});

server.listen(3000);
