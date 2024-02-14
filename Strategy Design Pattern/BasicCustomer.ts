import { Customer } from "./Customer";
import { ServiceA } from "./ServiceA";
export class BasicCustomer extends Customer{
    constructor(){
        //customer with default services
        super([new ServiceA()])
    }
}
