"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// add controller here
const echo = require("../controllers/echo");
const router = express_1.Router();
router.use('*', (req, res, next) => {
    res.setHeader('Expires', '-1');
    res.setHeader('Cache-Control', 'must-revalidate, private');
    next();
});
// add router here
router.get('/echo', echo.echo);
exports.default = router;
