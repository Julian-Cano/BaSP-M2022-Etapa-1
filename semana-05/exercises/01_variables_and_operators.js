console.log ('--EXERCISE 1: VARIABLES AND OPERATORS');

/*
	a.  Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en
		una 3er variable.
*/

console.log('-Exercise 1.a:');
var num1 = 1;
var num2 = 2;
var result1 = num1 + num2;
console.log(result1);

/*
	b.  Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
*/

console.log('\n-Exercise 1.b:');
var str1 = 'I am a';
var str2 = ' result.';
var result2 = str1 + str2;
console.log(result2);

/*
	c.  Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando
		el resultado de la suma en una 3er variable (utilizar length).
*/

console.log('\n-Exercise 1.c:');
var str3 = 'I am another';
var str4 = ' result.';
var result3 = str3.length + str4.length;
console.log(result3);