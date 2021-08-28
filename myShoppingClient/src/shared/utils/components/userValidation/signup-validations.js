import { MDBIcon } from "mdbreact";


export const findErrors = (formData) => {
    const { userName, userEmail, userPassword, userConfirmPassword } = formData;
    const errorList = {};
    errorList.isValid = false;
    if (!userName) {
        errorList.userName = 'Username should not be blank';
    }
    else if (!(/^[a-zA-Z]+$/.test(userName))) {
        errorList.userName = 'Special charcters and spaces not allowed';
    }

    if (!userEmail) {
        errorList.userEmail = 'Email should not be blank';
    }
    else if (!(/\S+@\S+\.\S+/.test(userEmail))) {
        errorList.userEmail = 'Invalid email';
    }

    let regweek = /[a-z A-z]/
    let regmedium = /\d+/
    let regstrong = /.[!,@,#,$,%,^,&,*,(,),_.+]/
    let no = 1;
    let passwordColor = document.querySelector('.error-handle-password');
    let confirmPasswordColor = document.querySelector('.error-handle-confirm-password');
    if (userPassword) {
        if (userPassword.length <= 5 && ((regweek.test(userPassword)) || (regmedium.test(userPassword)) || (regstrong.test(userPassword)))) {
            no = 1;
        }
        if (userPassword.length >= 6 && (
            (regweek.test(userPassword) && regmedium.test(userPassword)) || (regstrong.test(userPassword) && regmedium.test(userPassword)) ||
            (regweek.test(userPassword) && regstrong.test(userPassword))
        )) {
            no = 2;
        }
        if (userPassword.length >= 6 && (regweek.test(userPassword)) && (regmedium.test(userPassword)) && (regstrong.test(userPassword))) {
            no = 3;
        }


        if (no === 1) {
            errorList.userPassword = <MDBIcon icon="frown">&nbsp;Password is weak (password should be greater than 6 alpha numberic charcters with special chracters)</MDBIcon>;
            passwordColor.classList.remove('error-color');
        }
        else if (no === 2) {
            errorList.userPassword = <MDBIcon icon="meh">&nbsp;Password is medium (password should be greater than 6 alpha numberic charcters with special chracters)</MDBIcon>;
            passwordColor.classList.remove('error-color');
        }
        else if (no === 3) {
            errorList.userPassword = <MDBIcon icon="smile-beam">&nbsp;Password is strong</MDBIcon>;
            passwordColor.classList.add('error-color');
            errorList.isValid = true;
        }
    }
    else {
        errorList.userPassword = 'Password required'
        passwordColor.classList.remove('error-color');
    }


    if (userPassword === userConfirmPassword && errorList.isValid) {
        errorList.userConfirmPassword = <MDBIcon icon="smile-beam">&nbsp;Password Matched</MDBIcon>;
        confirmPasswordColor.classList.add('error-color');
        errorList.isValid = true;
    }
    else if (userPassword !== userConfirmPassword && errorList.isValid) {
        errorList.userConfirmPassword = <MDBIcon icon="frown">&nbsp;Password Mismatch</MDBIcon>;
        confirmPasswordColor.classList.remove('error-color');
        errorList.isValid = false;
    }
    else {
        errorList.userConfirmPassword = 'Valid password required';
        confirmPasswordColor.classList.remove('error-color');
    }

    return errorList;
}