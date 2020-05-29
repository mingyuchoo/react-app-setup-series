"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function echo(req, res) {
    res.jsonp({ 'echo': 'Hello, World!' });
}
exports.echo = echo;
