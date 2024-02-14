import { IServiceProvider } from "./IServiceProvider";

export class ServiceA implements IServiceProvider{
    serviceDetails(): string {
        return "service A Details.";
    }
    costing(): void {
        console.log("Method  implemented.");
    }
    validity(): void {
        console.log("Method  implemented.");
    }
}