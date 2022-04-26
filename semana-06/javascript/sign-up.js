window.onload = function() {
    // Called input array
    var inputFields = document.querySelectorAll('input:not([type="submit"])');
	// Named every input element
	var firstName = inputFields[0];
	var lastName = inputFields[1];
	var idNumber = inputFields[2];
	var birthDate = inputFields[3];
	var phoneNumber = inputFields[4];
	var homeAddres = inputFields[5];
	var city = inputFields[6];
	var postalCode = inputFields[7];
	var email = inputFields[8];
	var password = inputFields[9];
	var passwordRpt = inputFields[10];
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
	// Named every error element
	var firstNameError = inputErrors[0];
	var lastNameError = inputErrors[1];
	var idNumberError = inputErrors[2];
	var birthDateError = inputErrors[3];
	var phoneNumberError = inputErrors[4];
	var homeAddresError = inputErrors[5];
	var cityError = inputErrors[6];
	var postalCodeError = inputErrors[7];
	var emailError = inputErrors[8];
	var passwordError = inputErrors[9];
	var passwordRptError = inputErrors[10];
	// Focus event for every input & repective error
	inputFields.forEach(function (input) {
		input.addEventListener('focus', function () {
			input.classList.remove('error-form', 'succes-form');
			var errorMessage = input.parentElement.lastElementChild;
			errorMessage.style.visibility = 'hidden';
		})
	});
	// Every input validations
	function onlyLetters(string) {
        for (var i = 0; i < string.length; i++) {
            var char = string.charAt(i).toLowerCase();
            if (!((char >= 'a' && char <= 'z') || char == ' ')) {
                return false;
            }
        }
        return true;
    }
	// First name blur validation
	function firstNameCheck(e) {
		if (e.target.value.length > 3 && onlyLetters(e.target.value)) {
			firstNameError.style.visibility = 'hidden';
			firstName.classList.add('succes-form');
			firstName.classList.replace('error-form', 'succes-form');
		} else {
			firstNameError.style.visibility = 'visible';
			firstName.classList.add('error-form');
			firstName.classList.replace('succes-form', 'error-form');
		}
	}
	firstName.addEventListener('blur', firstNameCheck);




/* 	if (e.target.value.length > 3 && onlyLetters(e.target.value)) {
		classListCorrect('name');
	} else {
		classListIncorrect('name');
	} */


/* 	function onlyLetters(string) {
        for (var i = 0; i < string.length; i++) {
            var c = string.charAt(i);
            if (!((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c == ' ')) {
                return false;
            }
        }
        return true;
    } */

	// Last name blur validation
	lastName.addEventListener('blur', lastNameCheck);
	function lastNameCheck(e) {
		if (e.target.value.length > 3 && onlyLetters(e.target.value)) {
			lastNameError.style.visibility = 'hidden';
			lastName.classList.add('succes-form');
			lastName.classList.replace('error-form', 'succes-form');
		} else {
			lastNameError.style.visibility = 'visible';
			lastName.classList.add('error-form');
			lastName.classList.replace('succes-form', 'error-form');
		}
	}











	// Id number blur validation
	idNumber.addEventListener('blur', idNumberCheck);
	function idNumberCheck(e) {
		
	}












	// Birth date blur validation
	birthDate.addEventListener('blur', birthDateCheck);
	function birthDateCheck(e) {
		
	}












	// Phone number blur validation
	phoneNumber.addEventListener('blur', phoneNumberCheck);
	function phoneNumberCheck(e) {
		
	}














	// Home addres blur validation
	homeAddres.addEventListener('blur', homeAddresCheck);
	function homeAddresCheck(e) {
		
	}















	// City blur validation
	city.addEventListener('blur', cityCheck);
	function cityCheck(e) {
		
	}












	// Postal code blur validation
	postalCode.addEventListener('blur', postalCodeCheck);
	function postalCodeCheck(e) {
		
	}













	// Email blur validation
	email.addEventListener('blur', emailCheck);
	var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
	function emailCheck(e) {
		
	}










	// Password blur validation
	password.addEventListener('blur', passwordCheck);
	function passwordCheck(e) {
		
	}













	// Repeat password blur validation
	passwordRpt.addEventListener('blur', passwordRptCheck);
	function passwordRptCheck(e) {
		
	}


















}