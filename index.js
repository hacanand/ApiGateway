const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const morgan = require("morgan");
const app = express();
const PORT = 3005;
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
})
app.use(morgan("combined"));
app.use(
  "/bookingservice",
  createProxyMiddleware({
    target: "http://localhost:3005/home",
    changeOrigin: true,
  })
);
app.get("/home", (res, req) => {
  req.send("Welcome to the home page");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
