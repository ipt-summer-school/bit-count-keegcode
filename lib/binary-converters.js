"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var array_to_string_1 = __importDefault(require("./array-to-string"));
var combinational_circuits_1 = require("./combinational-circuits");
function fromDecimalToBinary(num, bits) {
    var char = '';
    var number = num;
    var power = Math.floor(Math.log(num) / Math.log(2));
    for (var i = 0; i < bits; ++i) {
        if (i > power) {
            char += '0';
        }
        else {
            char += number % 2 === 0 ? '0' : '1';
            number = Math.floor(number / 2);
        }
    }
    return array_to_string_1.default(char.split('').reverse());
}
exports.fromDecimalToBinary = fromDecimalToBinary;
function toAdditionalCode(num) {
    var one = fromDecimalToBinary(1, num.split('').length);
    var negative = array_to_string_1.default(num.split('').map(function (value) { return value === "1" ? "0" : "1"; }));
    return array_to_string_1.default(combinational_circuits_1.fullAdder(negative, one).split(''));
}
exports.toAdditionalCode = toAdditionalCode;
