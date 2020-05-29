"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv/config");
const routes_1 = require("./routes");
const app = express();
app.use(express.static(path.join(__dirname, '../../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes_1.default);
// serve index page from frontend
app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../../public/index.html'));
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
exports.default = app;
