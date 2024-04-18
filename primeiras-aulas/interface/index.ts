interface ICustomer {
    name: string;
    age: number;
}

interface IAdress {
    street: string;
}

interface ICustomerProfile extends ICustomer, IAdress {
    id: number | string;
}

const newProfile: ICustomerProfile = {
    name: 'kayo',
    age: 28,
    street: 'rua que sobe e desce',
    id: 1
}


interface TCustomer {
    name: string;
    age: number;
}

interface TAdress {
    street: string;
}


type TCustomerProfile = TCustomer & TAdress;

const newProfile2: TCustomerProfile = {
    name: 'kayo',
    age: 28,
    street: 'rua que sobe e desce'
}