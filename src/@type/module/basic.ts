// Types by Inference // Typy odvozením
// TypeScript zná jazyk JavaScript a v mnoha případech za vás vygeneruje typy. Například při vytváření proměnné a jejím přiřazení ke konkrétní hodnotě, TypeScript použije hodnotu jako svůj typ.
// automatické přiřazení typu se dělá automaticky u hodnot primitivního typu
const helloWorld = 'Hello World';

console.log(helloWorld);

// Defining Types
// TS můžeme použít několik způsobů návrhových vzorů.
const user = {
    name: 'Hayes',
    id: 0,
};

console.log(user);

// interface by pak vypadl
interface User {
    name: string
    id: number
}

// a pouziti
const user2: User = {
    name: 'Karel',
    id: 12,
};

console.log(user2);
