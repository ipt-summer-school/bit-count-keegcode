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

    return ArrayToString(register.reverse())
}

function fromDecimalToBinary(num: number, bits: number): string {
    let char: string = '';
    let number = num;
    const power: number = Math.floor(Math.log(num) / Math.log(2));
    for(let i: number = 0; i < bits; ++i) {
        if(i > power) {
            char += '0';
        } else {
            char += number % 2 === 0 ? '0' : '1';
            number = Math.floor(number/2) 
        }
    }
    return ArrayToString(char.split('').reverse())
}

function toAdditionalCode(num: string) {
    const one: string = fromDecimalToBinary(1, num.split('').length);
    const negative = num.split('').map((value: string) => value === "1" ? "0" : "1").reduce((a: string, b: string) => a + b)
    return ArrayToString(fullAdder(negative, one).split(''))
}

function ArrayToString(array: string[]): string {
    return array.reduce((a: string, b: string) => a + b)
}

function bitCount(a: number) {
    if(a < -(2**31) || a > 2**31 - 1) {
        throw new Error('Only 32-bits numbers allowed!')
    } else {
       const binary = fromDecimalToBinary(-a, 32)
       if(a < 0) {
           const negative = toAdditionalCode(binary);
           console.log(binary, negative)
           return ArrayToString(negative.split('').map((value: string) => value === "1" ? "1" : "")).length
       }
       return ArrayToString(binary.split('').map((value: string) => value === "1" ? "1" : "")).length
    }
}

console.log(bitCount(-10))