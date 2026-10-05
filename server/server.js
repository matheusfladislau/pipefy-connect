import express from "express";

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://app.pipefy.com");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get("/health", (req, res) => res.json({ status: "UP" }));
app.use(express.static("public"));

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App UI available http://localhost:${port}`);
});
