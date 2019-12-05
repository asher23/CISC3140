// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => res.send("Hello World!"));

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

var connect = require("connect");
var serverStatic = require("serve-static");

connect().use(serverStatic(__dirname)).listen(8080, function() {
    console.log("Server running on port 8080...")
});