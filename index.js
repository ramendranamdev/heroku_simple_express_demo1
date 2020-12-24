const express = require("express");
const app = express();

const HOST_PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(HOST_PORT, () => {
  console.log(`Server running on: http://localhost:${HOST_PORT}`);
});
