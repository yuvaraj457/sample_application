export const findErrorsCheckOut  = (formData) => {
    const {userName, email, phoneNumber, billingAddress} = formData;
    const errorList = {};
    if (!userName) {
        errorList.userName = 'Required user name';
    }
    if (!email) {
        errorList.email = 'Required email';
    }
    if (!phoneNumber) {
        errorList.phoneNumber = 'Required phone number';
    }
    if (!billingAddress) {
        errorList.billingAddress = 'Required billing address';
    }
    return errorList;
}