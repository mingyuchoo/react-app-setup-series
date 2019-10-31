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
const server_1 = require("../server");
describe('app.test', () => {
    const req = request(server_1.default);
    it('GET /', () => __awaiter(this, void 0, void 0, function* () {
        const res = yield req.get('/').expect(200);
        chai_1.expect(res.text).to.equal('Hello World!');
    }));
    it('GET /not_found', () => __awaiter(this, void 0, void 0, function* () {
        const res = yield req.get('/not_found').expect(404);
        chai_1.expect(res.body.message).to.equal('Not Found');
    }));
});
