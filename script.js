//getting all elements
const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passConfirm = document.getElementById('confirm');


//event listener (on click submit button)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs(); //check current inputs on click
});




function checkInputs() {
    const fnameValue = fname.value;
    const lnameValue = lname.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmValue = passConfirm.value;

    //call error function if input is left blank
    if(fnameValue == ''){
        setError(fname, "First Name is required..");
    }
    //call error function if input is left blank
    if(lnameValue == ''){
        setError(lname, "Last Name is required...")
    }


}

//error function sets small tag to right error message and 
//changes input border
function setError(input, message){
    const item = input.parentElement;
    const small = item.querySelector('small');

    small.innerText = message;

    input.style.borderColor = 'red';
}
