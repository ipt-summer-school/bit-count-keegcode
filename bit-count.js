function XOR(a, b) {
    return (!a && b) || (a && !b) ? 1 : 0;
}
function AND(a, b) {
    return a && b ? 1 : 0;
}
function OR(a, b) {
    return a || b ? 1 : 0;
}
function fullAdder(a, b) {
    var register = [];
    var Cinput = 0;
    for (var i = Math.max(a.length, b.length); i >= 0; --i) {
        var Sum = XOR(XOR(+a[i], +b[i]), Cinput);
        var Cout = OR(AND(+a[i], +b[i]), AND(XOR(+a[i], +b[i]), Cinput));
        Cinput = Cout;
        register.push(Sum.toString());
    }
    return ArrayToString(register.reverse());
}
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
    return ArrayToString(char.split('').reverse());
}
function toAdditionalCode(num) {
    var one = fromDecimalToBinary(1, num.split('').length);
    var negative = num.split('').map(function (value) { return value === "1" ? "0" : "1"; }).reduce(function (a, b) { return a + b; });
    return ArrayToString(fullAdder(negative, one).split(''));
}
function ArrayToString(array) {
    return array.reduce(function (a, b) { return a + b; });
}
function bitCount(a) {
    if (a < -(Math.pow(2, 31)) || a > Math.pow(2, 31) - 1) {
        throw new Error('Only 32-bits numbers allowed!');
    }
    else {
        var binary = fromDecimalToBinary(-a, 32);
        if (a < 0) {
            var negative = toAdditionalCode(binary);
            console.log(binary, negative);
            return ArrayToString(negative.split('').map(function (value) { return value === "1" ? "1" : ""; })).length;
        }
        return ArrayToString(binary.split('').map(function (value) { return value === "1" ? "1" : ""; })).length;
    }
}
console.log(bitCount(-10));
