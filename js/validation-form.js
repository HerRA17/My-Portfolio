(function () {
    let form = document.querySelector('#form');
    let emailInput = document.querySelector('#visitors-email');
    let nameInput = document.querySelector('#visitors-name');

    function showErrorMessage(input, message) {
        let container = input.parentElement;
        let error = container.document.querySelector('.error-message');
        if(error) {
            container.removeChild(error);
        } 
        if(message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innertext =  message;
            container.appendChild(error);
        }
    }
    function validatedEmail() {
        let value = emailInput.value;
        if (!value) {
            showErrorMessage(emailInput, 'Email is a required field!');
            return false;
        }
        if(value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address!')
            return false;
        }        
        if(value.indexOf('.') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address!')
            return false;
        }
        showErrorMessage(emailInput, null);
        return true;
     }
     function validatedVisitorName() {
        let value = visitorsNameInput.value;
        if(!value) {
            showErrorMessage(visitorsNameInput, 'Please enter your name');
            return false;
        }
        if (value.length < 40) {
            showErrorMessage(visitorsNameInput, 'Sorry your name is a bit long')
        }
        if(value.indexOf('@') === 1) {
            showErrorMessage(emailInput, 'Please enter your name!')
            return false;
        }        
        if(value.indexOf('.') === 1) {
            showErrorMessage(emailInput, 'Please enter your name!')
            return false;
        }
        showErrorMessage(visitorsNameInput, null);
        return true;
         }

     function validateForm() {
        let isValidEmail = validatedEmail();
        let isValidVisitorName = validatedVisitorName();
        return isValidEmail && isValidVisitorName; 
     }
     form.addEventListener('submit',(e) => {
        e.preventDefault();
        if(validateForm()) {
            alert('Success!');
        }
     })
})();