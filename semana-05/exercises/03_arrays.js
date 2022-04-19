console.log ('--EXERCISE 3: ARRAYS');

var monthArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];

/*
	a.  Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
		"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/

console.log('-Exercise 3.a: ');
console.log(monthArray[5], monthArray[11]);

/*
	b.  Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/

console.log('\n-Exercise 3.b: ');
console.log(monthArray.slice().sort());

/*
	c.  Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/

console.log('\n-Exercise 3.c: ');
var array1 = monthArray.slice();
array1.unshift('Año pasado');
array1.push('Año siguiente');
console.log(array1);

/*
	d.  Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/

console.log('\n-Exercise 3.d: ');
var array2 = monthArray.slice();
array2.pop();
array2.shift();
console.log(array2);

/*
	e.  Invertir el orden del array (utilizar reverse).
*/

console.log('\n-Exercise 3.e: ');
console.log(monthArray.slice().reverse());

/*
	f.  Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar
		join).
*/

console.log('\n-Exercise 3.f: ');
var monthStr = monthArray.join('-');
console.log(monthStr);

/*
	g.  Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/

console.log('\n-Exercise 3.g: ');
var mayNov = monthArray.slice(monthArray.indexOf('Mayo'),monthArray.indexOf('Noviembre')+1);
console.log(mayNov);