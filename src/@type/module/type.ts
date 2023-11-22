// Definice rozhraní pro vstupní parametry
interface IParametryFunkce {
    parametr1: string
    parametr2: number
    parametr3: boolean
}

// Funkce s použitím rozhraní
function prikladFunkce(parametry: IParametryFunkce): void {
    // Zde můžete použít vlastnosti z rozhraní ParametryFunkce
    console.log(parametry.parametr1);
    console.log(parametry.parametr2);
    console.log(parametry.parametr3);
}

// Příklad použití
const vstupniParametry: IParametryFunkce = {
    parametr1: 'Hodnota 1',
    parametr2: 42,
    parametr3: true,
};

prikladFunkce(vstupniParametry);
