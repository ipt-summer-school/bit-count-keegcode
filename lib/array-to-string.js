"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ArrayToString(array) {
    return array.reduce(function (a, b) { return a + b; });
}
exports.default = ArrayToString;
