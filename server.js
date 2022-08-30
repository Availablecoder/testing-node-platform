const http = require("http");

const hostname = "0.0.0.0";
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Testing Zeet platform");
});

server.listen(port, hostname, () => {
  console.log(`Server is running ar port ${port}`);
});
