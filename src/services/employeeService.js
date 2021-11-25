import { users } from "../data/users.js"
import EmployeeValidator from "../validationRules/employeeValidator.js"
import DataError from "../models/dataError.js"

export default class EmployeeService {

    
    constructor(loggerService) {
        this.employees = []
        this.errors = []
        
        this.loggerService = loggerService

    }
    loadEmployee(){
        let ev = new EmployeeValidator()
        for (const user of users) {
            if(user.type ==="employee" && ev.run()===false){
                this.employees.push(user)
            }
            else{
                this.errors.push(new DataError("Wrong user type", user))
            }
        }
    }
    addEmployee(employee){
        if(employee.type ==="employee" && this.ev.run()){
            this.employees.push(employee)
        }
        else{
            this.errors.push(new DataError("Wrong user type", employee))
        }
        this.loggerService.log(employee)
    }
    listEmployees() {
        return this.employees
    }

    getEmployeesById(id) {
        return this.employees.find(u=>u.id ===id)
    }

    getEmployeesSorted(){
        return this.employees.sort((employee1,employee2)=>{
            if(employee1.firstName>employee2.firstName){
                return 1;
            }else if(employee1.firstName===employee2.firstName){
                return 0;
            }else{
                return -1
            }
        })
    }
}