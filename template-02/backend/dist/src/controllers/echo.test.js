"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const request = require("supertest");
const app_1 = require("../app");
describe('echo.test', () => {
    const req = request(app_1.default);
    it('GET /echo?msg', () => __awaiter(this, void 0, void 0, function* () {
        const msg = 'message';
        const res = yield req.get(`/echo?msg=${msg}`).expect(200);
        chai_1.expect(res.body.msg).to.equal(msg);
    }));
});
