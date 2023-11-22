// Definice interface pro objekt s konkrétními vlastnostmi
interface Osoba {
    jmeno: string
    vek: number
}

// Příklad použití
const osoba: Osoba = {
    jmeno: 'John',
    vek: 30,
};

// Definice interface pro funkci s konkrétními parametry a návratovým typem
type FunkcePozdravu = (jmeno: string) => string;

// Příklad použití
const pozdravFunkce: FunkcePozdravu = (jmeno) => {
    return `Ahoj, ${jmeno}!`;
};

const pozdrav: string = pozdravFunkce('Alice');
console.log(pozdrav); // Vypíše "Ahoj, Alice!"
