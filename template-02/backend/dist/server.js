"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./src/app");
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
const server = app_1.default.listen(port, () => {
    console.log(`This application listening on port ${port}.`);
});
exports.default = server;
