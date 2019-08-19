import ArrayToString from './lib/array-to-string';
import { fromDecimalToBinary, toAdditionalCode } from './lib/binary-converters';

function bitCount(a: number): number {
    if(a < -(2**31) || a > 2**31 - 1) {
        throw new Error('Only 32-bits numbers allowed!')
    } else {
       const binary: string = fromDecimalToBinary(-a, 32)
       if(a < 0) {
           const negative: string = toAdditionalCode(binary);
           return ArrayToString(negative.split('').map((value: string) => value === "1" ? "1" : "")).length
       }
       return ArrayToString(binary.split('').map((value: string) => value === "1" ? "1" : "")).length
    }
}