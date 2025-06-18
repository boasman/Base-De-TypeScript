

function addNumbers(a: number, b:number){
    return a + b;
}

const addNumbersArrow = (a: number, b:number):string => {
    return `${a + b}`;
}

//si un objeto recibe mas de 3 parametros se recomienda usar una clase como parametro de entrada de la funcion
function multiply(firstName: number, secondName?: number, base:number = 2){
    return firstName * base;
}

interface Character {
    name: string 
    hp: number;
    showHp: () => void;
}

const healCharacter = (character:Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`)
    }
}


healCharacter(strider,10);
strider.showHp();
healCharacter(strider,30);
strider.showHp();




// const result: number = addNumbers(8,2);
// const result2: string = addNumbersArrow(8,2);
// const multiplyResult: number = multiply(25);

// console.log({result, result2, multiplyResult});
// console.log(result);
// console.log({result2});
// console.log(result2);