const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passConfirm = document.getElementById('confirm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
    const fnameValue = fname.value;
    const lnameValue = lname.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmValue = passConfirm.value;

    
    if(fnameValue == ''){
        setError(fname, "First Name is required..");
    }

    if(lnameValue == ''){
        setError(lname, "Last Name is required...")
    }


}

function setError(input, message){
    const item = input.parentElement;
    const small = item.querySelector('small');

    small.innerText = message;

    input.style.borderColor = 'red';
}
