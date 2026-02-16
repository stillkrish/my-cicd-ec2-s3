const http = require("http");

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify({
    ok: true,
    message: "Hello from EC2 🚀",
    time: new Date().toISOString()
  }));
}).listen(port, () => {
  console.log(`Server running on port ${port}`);
});

