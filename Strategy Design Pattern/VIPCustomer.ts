import { Customer } from "./Customer";
import { ServiceA } from "./ServiceA";
import { ServiceB } from "./ServiceB";
import { ServiceC } from "./ServiceC";

export class VIPCustomer extends Customer{
    constructor(){
        //customer with default services
        super([new ServiceA(),new ServiceB(),new ServiceC()])
    }
}
