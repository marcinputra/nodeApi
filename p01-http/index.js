const http = require("http");

const port = 3000;

const handler = (req, res) => {
  console.log("Strona działa");
  res.end("<h1>Strona uruchomiona</h1>");
};

const server = http.createServer(handler);

server.listen(port, () => {
  console.log("Serwer działa na porcie:" + port);
});
