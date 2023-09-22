import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const port = 3000;
const fooProxy = createProxyMiddleware({
  target: "http://localhost:3001",
  pathRewrite: {
    "^/foo": "/",
  },
});
const barProxy = createProxyMiddleware({
  target: "http://localhost:3002",
  pathRewrite: {
    "^/bar": "/",
  },
});

app.get("/foo", fooProxy);

app.get("/bar", barProxy);

app.listen(port, () => {
  console.log(`Gateway service listening at http://localhost:${port}`);
});
