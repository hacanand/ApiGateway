const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3005;
app.use(morgan('combined'));
app.get('/home', (res, req) => {
    req.send('Welcome to the home page');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
    