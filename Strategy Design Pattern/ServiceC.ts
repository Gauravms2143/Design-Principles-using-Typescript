import { IServiceProvider } from "./IServiceProvider";

export class ServiceC implements IServiceProvider{
    serviceDetails(): string{
        return "service C Details.";
    }
    costing(): void {
        console.log("Method  implemented.");
    }
    validity(): void {
        console.log("Method  implemented.");
    }
}