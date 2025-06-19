export interface Passager {
    name:string,
    children?: string[];

}

const passager1: Passager = {
    name: "Elvis",
}

const passager2: Passager = {
    name: "Rosmerys",
    children: ['alysha','Ariadne']
}

const printchildre = ( passager:  Passager) => {

    const howManyChildren = passager.children?.length || 0

    console.log("cuantos hijos tiene ", howManyChildren);
}


printchildre(passager1);