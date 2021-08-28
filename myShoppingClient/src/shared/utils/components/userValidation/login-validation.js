export const findErrorsLogin  = (formData) => {
    const {email, password} = formData;
    const errorList = {}
    if (!email) {
        errorList.email = 'Required email';
    }
    if (!password) {
        errorList.password = 'Required password';
    }
    return errorList;
}