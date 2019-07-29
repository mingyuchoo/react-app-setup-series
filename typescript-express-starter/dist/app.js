"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.use('/', require('./routes/echo'));
app.get('/', (req, res) => {
    res.send('Hello World!');
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
