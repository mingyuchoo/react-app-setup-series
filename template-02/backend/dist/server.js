"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
const app_1 = require("./src/app");
=======
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv/config");
const routes_1 = require("./routes");
const app = express();
app.use(express.static(path.join(__dirname, '../../frontend/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes_1.default);
// serve index page from frontend
app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../../frontend/public/index.html'));
});
// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handle
app.use((err, req, res, next) => {
    // render the error page
    res.status(err.status || 500);
    res.json({
        message: err.message,
        data: err.data
    });
});
>>>>>>> master
// Normalize a port into a number, string, or false.
const normalizePort = (val) => {
    let port = parseInt(val, 10);
    if (isNaN(port))
        return val;
    if (port >= 0)
        return port;
    return false;
};
// server setting
const port = normalizePort(process.env.PORT || '3000');
const devPort = normalizePort(process.env.PORT || '3001');
// listen
<<<<<<< HEAD
const server = app_1.default.listen(port, () => {
=======
const server = app.listen(port, () => {
>>>>>>> master
    console.log(`This application listening on port ${port}.`);
});
exports.default = server;
