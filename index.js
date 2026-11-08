
const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("School booking backend is running! test");
});

app.listen(port, () => {
    console.log("Server running on port test " + port);
});
