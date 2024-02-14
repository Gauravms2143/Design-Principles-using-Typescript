import { VIPCustomer } from "./VIPCustomer";
import { NormalCustomer } from "./NormalCustomer";
import { BasicCustomer } from "./BasicCustomer";

//Strategy Pattern
//vipCustomer includes serrvices by default s1,s2,s3
const vipCustomer=new VIPCustomer();
console.log("VIP customer package details ");
vipCustomer.details()
//NormalCustomer includes serrvices by default s1,s2,
const normalCustomer=new NormalCustomer();
console.log("Normal customer package details ");
normalCustomer.details()
// basicCustomer includes serrvices by default s1
const basicCustomer=new BasicCustomer();
console.log("Basic customer package details ");
basicCustomer.details()
