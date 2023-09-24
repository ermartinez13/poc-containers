import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const port = 3000;
const fooHostname = process.env.FOO_HOSTNAME || "localhost";
const barHostname = process.env.BAR_HOSTNAME || "localhost";
const fooProxy = createProxyMiddleware({
  target: `http://${fooHostname}:3001`,
  pathRewrite: {
    "^/foo": "/",
  },
});
const barProxy = createProxyMiddleware({
  target: `http://${barHostname}:3002`,
  pathRewrite: {
    "^/bar": "/",
  },
});

app.get("/foo", fooProxy);

app.get("/bar", barProxy);

app.listen(port, () => {
  console.log(`Gateway service listening at http://localhost:${port}`);
});
