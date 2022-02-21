const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
    const url = req.url;
    const method = req.method;
    // creating a file by script only
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Another Way !</title></head>");
        res.write(
            '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
        );
        res.write("</html>");
        return res.end();
    }
    // creating a file and pushing data through input from user
    if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => { //req.on(data) is a event listner with data reading.
            console.log(chunk);
            body.push(chunk);
        });
        req.on("end", () => { //req.on(end) is a event listner with parsing.
            const paresedBody = Buffer.concat(body).toString();
            //console.log(paresedBody);
            const message = paresedBody.split("=")[1];
            fs.writeFileSync("message.txt", message);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        });
    }
    //console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>First Foot</title></head>");
    res.write("<body><h1>Server up!</h1></body>");
    res.write("</html>");
    res.end();
});

server.listen(3000);
