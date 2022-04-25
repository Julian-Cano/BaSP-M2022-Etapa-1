window.onload = function() {
	// Called input array
    var inputFields = document.querySelectorAll('input:not([type="submit"])');
	var email = inputFields[0];
	var password = inputFields[1];
	// Called .form-data array
	var formData = document.querySelectorAll('.form-data');
	// Create inputErrors with their text for each .form-data
	var inputErrors = [];
	var inputErrorsText = [];
	for (var i=0; i<formData.length; i++) {
		inputErrors[i] = document.createElement('p');
		inputErrorsText[i] = document.createTextNode('Incorrect. Insert a valid input.');
		inputErrors[i].appendChild(inputErrorsText[i]);
		inputErrors[i].classList.add('error', 'content-text-2');
		inputErrors[i].style.visibility = 'hidden';
		formData[i].insertBefore(inputErrors[i], null);
	}
	var emailError = inputErrors[0];
	var passwordError = inputErrors[1];
	var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
	email.addEventListener('blur', emailCheck);
	function emailCheck(e){
		if (!emailRegex.test(e.target.value)) {
			emailError.style.visibility = 'visible';
			email.classList.add('error-form');
			email.classList.replace('succes-form', 'error-form');
		} else {
			email.classList.add('succes-form');
			email.classList.replace('error-form', 'succes-form');
			emailError.style.visibility = 'hidden';
		}
	}
	inputFields.forEach(function (input) {
		input.addEventListener('focus', function () {
			input.classList.remove('error-form', 'succes-form');
			var errorMessage = input.parentElement.lastElementChild;
			errorMessage.style.visibility = 'hidden';
		})
	});
	password.addEventListener('blur', passwordCheck);
	function passwordCheck(e){
		if (e.target.value === null || e.target.value === undefined || e.target.value.length < 8) {
			passwordError.style.visibility = 'visible';
			password.classList.add('error-form');
			password.classList.replace('succes-form', 'error-form');
		} else {
			password.classList.add('succes-form');
			password.classList.replace('error-form', 'succes-form');
			passwordError.style.visibility = 'hidden';
		}
	}
	var submitBtn = document.getElementById('submit');
	submitBtn.addEventListener('click', submitClick);
	function submitClick(e){
		e.preventDefault();
		if (emailRegex.test(email.value) && (password.value !== null && password.value !== undefined &&
			password.value.length >= 8)) {
			inputErrors.forEach(function (p) {
				p.style.visibility = 'hidden';
			})
			inputFields.forEach(function (input) {
				input.classList.add('succes-form');
				input.classList.replace('error-form', 'succes-form');
			})
			alert('Login Succesful!\nEmail: ' + email.value + '\nPassword: ' + password.value);
		} else {
			inputErrors.forEach(function (p) {
				p.style.visibility = 'visible';
			})
			inputFields.forEach(function (input) {
				input.classList.add('error-form');
				input.classList.replace('succes-form', 'error-form');
			})
			alert('Email or pasword incorrect, please try again.');
		}
	}
}
