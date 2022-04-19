console.log ('--EXERCISE 5: FOR');

/*
	a.  Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para
		mostrar una alerta utilizando cada una de las palabras.
*/

console.log('-Exercise 5.a: ');
var fiveWords = ['fIrSt','sEcOnD','tHiRd','fOuRtH','fIfTh'];
for(var i = 0; i < fiveWords.length; i++) {
	alert(fiveWords[i]);
}

/*
	b.  Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra
		modificada.
*/

console.log('\n-Exercise 5.b: ');
var wordElement;
for(var j = 0; j < fiveWords.length; j++) {
	wordElement = fiveWords[j].substring(0,1).toUpperCase() + fiveWords[j].substring(1).toLowerCase();
	alert(wordElement);
}

/*
	c.  Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un
		bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con
		la cadena completa.
*/

console.log('\n-Exercise 5.c: ');
var sentence = '';
for(var k = 0; k < fiveWords.length; k++) {
	sentence += fiveWords[k];
}
alert(sentence);

/*
	d.  Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es
		decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0
		hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
*/

console.log('\n-Exercise 5.d: ');
var decimalDigits = [];
for(var l = 0; l < 10; l++) {
	decimalDigits[l] = l;
}
console.log(decimalDigits);