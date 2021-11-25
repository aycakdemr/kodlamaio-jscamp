import { users } from "../data/users.js"
import CustomerValidator from "../validationRules/customerValidator.js"
import DataError from "../models/dataError.js"

export default class CustomerService {

    

    

    constructor(loggerService) {
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
        console.log("User component yüklendi")
    }
    loadCustomer(){
        let cv = new CustomerValidator()
        for (const user of users) {
            if(user.type ==="customer" && cv.run()===false){
                this.customers.push(user)
            }
            else{
                this.errors.push(new DataError("Wrong user type", user))
            }
        }
    }
    addCustomer(customer){
        if(customer.type ==="customer" && this.cv.run()){
            this.customers.push(customer)
        }
        else{
            this.errors.push(new DataError("Wrong user type", customer))
        }
        this.loggerService.log(customer)
    }
    listCustomers() {
        return this.customers
    }

    getCustomerById(id) {
        return this.customers.find(u=>u.id ===id)
    }

    getCustomersSorted(){
        return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName>customer2.firstName){
                return 1;
            }else if(customer1.firstName===customer2.firstName){
                return 0;
            }else{
                return -1
            }
        })
    }
}