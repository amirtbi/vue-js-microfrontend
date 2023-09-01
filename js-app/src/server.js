const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use("/", express.static(path.resolve(__dirname, "../dist")));
// Routers

app.get("/", (req, res) => {
  const pathToHtml = path.resolve(__dirname, "../dist/index.html");

  const contentFromHtmlFile = fs.readFileSync(pathToHtml, "utf-8");
  res.send(contentFromHtmlFile);
  console.log("Requses sent");
});
app.listen("3000", () => {
  console.log("app is running in http://localhost:3000/");
});
