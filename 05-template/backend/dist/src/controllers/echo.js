"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function echo(req, res) {
    res.json({ 'echo': 'Hello, World!' });
}
exports.echo = echo;
