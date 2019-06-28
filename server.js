const path = require("path");
const express = require("express");
const app = express();

const publicPath = path.join(__dirname, "public");
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.listen(PORT);
