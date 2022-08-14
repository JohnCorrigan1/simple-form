//getting all elements
const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const passConfirm = document.getElementById('confirm');
//for final submission
var validForm = false;
var validFname = false, validLname = false, validEmail = false;
var validPhone = false, validPass = false, validConfirm = false;



//event listener (on click submit button)
form.addEventListener('submit', (e) => {

    if(validForm){
        
    }
    else{
    e.preventDefault();
    }
    checkInputs(); //check current inputs on click
});




function checkInputs() {
    const fnameValue = fname.value;
    const lnameValue = lname.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const passwordValue = password.value;
    const confirmValue = passConfirm.value;

    //call error function if input is left blank
    if(fnameValue == ''){
        setError(fname, "First Name is required..");
    }
    else{
        setValid(fname);
        validFname = true;
    }


    if(lnameValue == ''){
        setError(lname, "Last Name is required...");
    }
    else{
        setValid(lname);
        validLname = true;
    }


    if(emailValue == ''){
        setError(email, "Email is required...");
    }
    else if(!isValidEmail(emailValue)){
        setError(email, "Enter a Valid Email...");
    }
    else {
        setValid(email);
        validEmail = true;
    }


    if(phoneValue == ''){
        setError(phone, "Phone Number is required...")
    }
    else {
        setValid(phone);
        validPhone = true;
    }

    if(passwordValue == ''){
        setError(password, "Password is required...");
    }
    else {
        setValid(password);
        validPass = true;
    }

    if(confirmValue == ''){
        setError(passConfirm, "Must confirm Password...");
    }
    else if(passwordValue !== confirmValue) {
        setError(passConfirm, "Password does not match...")
    }
    else {
        setValid(passConfirm);
        validConfirm = true;
    }

    if(validFname == true && validLname == true && validEmail == true
    && validPhone == true && validPass == true && validConfirm == true){
        validForm = true;
    }


}

//error function sets small tag to right error message and 
//changes input border
function setError(input, message){
    const item = input.parentElement;
    const small = item.querySelector('small');

    small.innerText = message;

    input.style.borderColor = 'red';
    small.style.color = 'red';
}

function setValid(input){
    const item = input.parentElement;
    const small = item.querySelector('small');

    small.innerText = '';
    input.style.borderColor = 'green';
}


function isValidEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}
