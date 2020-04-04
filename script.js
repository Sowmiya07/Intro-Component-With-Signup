const claimButton = document.getElementsByClassName("claim")[0];
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorElement = document.getElementsByClassName('error');
const warningMessage = document.getElementsByClassName('warning');

const emailPattern = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,4}$/;

function isLengthValid(text) {
    return text.length > 0
}

function isEmailValid(email) {
    return emailPattern.test(email);
}

claimButton.addEventListener('click', function(event) {
    event.preventDefault();
    errorElement[0].style.display = 'none';
    warningMessage[0].style.display = 'none';
    errorElement[1].style.display = 'none';
    warningMessage[1].style.display = 'none';
    errorElement[2].style.display = 'none';
    warningMessage[2].style.display = 'none';
    errorElement[3].style.display = 'none';
    warningMessage[3].style.display = 'none';
    if(!(isLengthValid(firstNameInput.value) && isLengthValid(lastNameInput.value) &&
        isEmailValid(emailInput.value) && isLengthValid(passwordInput.value))) {
            errorElement[0].style.display = 'block';
            warningMessage[0].style.display = 'block';
            errorElement[1].style.display = 'block';
            warningMessage[1].style.display = 'block';
            errorElement[2].style.display = 'block';
            warningMessage[2].style.display = 'block';
            errorElement[3].style.display = 'block';
            warningMessage[3].style.display = 'block';
    }
});