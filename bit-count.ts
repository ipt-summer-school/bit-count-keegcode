function XOR(a: number, b: number): 0 | 1 {
    return (!a && b) || (a && !b) ? 1 : 0;
}

function AND(a: number, b: number): 0 | 1 {
    return a && b ? 1 : 0;
}

function OR(a: number, b: number): 0 | 1 {
    return a || b ? 1 : 0;
}

function fullAdder(a: string, b: string): string {
    let register: string[] = [];
    let Cinput = 0;
    for(let i = Math.max(a.length, b.length); i >= 0 ; --i) {
        let Sum:  0 | 1 = XOR(XOR(+a[i], +b[i]), Cinput);
        let Cout:  0 | 1 = OR(AND(+a[i], +b[i]), AND(XOR(+a[i], +b[i]), Cinput));
        Cinput = Cout;
        register.push(Sum.toString())
    }

    return register.reduce((a, b) => a + b)
}