export default function ArrayToString(array: string[]): string {
    return array.reduce((a: string, b: string) => a + b)
}