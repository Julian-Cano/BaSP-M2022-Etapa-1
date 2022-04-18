console.log ('--EXERCISE 6: FUNCTIONS');

/*
    a.  Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar
        el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
*/

console.log('-Exercise 6.a: ');
function sumA_B(a,b) {
    return a + b;
}
var result4 = sumA_B(4,5);
console.log(result4);

/*
    b.  A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un
        número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como
        resultado.
*/

console.log('\n-Exercise 6.b: ');
function sumIfA_B(a,b) {
    if (typeof(a) !== "number"||typeof(b) !== "number") {
        alert('ERROR: At least one of the parameters is not a number.');
        return NaN;
    }
    return a + b;
}
var result5 = sumIfA_B('4',5);
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

/*
    d.  A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que
        haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
*/

console.log('\n-Exercise 6.d: ');
function sumIfIntegerA_B(a,b) {
    if (typeof(a) !== "number" || typeof(b) !== "number") {
        alert('ERROR: At least one of the parameters is not a number.');
        return NaN;
    }
    if (validateInteger(a) != true && validateInteger(b) != true) {
        alert('ERROR: Both numbers are not integers. The closests integers are: ');
        return [Math.round(a), Math.round(b)];
    }
    if (validateInteger(a) != true) {
        alert('ERROR: The first number in not an integer. The closest integer is: ');
        return Math.round(a);
    }
    if (validateInteger(b) != true) {
        alert('ERROR: The second number in not an integer. The closest integer is: ');
        return Math.round(b);        
    }
    return a + b;
}
var result6 = sumIfIntegerA_B(4,5);
console.log(result6);

/*
    e.  Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
        que todo siga funcionando igual.
*/

console.log('\n-Exercise 6.e: ');
function validateIntegerSum(c,d) {
    if (validateInteger(c) !== true && validateInteger(d) !== true) {
        alert('ERROR: Both numbers are not integers. The closests integers are: ');
        return [Math.round(c), Math.round(d)];
    }
    if (validateInteger(c) !== true) {
        alert('ERROR: The first number in not an integer. The closest integer is: ');
        return Math.round(c);
    }
    if (validateInteger(d) !== true) {
        alert('ERROR: The second number in not an integer. The closest integer is: ');
        return Math.round(d);        
    }
    return a + b;
}
function sumIfIntegerSumA_B(a,b) {
    if (typeof(a) !== "number" || typeof(b) !== "number") {
        alert('ERROR: At least one of the parameters is not a number.');
        return NaN;
    }
    return validateIntegerSum(a,b);
}
var result7 = sumIfIntegerSumA_B(4.5,5);
console.log(result7);