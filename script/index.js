function validateFields(){
    const email = document.getElementById('logemail').value
    const emailValid = isEmailValid(email)

        document.getElementById('recover-button').disabled = !emailValid;



    const password = document.getElementById('logpass').value
    const passwordValid = isPasswordValid(password)

    document.getElementById('login-button').disabled = !emailValid || !passwordValid
    
    tooglePasswordEror()

}

function tooglePasswordEror(){
    const password = document.getElementById('logpass').value
    if(!password){
        document.getElementById('logpass-error').style.display = "block"
    }
}

function isEmailValid(a){
    if (!a){
        return false
    }
    return validateEmail(a)
}

function isPasswordValid(password){
    if(!password){
        return false;
    }
    return true
}

function validateEmail(a){
    return /\S+@\S+\.\S+/.test(a)
}