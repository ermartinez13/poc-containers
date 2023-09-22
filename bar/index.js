import express from "express";

const app = express();
const port = 3002;

app.get("/", (req, res) => {
  res.status(200).send("Hola mundo!");
});

app.listen(port, () => {
  console.log(`Bar service listening at http://localhost:${port}`);
});
