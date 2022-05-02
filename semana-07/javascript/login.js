window.onload = function () {
	var labels = document.querySelectorAll('label');
	var inputFields = document.querySelectorAll('input:not([type="submit"])');
	var formData = document.querySelectorAll('.form-data');
	var submitBtn = document.getElementById('submit');
	var inputErrors = [];
	var inputErrorsText = [];
	for (var i = 0; i < formData.length; i++) {
		inputErrors[i] = document.createElement('p');
		inputErrorsText[i] = document.createTextNode('Incorrect. Insert a valid ' +
			labels[i].textContent.toLowerCase() + '.');
		inputErrors[i].appendChild(inputErrorsText[i]);
		inputErrors[i].classList.add('error', 'content-text-2');
		inputErrors[i].style.visibility = 'hidden';
		formData[i].insertBefore(inputErrors[i], null);
	}
	var emailInput = inputFields[0];
	var passwordInput = inputFields[1];
	var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
	var validAll = [
		emailCheck,
		passwordCheck,
	];
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
	function emailBlur(e) {
		index = 0;
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
		index = 1;
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
	function letterOrNbr(string) {
		for (var i = 0; i < string.length; i++) {
			var char = string.charAt(i).toLowerCase();
			if (!((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'))) {
				return false;
			}
		}
		return true;
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
			var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';
			var queryParams = '?email=' + email.value + '&password=' + password.value;
			fetch(url+queryParams)
			.then( (response) => response.json())
			.then( (jsonRes) => {
				if (jsonRes.success) {
					alert(jsonRes.msg + '!' + '\nEmail: ' + emailInput.value + '\nPassword: ' + passwordInput.value)
				} else {
					alert(jsonRes.msg)
				}
			})
			.catch( (error) => alert(error));
		} else {
			alert('Email or pasword invalids, please check your inputs.');
		}
	}
	emailInput.addEventListener('blur', emailBlur);
	passwordInput.addEventListener('blur', passwordBlur);
	submitBtn.addEventListener('click', submitClick);
	inputFields.forEach(function (input) {
		input.addEventListener('focus', function () {
			input.classList.remove('error-form', 'success-form');
			var errorMessage = input.parentElement.lastElementChild;
			errorMessage.style.visibility = 'hidden';
		})
	})
}