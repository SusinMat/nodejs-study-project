const http = require("node:http");

const server = http.createServer();

server.on("request", (request, response) => {
    if (request.url === "/life-check") {
        const responseBody = "I'm alive.";
        response.statusCode = 200;
        response.setHeader("Content-Type", "text.plain");
        response.write(responseBody);
        response.end();
    }
});

server.listen(4080, "0.0.0.0", () => {
    console.log("Server has started on:", server.address());
});
