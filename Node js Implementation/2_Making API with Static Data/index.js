const http = require("http");
const data = require("./data");

const PORT = 8000;

const myServer = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "applicationjson" });
  res.write(JSON.stringify(data));
  res.end();
});

myServer.listen(PORT, () => console.log(`Server Started at ${PORT}`));
