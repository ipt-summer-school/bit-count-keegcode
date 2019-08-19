"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var array_to_string_1 = __importDefault(require("./array-to-string"));
function XOR(a, b) {
    return (!a && b) || (a && !b) ? 1 : 0;
}
exports.XOR = XOR;
function AND(a, b) {
    return a && b ? 1 : 0;
}
exports.AND = AND;
function OR(a, b) {
    return a || b ? 1 : 0;
}
exports.OR = OR;
function fullAdder(a, b) {
    var register = [];
    var Cinput = 0;
    for (var i = Math.max(a.length, b.length); i >= 0; --i) {
        var Sum = XOR(XOR(+a[i], +b[i]), Cinput);
        var Cout = OR(AND(+a[i], +b[i]), AND(XOR(+a[i], +b[i]), Cinput));
        Cinput = Cout;
        register.push(Sum.toString());
    }
    return array_to_string_1.default(register.reverse());
}
exports.fullAdder = fullAdder;
