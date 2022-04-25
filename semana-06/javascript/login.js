window.onload = function() {
	// Called input array
    var inputFields = document.querySelectorAll('input:not([type="submit"])');
	var email = inputFields[0];
	var password = inputFields[1];

	// Called .form-data array
	var formData = document.querySelectorAll('.form-data');
	// Create inputErrors for each .form-data
	var inputErrors = [];
	var inputErrorsText = [];
	for (var i=0; i<formData.length; i++) {
		inputErrors[i] = document.createElement('p');
		inputErrorsText[i] = document.createTextNode('Invalid. Insert a valid input.');
		inputErrors[i].appendChild(inputErrorsText[i]);
		inputErrors[i].classList.add('error', 'content-text-2');
		inputErrors[i].style.visibility = 'hidden';
		formData[i].insertBefore(inputErrors[i], null);
	}
	var emailError = inputErrors[0];
	var passwordError = inputErrors[1];
	email.addEventListener('blur', emailCheck);
	var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
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
/* 	email.addEventListener('focus', emailFocus);
	function emailFocus() {
		emailError.style.visibility = 'hidden';
		//emailError es el <p> que contiene el mensaje de error,
		//acá lo que haría es ocultarse por estar en focus
		email.classList.remove('error-form', 'succes-form');
		//email es el <input> con id=#email y le estoy diciendo que
		//elimine las clases que le estos agregando/cambienado en el blur
	} */

	inputFields.forEach(function (input) {
		input.addEventListener("focus", function () {
			input.classList.remove('error-form', 'succes-form');
			var errorMessage = input.parentNode.childNodes[5];
			errorMessage.style.visibility = 'hidden';
		})
	});





/* 	password.addEventListener('blur', passwordCheck);
	function passwordCheck(e){
		if (!(e.target.value === null || e.target.value === undefined || e.target.value.length < 8)) {

		}
	} */

/* 	function inputFocus(){
		for (var i=0; i<inputField.length; i++){
			inputError[i].style.visibility = 'hidden';
			inputField[i].classList.remove('error-form', 'succes-form');
		}
document.querySelectorAll('.some-class').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
  })
})
	} */

	/* for (const button of buttons) {
		button.addEventListener('click', bgChange);
	  } */

/* 	// Create error field
	var emailError = document.createElement('p');
	emailError.classList.add('error', 'content-text-2');
	var emailErrorText = document.createTextNode('Insert a valid Email.');
	emailError.appendChild(emailErrorText);
	emailError.style.visibility = 'hidden';
	// Inserted error field
	formData.insertBefore(emailError, null);

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
	function emailEdit(){
		emailError.style.visibility = 'hidden';
		email.classList.remove('error-form', 'succes-form');
	}

	email.addEventListener('blur', emailCheck);
	email.addEventListener('focus', emailEdit); */

/* 	// Called password input
    var pass = document.querySelector('#password');
	var formData = pass.parentElement;
	// Create error field
	var inputError = document.createElement('p');
	inputError.classList.add('error', 'content-text-2');
	var inputErrorText = document.createTextNode('Insert a valid Email.');
	inputError.appendChild(inputErrorText);
	inputError.style.visibility = 'hidden';
	// Inserted error field
	formData.insertBefore(inputError, null);

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
 */
}
