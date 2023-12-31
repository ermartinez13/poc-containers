import express from "express";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(port, () => {
  console.log(`Foo service listening at http://localhost:${port}`);
});
