// node express.js to run
const express = require("express");
const http = require('http');
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/", (req, res) => {
    // posted data
    console.log(req.body.website);
    res.send("success");
    return;
});
http.createServer(app).listen(process.env.PORT || 3030);