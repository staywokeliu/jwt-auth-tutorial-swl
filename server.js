const express = require("express");
const app = express();
const PORT = 5123;

const auth = require("./routes/auth");
const post = require("./routes/post");

app.use(express.json());
app.use("/auth", auth);
app.use("/posts", post);


app.get("/", (req, res) => {
    res.send("Hello Express");
})

app.listen(PORT, () => {
    console.log(`サーバを起動中...port: ${PORT}`);
})