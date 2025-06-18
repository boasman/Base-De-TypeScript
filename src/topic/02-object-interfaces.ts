
//arreglos 

const skills : string[] = ['Bash', 'Counter', 'Healing'];

console.log(skills);

//Interfaces 
interface Charater{
    name: string;
    hp: number;
    skills: string[],
    hometown?: string //howmtown = string |  underfine
}

// obj
const strider: Charater  = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash','Counter'],
}

strider.hometown = 'Rivendell';

console.log(strider);

console.table(strider);