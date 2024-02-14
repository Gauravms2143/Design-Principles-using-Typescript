import { Customer } from "./Customer";
import { ServiceA } from "./ServiceA";
import { ServiceB } from "./ServiceB";
export class NormalCustomer extends Customer{
    constructor(){
        //customer with default services
        super([new ServiceA(),new ServiceB()])
    }
}
