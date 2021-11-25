import EmployeeService from "../services/EmployeeService.js"
import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Employee from "../models/employee.js"


let logger1 = new MongoLogger()
let employeeService = new EmployeeService(logger1)

let employee = new Employee(1,"Seda","Yılmaz","Ankara",20,12000);

employeeService.addEmployee(employee)
employeeService.loadEmployee()
console.log(employeeService.employees)
console.log(employeeService.errors)
