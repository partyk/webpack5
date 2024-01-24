class Clovek {
    constructor(jmeno, vek, pohlavi) {
        this.jmeno = jmeno;
        this.vek = vek;
        this.pohlavi = pohlavi;
    }

    predstavSe() {
        console.log(`Ahoj, jmenuji se ${this.jmeno}, mám ${this.vek} let a jsem ${this.pohlavi}.`);
    }

    narozeniny() {
        this.vek++;
        console.log(`Dnes mám narozeniny! Nyní mi je ${this.vek} let.`);
    }
}

// Příklad použití třídy
const osoba = new Clovek('Jan', 25, 'muž');
osoba.predstavSe();
osoba.narozeniny();
