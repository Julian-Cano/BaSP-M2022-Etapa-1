window.onload = function() {
    // Called input array
    var inputFields = document.querySelectorAll('input:not([type="submit"])');
	// Named every input element
	var firstNameInput = inputFields[0];
	var lastNameInput = inputFields[1];
	var idNumberInput = inputFields[2];
	var birthDateInput = inputFields[3];
	var phoneNumberInput = inputFields[4];
	var homeAddressInput = inputFields[5];
	var cityInput = inputFields[6];
	var postalCodeInput = inputFields[7];
	var emailInput = inputFields[8];
	var passwordInput = inputFields[9];
	var passwordRptInput = inputFields[10];
	// Called .form-data array
	var formData = document.querySelectorAll('.form-data');
	// Create inputErrors with their text for each .form-data
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
	// Named every error element
	var firstNameError = inputErrors[0];
	var lastNameError = inputErrors[1];
	var idNumberError = inputErrors[2];
	var birthDateError = inputErrors[3];
	var phoneNumberError = inputErrors[4];
	var homeAddressError = inputErrors[5];
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
	// First name blur validation
	firstNameInput.addEventListener('blur', firstNameBlur);
	function firstNameBlur(e) {
		if (firstNameCheck(e)) {
			firstNameError.style.visibility = 'hidden';
			firstNameInput.classList.add('succes-form');
			firstNameInput.classList.replace('error-form', 'succes-form');
		} else {
			firstNameError.style.visibility = 'visible';
			firstNameInput.classList.add('error-form');
			firstNameInput.classList.replace('succes-form', 'error-form');
		}
	}
	function firstNameCheck () {
		if (firstNameInput.value.length > 3 && letterOrSpc(firstNameInput.value)) {
			return true;
		} else {
			return false;
		}
	}
	function letterOrSpc(string) {
        for (var i = 0; i < string.length; i++) {
            var char = string.charAt(i).toLowerCase();
            if (!((char >= 'a' && char <= 'z') || char == ' ')) {
                return false;
            }
        }
        return true;
    }
	// Last name blur validation
	lastNameInput.addEventListener('blur', lastNameBlur);
	function lastNameBlur(e) {
		if (lastNameCheck (e)) {
			lastNameError.style.visibility = 'hidden';
			lastNameInput.classList.add('succes-form');
			lastNameInput.classList.replace('error-form', 'succes-form');
		} else {
			lastNameError.style.visibility = 'visible';
			lastNameInput.classList.add('error-form');
			lastNameInput.classList.replace('succes-form', 'error-form');
		}
	}
	function lastNameCheck () {
		if (lastNameInput.value.length > 3 && letterOrSpc(lastNameInput.value)) {
			return true;
		} else {
			return false;
		}
	}
	// Id number blur validation
	idNumberInput.addEventListener('blur', idNumberBlur);
	function idNumberBlur(e) {
		if (idNumberCheck(e)) {
			idNumberError.style.visibility = 'hidden';
			idNumberInput.classList.add('succes-form');
			idNumberInput.classList.replace('error-form', 'succes-form');
		} else {
			idNumberError.style.visibility = 'visible';
			idNumberInput.classList.add('error-form');
			idNumberInput.classList.replace('succes-form', 'error-form');
		}
	}
	function idNumberCheck() {
		if (idNumberInput.value.length > 7 && numberVal(idNumberInput.value)) {
			return true;
		} else {
			return false;
		}
	}
	function numberVal(string) {
		for (var i = 0; i < string.length; i++) {
            var char = string.charAt(i);
            if (!(char >= '0' && char <= '9') || char == '.' || char == ',') {
                return false;
            }
        }
        return true;
	}
	// Birth date blur validation
	birthDateInput.addEventListener('blur', birthDateBlur);
	function birthDateBlur(e) {
		if (birthDateCheck(e)) {
			birthDateError.style.visibility = 'hidden';
			birthDateInput.classList.add('succes-form');
			birthDateInput.classList.replace('error-form', 'succes-form');
		} else {
			birthDateError.style.visibility = 'visible';
			birthDateInput.classList.add('error-form');
			birthDateInput.classList.replace('succes-form', 'error-form');
		}
	}
	function birthDateCheck() {
		if (new Date(birthDateInput.value).getTime() < new Date().getTime()) {
			return true;
		} else {
			return false;
		}
	}
	// Phone number blur validation
	phoneNumberInput.addEventListener('blur', phoneNumberBlur);
	function phoneNumberBlur(e) {
		if (phoneNumberCheck(e)) {
			phoneNumberError.style.visibility = 'hidden';
			phoneNumberInput.classList.add('succes-form');
			phoneNumberInput.classList.replace('error-form', 'succes-form');
		} else {
			phoneNumberError.style.visibility = 'visible';
			phoneNumberInput.classList.add('error-form');
			phoneNumberInput.classList.replace('succes-form', 'error-form');
		}
	}
	function phoneNumberCheck () {
		if (phoneNumberInput.value.length === 10 && numberVal(phoneNumberInput.value)) {
			return true;
		} else {
			return false;
		}
	}
	// Home addres blur validation
/* 	homeAddressInput.addEventListener('blur', homeAddressBlur);
	function homeAddressBlur(e) {
		if (homeAddressCheck(e)) {
			homeAddressError.style.visibility = 'hidden';
			homeAddressInput.classList.add('succes-form');
			homeAddressInput.classList.replace('error-form', 'succes-form');
		} else {
			homeAddressError.style.visibility = 'visible';
			homeAddressInput.classList.add('error-form');
			homeAddressInput.classList.replace('succes-form', 'error-form');
		}
	}
	function phoneNumberCheck () {
		
	} */















	// City blur validation
/* 	cityInput.addEventListener('blur', cityBlur);
	function cityBlur(e) {
		if (cityCheck(e)) {
			cityError.style.visibility = 'hidden';
			cityInput.classList.add('succes-form');
			cityInput.classList.replace('error-form', 'succes-form');
		} else {
			cityError.style.visibility = 'visible';
			cityInput.classList.add('error-form');
			cityInput.classList.replace('succes-form', 'error-form');
		}
	}
	function cityCheck () {
		
	} */












	// Postal code blur validation
	postalCodeInput.addEventListener('blur', postalCodeBlur);
	function postalCodeBlur(e) {
		if (postalCodeCheck(e)) {
			postalCodeError.style.visibility = 'hidden';
			postalCodeInput.classList.add('succes-form');
			postalCodeInput.classList.replace('error-form', 'succes-form');
		} else {
			postalCodeError.style.visibility = 'visible';
			postalCodeInput.classList.add('error-form');
			postalCodeInput.classList.replace('succes-form', 'error-form');
		}
	}
	function postalCodeCheck () {
		if ((postalCodeInput.value.length >= 4 && postalCodeInput.value.length <= 5) && numberVal(postalCodeInput.value)) {
			return true;
		} else {
			return false;
		}
	}
	// Email blur validation
	emailInput.addEventListener('blur', emailBlur);
	var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
	function emailBlur(e) {
		if (emailCheck(e)) {
			emailError.style.visibility = 'hidden';
			emailInput.classList.add('succes-form');
			emailInput.classList.replace('error-form', 'succes-form');
		} else {
			emailError.style.visibility = 'visible';
			emailInput.classList.add('error-form');
			emailInput.classList.replace('succes-form', 'error-form');
		}
	}
	function emailCheck () {
		if (emailRegex.test(emailInput.value)) {
			return true;
		} else {
			return false;
		}
	}
	// Password blur validation
	passwordInput.addEventListener('blur', passwordBlur);
	function passwordBlur(e) {
		if (passwordCheck(e)) {
			passwordError.style.visibility = 'hidden';
			passwordInput.classList.add('succes-form');
			passwordInput.classList.replace('error-form', 'succes-form');
		} else {
			passwordError.style.visibility = 'visible';
			passwordInput.classList.add('error-form');
			passwordInput.classList.replace('succes-form', 'error-form');
		}
	}
	function passwordCheck () {
		if (passwordInput.value.length > 7 && letterOrNbr(passwordInput.value)) {
			return true;
		} else {
			return false;
		}
	}
	function letterOrNbr(string) {
        for (var i = 0; i < string.length; i++) {
            var char = string.charAt(i).toLowerCase();
            if (!((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'))) {
                return false;
            }
        }
        return true;
    }
	// Repeat password blur validation
	passwordRptInput.addEventListener('blur', passwordRptBlur);
	function passwordRptBlur(e) {
		if (passwordRptCheck(e)) {
			passwordRptError.style.visibility = 'hidden';
			passwordRptInput.classList.add('succes-form');
			passwordRptInput.classList.replace('error-form', 'succes-form');
		} else {
			passwordRptError.style.visibility = 'visible';
			passwordRptInput.classList.add('error-form');
			passwordRptInput.classList.replace('succes-form', 'error-form');
		}
	}
	function passwordRptCheck () {
		if (passwordRptInput.value === passwordInput.value && passwordRptInput.value !== '') {
			return true;
		} else {
			return false;
		}
	}


















}