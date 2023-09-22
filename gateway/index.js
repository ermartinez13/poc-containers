import express from "express";

const app = express();
const port = 3000;

app.get("/foo", (req, res) => {});

app.get("/bar", (req, res) => {});

app.listen(port, () => {
  console.log(`Gateway service listening at http://localhost:${port}`);
});
