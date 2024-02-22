const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const morgan = require("morgan");
const app = express();
const PORT = 3005;
app.use(morgan("combined"));
app.use(
  "/bookingservice",
  createProxyMiddleware({
    target: "http://localhost:3000",
    changeOrigin: true,
  })
);
app.get("/home", (res, req) => {
  req.send("Welcome to the home page");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
