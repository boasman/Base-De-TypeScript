

function classDecorator(constructor: any ){

    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override'
    }

}


//@classDecorator
export class SuperClass{
    public myPropterty: string = 'Abc123';

    print(){
        console.log('Hola Mundo');


    }
}

console.log(SuperClass)

const myclas = new SuperClass();

console.log(myclas);