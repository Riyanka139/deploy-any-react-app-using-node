const express = require("express");
const path = require("path");

const basePath = "";
const app = express();
const port = 5000;

app.use(express.static(path.resolve(__dirname + "/build")));

app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname + "/build/index.html"));
});

app.listen(port, () => {
  console.log("listening on port " + port);
  console.log(`http://localhost:${port}`);
});
