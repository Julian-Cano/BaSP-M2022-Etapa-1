window.onload = function () {
	var labels = document.querySelectorAll('label');
	var inputFields = document.querySelectorAll('input:not([type="submit"])');
	var formData = document.querySelectorAll('.form-data');
	var submitBtn = document.getElementById('submit');
	var inputErrors = [];
	var inputErrorsText = [];
	for (var i = 0; i < formData.length; i++) {
		inputErrors[i] = document.createElement('p');
		inputErrorsText[i] = document.createTextNode('Invalid. Insert a valid ' +
			labels[i].textContent.toLowerCase() + '.');
		inputErrors[i].appendChild(inputErrorsText[i]);
		inputErrors[i].classList.add('error', 'content-text-2');
		inputErrors[i].style.visibility = 'hidden';
		formData[i].insertBefore(inputErrors[i], null);
	}
	var nameInput = inputFields[0];
	var lastNameInput = inputFields[1];
	var dniInput = inputFields[2];
	var bodInput = inputFields[3];
	var phoneInput = inputFields[4];
	var addressInput = inputFields[5];
	var cityInput = inputFields[6];
	var zipInput = inputFields[7];
	var emailInput = inputFields[8];
	var passwordInput = inputFields[9];
	var passwordRptInput = inputFields[10];
	var index;
	var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
	var validAll = [
		nameCheck,
		lastNameCheck,
		dniCheck,
		bodCheck,
		phoneCheck,
		addressCheck,
		cityCheck,
		zipCheck,
		emailCheck,
		passwordCheck,
		passwordRptCheck
	];
	function formatDate(date) {
		var dateArray = date.split('-');
		return dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0];
	}
	function success(index) {
		inputErrors[index].style.visibility = 'hidden';
		inputFields[index].classList.add('success-form');
		inputFields[index].classList.replace('error-form', 'success-form');
	}
	function error(index) {
		inputErrors[index].style.visibility = 'visible';
		inputFields[index].classList.add('error-form');
		inputFields[index].classList.replace('success-form', 'error-form');
	}
	function nameBlur(e) {
		index = 0;
		if (nameCheck(e)) {
			success(index);
		} else {
			error(index);
		}
	}
	function nameCheck() {
		if (nameInput.value.length > 3 && letterOrSpc(nameInput.value)) {
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
			success(index);
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
	function dniBlur(e) {
		index = 2;
		if (dniCheck(e)) {
			success(index);
		} else {
			error(index);
		}
	}
	function dniCheck() {
		if (dniInput.value.length > 7 && numberVal(dniInput.value)) {
			return true;
		} else {
			return false;
		}
	}
	function bodBlur(e) {
		index = 3;
		if (bodCheck(e)) {
			success(index);
		} else {
			error(index);
		}
	}
	function bodCheck() {
		if (new Date(bodInput.value).getTime() < new Date().getTime()) {
			return true;
		} else {
			return false;
		}
	}
	function phoneBlur(e) {
		index = 4;
		if (phoneCheck(e)) {
			success(index);
		} else {
			error(index);
		}
	}
	function phoneCheck() {
		if (phoneInput.value.length === 10 && numberVal(phoneInput.value)) {
			return true;
		} else {
			return false;
		}
	}
	function addressBlur(e) {
		index = 5;
		if (addressCheck(e)) {
			success(index);
		} else {
			error(index);
		}
	}
	function addressCheck() {
		if (addressInput.value.length > 4 && stringWithSpace(addressInput.value)) {
			return true;
		} else {
			return false;
		}
	}
	function stringWithSpace(string) {
		var spcIndex = string.indexOf(' ');
		if (spcIndex === null || spcIndex === undefined || spcIndex <= 0 || spcIndex + 1 == string.length) {
			return false;
		}
		var letterBfrSpc = string.substring(0, spcIndex);
		var nbrAfterSpc = string.substring(spcIndex + 1);
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
			success(index);
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
	function zipBlur(e) {
		index = 7;
		if (zipCheck(e)) {
			success(index);
		} else {
			error(index);
		}
	}
	function zipCheck() {
		if ((zipInput.value.length >= 4 && zipInput.value.length <= 5) &&
			numberVal(zipInput.value)) {
			return true;
		} else {
			return false;
		}
	}
	function emailBlur(e) {
		index = 8;
		if (emailCheck(e)) {
			success(index);
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
			success(index);
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
			success(index);
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
		var validCount = 0;
		for (var i = 0; i < validAll.length; i++) {
			if (validAll[i](e)) {
				validCount++;
				success(i);
			} else {
				error(i);
			}
		}
		if (validCount === validAll.length) {
			var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup';
			var queryParams = '?name=' + nameInput.value;
			for (var i = 1; i < formData.length-1; i++) {
				if (i === 3) {
					bodFormated = formatDate(bodInput.value);
					queryParams += '&' + inputFields[i].name + '=' + bodFormated;
				} else {
					queryParams += '&' + inputFields[i].name + '=' + inputFields[i].value;
				}
			}
			fetch(url+queryParams)
				.then( (response) => response.json())
				.then( (jsonRes) => {
					if (jsonRes.success) {
						localSetUser();
						alert(jsonRes.msg + '!' + responseData(jsonRes));
					} else {
						var errorsMsgs = '';
						for (var i = 0; i < jsonRes.errors.length; i++) {
							errorsMsgs += '\n' + jsonRes.errors[i].msg;
						}
						alert('Failed at submitting data, please check your inputs:' + errorsMsgs);
					}
				})
				.catch( (error) => alert(error));
		} else {
			alert('Failed at submitting data, please check your inputs.');
		}
	}
	function responseData(jsonRes) {
		var msgData = '';
		var successData = Object.entries(jsonRes.data);
		for (var i = 1; i < successData.length; i++) {
			msgData += '\n' + successData[i][0] + ': ' + successData[i][1];
		}
		return msgData;
	}
	function localSetUser() {
		for (var i = 0; i < inputFields.length; i++) {
			localStorage.setItem(inputFields[i].name, inputFields[i].value);
		}
	}
	function localGetUser() {
		for (var i = 0; i < inputFields.length; i++) {
			inputFields[i].value = localStorage.getItem(inputFields[i].name);
			success(i);
		}
	}
	localGetUser();
	nameInput.addEventListener('blur', nameBlur);
	lastNameInput.addEventListener('blur', lastNameBlur);
	dniInput.addEventListener('blur', dniBlur);
	bodInput.addEventListener('blur', bodBlur);
	phoneInput.addEventListener('blur', phoneBlur);
	addressInput.addEventListener('blur', addressBlur);
	cityInput.addEventListener('blur', cityBlur);
	zipInput.addEventListener('blur', zipBlur);
	emailInput.addEventListener('blur', emailBlur);
	passwordInput.addEventListener('blur', passwordBlur);
	passwordRptInput.addEventListener('blur', passwordRptBlur);
	submitBtn.addEventListener('click', submitClick);
	inputFields.forEach(function (input) {
		input.addEventListener('focus', function () {
			input.classList.remove('error-form', 'success-form');
			var errorMessage = input.parentElement.lastElementChild;
			errorMessage.style.visibility = 'hidden';
		})
	})
}