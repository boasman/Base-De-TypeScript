

export class Person {
//   public name: string;
//   private address: string;

//   constructor(name: string, address: string) {
//     this.name = name;
//     this.address = address;
//   }

    constructor(
        public name: string,
        private address: string = 'No Address'
    ){}
}

// export class Hero extends Person{

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ){
//         super(realName, 'New York');
//     }

// }


export class Hero{

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public perso: Person
    ){
        // this.person = new Person(realName);
    }

}

const Tony = new Person('Tony ');
const ironman = new Hero('Ironman',45,'Tony',Tony);

console.log(ironman);
