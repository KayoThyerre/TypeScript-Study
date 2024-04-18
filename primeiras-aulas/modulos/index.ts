import { Customer, paginationPerPage } from "./customer";

interface SpecialCustomer extends Customer {
    couponQuantity: number
}

const especialCustomer: SpecialCustomer = {
    couponQuantity: 10,
    name:'kayo',
    age: 28
}