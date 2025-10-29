const http = require("node:http");

const setver = http.createServer((req, res) => {
  res.write(
    "<h1 style='font-family: Arial, Helvetica, sans-serif; color:gray;'>Hello World!</h1>"
  );
  res.end();
});

setver.listen(3000);
