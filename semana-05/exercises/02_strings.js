console.log ('--EXERCISE 2: STRINGS');

/*
	a.  Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar
		toUpperCase).
*/

console.log('-Exercise 2.a: ');
var str5 = 'a previous undercase text.'
console.log(str5.toUpperCase());

/*
	b.  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
		caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

console.log('\n-Exercise 2.b: ');
var str6 = 'A complete string.';
var str7 = str6.substring(0,5);
console.log(str7);

/*
	c.  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
		caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

console.log('\n-Exercise 2.c: ');
var str8 = 'Only my last.';
var str9 = str8.substring(str8.length-3);
console.log(str9);

/*
	d.  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
		mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring,
		toUpperCase, toLowerCase y el operador +).
*/

console.log('\n-Exercise 2.d: ');
var str10 = 'i Am A mOnStEr!';
var str11 = str10.substring(0,1).toUpperCase() + str10.substring(1).toLowerCase();
console.log(str11);

/*
	e.  Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición
		del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

console.log('\n-Exercise 2.e: ');
var str12 = 'Space between.';
var num3 = str12.indexOf(' ');
console.log(num3);

/*
	f.  Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
		Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de
		ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
		toLowerCase y el operador +).
*/

console.log('\n-Exercise 2.f: ');
var str14 = 'argentinian development.';
var spaceIndex = str14.indexOf(' ');
var str15 = str14.substring(0,1).toUpperCase() + str14.substring(1,spaceIndex).toLocaleLowerCase() + str14.substring(
	spaceIndex+1,spaceIndex+2).toUpperCase() + str14.substring(spaceIndex+2).toLowerCase();
console.log(str15);