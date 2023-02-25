const express = require("express");
const app = express();
const PORT = 5123;

app.get("/", (req, res) => {
    res.send("Hello Express");
})

app.listen(PORT, () => {
    console.log("サーバを起動中....");
})