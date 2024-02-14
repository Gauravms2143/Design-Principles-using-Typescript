import {IServiceProvider} from './IServiceProvider';
export interface ICustomerType{
    details():void
    updatePackage(iServiceProvider:IServiceProvider[]):boolean
}