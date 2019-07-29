"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const echo = require("../controllers/echo");
router.get('/echo', echo.echo);
module.exports = router;
