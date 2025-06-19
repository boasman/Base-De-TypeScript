

export function whatsMyType<T>(argument: T) : T{


    return argument;
}

let amIString = whatsMyType<string>('Hola Mundo');
let amINumber = whatsMyType<number>(125);
let amIArray = whatsMyType<number[]>([1,2,5,8]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));