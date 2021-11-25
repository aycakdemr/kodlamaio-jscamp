import CustomerService from "../services/CustomerService.js"
import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"


let logger1 = new MongoLogger()
let customerService = new CustomerService(logger1)

let customer = new Customer(1,"Seda","Yılmaz","Ankara","fdgdfg");

customerService.addCustomer(customer)
customerService.loadCustomer()
console.log(customerService.customers)
console.log(customerService.errors)
