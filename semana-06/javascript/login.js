window.onload = function() {
	// Called email input
    var email = document.querySelector('#email');
    var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
	// Called email father
	var formData = email.parentElement;
	// Create error field
	var inputError = document.createElement('p');
	inputError.classList.add('error', 'content-text-2');
	var inputErrorText = document.createTextNode('Insert a valid Email.');
	inputError.appendChild(inputErrorText);
	inputError.style.visibility = 'hidden';
	// Inserted error field
	formData.insertBefore(inputError, null);
/*     email.addEventListener('input',emailValue);
    function emailValue(e) {
        console.log(e.target.value);
    } */
/* 	var formData = document.querySelectorAll('.form-data input[type="email"]');
	console.log(formData);
	var formData = email.parentElement;
	console.log(formData); */

	function emailCheck(e){
		if (!emailRegex.test(e.target.value)) {
			inputError.style.visibility = 'visible';
			email.classList.add('error-form');
			email.classList.replace('succes-form', 'error-form');
		} else {
			email.classList.add('succes-form');
			email.classList.replace('error-form', 'succes-form');
			inputError.style.visibility = 'hidden';
		}
	}
	function emailEdit(){
		inputError.style.visibility = 'hidden';
		email.classList.remove('error-form', 'succes-form');
	}

	email.addEventListener('blur', emailCheck);
	email.addEventListener('focus', emailEdit);

}
