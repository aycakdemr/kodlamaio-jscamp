export default class CustomerValidator {

    run(){
        let hasErrors=false;
        if(!this.checkCustomersRequiredFields || !this.checkCustomersAgeFieldIsNan){
            hasErrors=true;
        }
        return hasErrors;
    }

    checkCustomersRequiredFields(customer) {
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!customer[field]) {
                hasErrors = true
                this.errors.push(
                new DataError(`Validation problem. ${field} is required`, customer))
            }
        }
        return hasErrors
    }
    checkCustomersAgeFieldIsNan(customer){
        let hasErrors = false
        if (Number.isNaN(Number.parseInt(+customer.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${customer.age} is not a number`, customer))
        }
        return hasErrors
    }

}