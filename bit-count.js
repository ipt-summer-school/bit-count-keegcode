"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var array_to_string_1 = __importDefault(require("./lib/array-to-string"));
var binary_converters_1 = require("./lib/binary-converters");
function bitCount(a) {
    if (a < -(Math.pow(2, 31)) || a > Math.pow(2, 31) - 1) {
        throw new Error('Only 32-bits numbers allowed!');
    }
    else {
        var binary = binary_converters_1.fromDecimalToBinary(-a, 32);
        if (a < 0) {
            var negative = binary_converters_1.toAdditionalCode(binary);
            return array_to_string_1.default(negative.split('').map(function (value) { return value === "1" ? "1" : ""; })).length;
        }
        return array_to_string_1.default(binary.split('').map(function (value) { return value === "1" ? "1" : ""; })).length;
    }
}
