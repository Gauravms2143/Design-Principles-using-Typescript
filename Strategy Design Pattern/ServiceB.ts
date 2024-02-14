import { IServiceProvider } from "./IServiceProvider";

export class ServiceB implements IServiceProvider{
    serviceDetails(): string {
        return "service B Details.";
    }
    costing(): void {
        console.log("Method  implemented.");
    }
    validity(): void {
        console.log("Method  implemented.");
    }
}