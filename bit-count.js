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
    return register.reduce(function (a, b) { return a + b; });
}
console.log(fullAdder('0100000', '0000001'));
