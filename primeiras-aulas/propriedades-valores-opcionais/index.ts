type Customer = {
    firstName: string;
    lastName?: string;
    age: number;
}

const newCustomer: Customer = {
    firstName: "Kayo",
    age: 28
}

function printName(firstName: string, lastName?: string) {
    console.log(`O primeiro nome é ${firstName}`)
    console.log(`O primeiro nome é ${lastName}`)
}

printName('Kayo');

printName('kayo', 'alarcon')