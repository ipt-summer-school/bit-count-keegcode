import ArrayToString from './array-to-string';
import { fullAdder } from './combinational-circuits';

export function fromDecimalToBinary(num: number, bits: number): string {
        let char: string = '';
        let number: number = num;
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
    
export function toAdditionalCode(num: string): string {
        const one: string = fromDecimalToBinary(1, num.split('').length);
        const negative: string = ArrayToString(num.split('').map((value: string) => value === "1" ? "0" : "1"))
        return ArrayToString(fullAdder(negative, one).split(''))
}