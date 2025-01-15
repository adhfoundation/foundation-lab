"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
exports.default = default_1;
const http_1 = __importDefault(require("k6/http"));
const k6_1 = require("k6");
exports.options = {
    vus: 2000,
    duration: '30s',
};
function default_1() {
    const res = http_1.default.get('https://test.k6.io');
    (0, k6_1.check)(res, {
        'status is 200': (r) => r.status === 200,
    });
    (0, k6_1.sleep)(1);
}
