// arrays
const aon: [number, string, number, unknown] = [1,'2',3, {}];
const [first, second, third] = aon;
const mult = (a: number, b: number): number => a * b;

mult(first, third);
// mult(first, second); // undefined
