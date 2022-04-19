console.log ('--EXERCISE 6: FUNCTIONS');

/*
	a.  Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar
		el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
*/

console.log('-Exercise 6.a: ');
function suma(a,b) {
	return a + b;
}
var result4 = suma(4,5);
console.log(result4);

/*
	b.  A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un
		número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como
		resultado.
*/

console.log('\n-Exercise 6.b: ');
function sumaIf(a,b) {
	if (typeof(a) !== "number"||typeof(b) !== "number") {
		alert('ERROR: At least one of the parameters is not a number.');
		return NaN;
	}
	return a + b;
}
var result5 = sumaIf('4',5);
console.log(result5);

/*
	c.  Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número
		entero.
*/

console.log('\n-Exercise 6.c: ');
function validateInteger(a) {
	if (Number.isInteger(a) == true) {
		return true;
	}
}
console.log('Is number 4 an integer?' + validateInteger(4));

/*
	d.  A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que
		haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
*/

console.log('\n-Exercise 6.d: ');
function sumaIfInteger(a,b) {
	if (typeof(a) !== "number" || typeof(b) !== "number") {
		alert('ERROR: At least one of the parameters is not a number.');
		return NaN;
	}
	if (validateInteger(a) != true && validateInteger(b) != true) {
		a = Math.round(a);
		b = Math.round(b);
		alert('ERROR: Both numbers are not integers. The closests integers are ' + a + ' for the first number and ' + b
		+ ' for the second number.');
		return a + b;
	}
	if (validateInteger(a) != true) {
		a = Math.round(a);
		alert('ERROR: The first number in not an integer. The closest integer is: ' + a + '.');
		return a + b;
	}
	if (validateInteger(b) != true) {
		b = Math.round(b);
		alert('ERROR: The second number in not an integer. The closest integer is: ' + b + '.');
		return a + b;		
	}
	return a + b;
}
var result6 = sumaIfInteger(4,5);
console.log(result6);

/*
	e.  Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
		que todo siga funcionando igual.
*/

console.log('\n-Exercise 6.e: ');
function validateIntegerSuma(c,d) {
	if (validateInteger(c) != true && validateInteger(d) != true) {
		c = Math.round(c);
		d = Math.round(d);
		alert('ERROR: Both numbers are not integers. The closests integers are ' + c + ' for the first number and ' + d
		+ ' for the second number.');
		return c + d;
	}
	if (validateInteger(c) != true) {
		c = Math.round(c);
		alert('ERROR: The first number in not an integer. The closest integer is: ' + c + '.');
		return c + d;
	}
	if (validateInteger(d) != true) {
		d = Math.round(d);
		alert('ERROR: The second number in not an integer. The closest integer is: ' + d + '.');
		return c + d;
	}
	return c + d;
}
function sumaIfIntegerRound(a,b) {
	if (typeof(a) !== "number" || typeof(b) !== "number") {
		alert('ERROR: At least one of the parameters is not a number.');
		return NaN;
	}
	return validateIntegerSuma(a,b);
}
var result7 = sumaIfIntegerRound(4.5,5);
console.log(result7);