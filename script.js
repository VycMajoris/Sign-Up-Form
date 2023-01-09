const name = document.getElementById('name');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const passwordErrorPara = document.getElementById('passwordError');
const confirmPasswordErrorPara = document.getElementById('confirmPasswordError');
const samePasswordErrorPara = document.getElementById('samePasswordError');

const form = document.getElementById('signupForm');

let passwordPattern = /^([a-zA-Z0-9]{6,15})$/;

form.addEventListener('submit', (e) => {

    let passwordErrorMsg = [];
    let confirmPasswordErrorMsg = [];
    let samePasswordsMsg = [];

    if (!passwordPattern.test(password.value)) {
        passwordErrorMsg.push('Password length should be between 6 and 15 characters. Only letters and numbers.');
        e.preventDefault();
        passwordErrorPara.innerText = passwordErrorMsg.join(', ');
        password.style.borderColor = 'red';
           
     }

     if (!passwordPattern.test(confirmPassword.value)) {
        confirmPasswordErrorMsg.push('Password length should be between 6 and 15 characters. Only letters and numbers.');
        e.preventDefault();
        confirmPasswordErrorPara.innerText = confirmPasswordErrorMsg.join(', ');
        confirmPassword.style.borderColor = 'red';
         
     }

     if(password.value.localeCompare(confirmPassword.value) !== 0) {
        samePasswordsMsg.push('Passwords must be the same.');
        e.preventDefault();
        samePasswordErrorPara.innerText = samePasswordsMsg.join(', ');
        confirmPassword.style.borderColor = 'red';
        
     }
     
     /* if (passwordErrorMsg.length > 0) {
        
     } */
})
