const http = require("http");
const PORT = 8000;

const myServer = http.createServer((req, res) => {
  res.write("<h1>Hey, This is Yash Jain</h1>");
  res.end();
});

myServer.listen(PORT, () => console.log(`Server Started at ${PORT}`));
