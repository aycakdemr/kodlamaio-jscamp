export default class EmployeeValidator {

    run(){
        let hasErrors=false;
        if(!this.checkEmployeeRequiredFields || !this.checkEmployeeAgeFieldIsNan){
            hasErrors=true;
        }
        return hasErrors;
    }

    checkEmployeeRequiredFields(employee) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!employee[field]) {
                hasErrors = true
                this.errors.push(
                new DataError(`Validation problem. ${field} is required`, employee))
            }
        }
        return hasErrors
    }

    checkEmployeeAgeFieldIsNan(employee){
        let hasErrors = false
        if (Number.isNaN(Number.parseInt(+employee.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${employee.age} is not a number`, employee))
        }
        return hasErrors
    }
}