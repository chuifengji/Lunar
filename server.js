//server.js
const express = require("express");
const compression = require("compression");
const next = require("next");
const port = parseInt(process.env.PORT, 10) || 8081;
const dev = process.env.NODE_ENV !== "production";
console.log(process.env.NODE_ENV);
console.log({ dev });
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();
  server.use(compression());
  /*路由控制*/
  server.get("/about", (req, res) => {
    return app.render(req, res, "/about", req.query);
  });
  server.get("/", (req, res) => {
    return app.render(req, res, "/index", req.query);
  });
  server.get("/thoughts", (req, res) => {
    return app.render(req, res, "/thoughts", req.query);
  });
  server.get(`/article/:id`, (req, res) => {
    const actualPage = "/article";
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams);
  });
  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
