window.onload = function() {
    var inputFields = document.querySelectorAll('input:not([type="submit"])');
	var formData = document.querySelectorAll('.form-data');
	var submitBtn = document.getElementById('submit');
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
	var index;
	var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
	function succes(index) {
		for (var i = index; i == index; i++) {
			inputErrors[i].style.visibility = 'hidden';
			inputFields[i].classList.add('succes-form');
			inputFields[i].classList.replace('error-form', 'succes-form');
		}
	}
	function error(i) {
		for (var i = index; i == index; i++) {
			inputErrors[i].style.visibility = 'visible';
			inputFields[i].classList.add('error-form');
			inputFields[i].classList.replace('succes-form', 'error-form');
		}
	}
	function firstNameBlur(e) {
		index = 0;
		if (firstNameCheck(e)) {
			succes(index);
		} else {
			error(index);
		}
	}
	function firstNameCheck() {
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
	function lastNameBlur(e) {
		index = 1;
		if (lastNameCheck(e)) {
			succes(index);
		} else {
			error(index);
		}
	}
	function lastNameCheck() {
		if (lastNameInput.value.length > 3 && letterOrSpc(lastNameInput.value)) {
			return true;
		} else {
			return false;
		}
	}
	function idNumberBlur(e) {
		index = 2;
		if (idNumberCheck(e)) {
			succes(index);
		} else {
			error(index);
		}
	}
	function idNumberCheck() {
		if (idNumberInput.value.length > 7 && numberVal(idNumberInput.value)) {
			return true;
		} else {
			return false;
		}
	}
	function birthDateBlur(e) {
		index = 3;
		if (birthDateCheck(e)) {
			succes(index);
		} else {
			error(index);
		}
	}
	function birthDateCheck() {
		if (new Date(birthDateInput.value).getTime() < new Date().getTime()) {
			return true;
		} else {
			return false;
		}
	}
	function phoneNumberBlur(e) {
		index = 4;
		if (phoneNumberCheck(e)) {
			succes(index);
		} else {
			error(index);
		}
	}
	function phoneNumberCheck() {
		if (phoneNumberInput.value.length === 10 && numberVal(phoneNumberInput.value)) {
			return true;
		} else {
			return false;
		}
	}
	function homeAddressBlur(e) {
		index = 5;
		if (homeAddressCheck(e)) {
			succes(index);
		} else {
			error(index);
		}
	}
	function homeAddressCheck() {
		if (homeAddressInput.value.length > 4 && stringWithSpace(homeAddressInput.value)) {
			return true;
		} else {
			return false;
		}
	}
	function stringWithSpace(string) {
		var spcIndex = string.indexOf(' ');
		if (spcIndex === null || spcIndex === undefined || spcIndex <= 0 || spcIndex+1 == string.length) {
			return false;
		}
		var letterBfrSpc = string.substring(0,spcIndex);
		var nbrAfterSpc = string.substring(spcIndex+1);
		if (ifLetter(letterBfrSpc) && numberVal(nbrAfterSpc)) {
			return true;
		} else {
			return false
		}
	}
	function ifLetter(string) {
		for (var i = 0; i < string.length; i++) {
			var char = string.charAt(i).toLowerCase();
			if (!(char >= 'a' && char <= 'z')) {
				return false;
			}
		}
		return true;
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
	function cityBlur(e) {
		index = 6;
		if (cityCheck(e)) {
			succes(index);
		} else {
			error(index);
		}
	}
	function cityCheck() {
		if (letterOrNbr(cityInput.value) && letterCounter(cityInput.value) > 3) {
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
	function letterCounter(string) {
		var letterQ = 0;
		for (var i = 0; i < string.length; i++) {
			var char = string.charAt(i).toLowerCase();
			if (char >= 'a' && char <= 'z') {
				letterQ++;
			}
		}
		return letterQ;
	}
	function postalCodeBlur(e) {
		index = 7;
		if (postalCodeCheck(e)) {
			succes(index);
		} else {
			error(index);
		}
	}
	function postalCodeCheck() {
		if ((postalCodeInput.value.length >= 4 && postalCodeInput.value.length <= 5)
		&& numberVal(postalCodeInput.value)) {
			return true;
		} else {
			return false;
		}
	}
	function emailBlur(e) {
		index = 8;
		if (emailCheck(e)) {
			succes(index);
		} else {
			error(index);
		}
	}
	function emailCheck() {
		if (emailRegex.test(emailInput.value)) {
			return true;
		} else {
			return false;
		}
	}
	function passwordBlur(e) {
		index = 9;
		if (passwordCheck(e)) {
			succes(index);
		} else {
			error(index);
		}
	}
	function passwordCheck() {
		if (passwordInput.value.length > 7 && letterOrNbr(passwordInput.value)) {
			return true;
		} else {
			return false;
		}
	}
	function passwordRptBlur(e) {
		index = 10;
		if (passwordRptCheck(e)) {
			succes(index);
		} else {
			error(index);
		}
	}
	function passwordRptCheck() {
		if (passwordRptInput.value === passwordInput.value && passwordRptInput.value !== '') {
			return true;
		} else {
			return false;
		}
	}
	function submitClick(e) {
		e.preventDefault();
		if (firstNameCheck(e) && lastNameCheck(e) && idNumberCheck(e) && birthDateCheck(e) && phoneNumberCheck(e) &&
		homeAddressCheck(e) && cityCheck(e) && postalCodeCheck(e) && emailCheck(e) && passwordCheck(e) &&
		passwordRptCheck(e)) {
			inputErrors.forEach(function (p) {
				p.style.visibility = 'hidden';
			})
			inputFields.forEach(function (input) {
				input.classList.add('succes-form');
				input.classList.replace('error-form', 'succes-form');
			})
			alert('User succesfully created!\nFirst name: ' + firstNameInput.value + '\nLast name: ' +
			lastNameInput.value + '\nId number: ' + idNumberInput.value + '\nData of birth: ' + birthDateInput.value
			+ '\nPhone number: ' + phoneNumberInput.value + '\nAddress: ' + homeAddressInput.value + '\nCity: ' +
			cityInput.value + '\nPostal code: ' + postalCodeInput.value + '\nEmail: ' + emailInput.value +
			'\nPassword: ' + passwordInput.value);
		} else {
			inputErrors.forEach(function (p) {
				p.style.visibility = 'visible';
			})
			inputFields.forEach(function (input) {
				input.classList.add('error-form');
				input.classList.replace('succes-form', 'error-form');
			})
			alert('Failed at submitting data, please check you inputs.');
		}
	}
	firstNameInput.addEventListener('blur', firstNameBlur);
	lastNameInput.addEventListener('blur', lastNameBlur);
	idNumberInput.addEventListener('blur', idNumberBlur);
	birthDateInput.addEventListener('blur', birthDateBlur);
	phoneNumberInput.addEventListener('blur', phoneNumberBlur);
	homeAddressInput.addEventListener('blur', homeAddressBlur);
	cityInput.addEventListener('blur', cityBlur);
	postalCodeInput.addEventListener('blur', postalCodeBlur);
	emailInput.addEventListener('blur', emailBlur);
	passwordInput.addEventListener('blur', passwordBlur);
	passwordRptInput.addEventListener('blur', passwordRptBlur);
	submitBtn.addEventListener('click', submitClick);
	inputFields.forEach(function (input) {
		input.addEventListener('focus', function () {
			input.classList.remove('error-form', 'succes-form');
			var errorMessage = input.parentElement.lastElementChild;
			errorMessage.style.visibility = 'hidden';
		})
	});
}