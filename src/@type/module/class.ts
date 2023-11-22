interface User {
    name: string
    id: number
};

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

// const user: User = new UserAccount('Murphy', 1); // Explained: Cannot redeclare user block-scoped variable
const testUser: User = new UserAccount('Murphy', 1);
console.log(testUser);
