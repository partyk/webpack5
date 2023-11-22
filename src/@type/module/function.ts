// Přímá deklarace typů pro vstupní parametry a návratovou hodnotu
function soucet(a: number, b: number): number {
    return a + b;
}

// Příklad použití
const vysledek: number = soucet(5, 10);
console.log(vysledek); // Vypíše 15

// Definice rozhraní pro typy vstupních parametrů
interface Osoba {
    jmeno: string
    vek: number
}

// Definice rozhraní pro typ návratové hodnoty
interface IPozdrav {
    text: string
}

// Funkce s použitím rozhraní
function pozdrav1(osoba: Osoba): IPozdrav {
    return {text: `Ahoj, ${osoba.jmeno}!`};
}

// Příklad použití
const clovek: Osoba = {jmeno: 'Jan', vek: 30};
const pozdravText: IPozdrav = pozdrav1(clovek);
console.log(pozdravText.text); // Vypíše "Ahoj, Jan!"
