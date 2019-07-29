"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function echo(req, res) {
    res.json(req.query);
}
exports.echo = echo;
