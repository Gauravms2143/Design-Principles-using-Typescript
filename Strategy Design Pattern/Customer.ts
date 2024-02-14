import { ICustomerType } from "./ICustomerType";
import { IServiceProvider } from "./IServiceProvider";

export abstract class Customer implements ICustomerType{
    iServiceProviders: IServiceProvider[] = [];
    constructor(iServiceProvider:IServiceProvider[]){
        this.iServiceProviders=iServiceProvider;
    }
    details(): void {
        this.iServiceProviders.forEach(service => {
            console.log("Service - ",service.serviceDetails());
        });
    }
   
    // ...
    // const array: string[] = [ 'Scooby', 'Dooby', 'Dooby', 'Doo' ];

    updatePackage(iServiceProvider:IServiceProvider[]): boolean {
        if(this.iServiceProviders.length==0){
            return false;
        }else{
            // we can write any business logic to check if service already exist or not ,or anything we wish.
            this.iServiceProviders=iServiceProvider;
            return true;
        }
    }

}