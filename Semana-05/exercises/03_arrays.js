console.log('--EXERCISE 3: ARRAYS');

/* a. Dado el siguiente array: 
["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log('\n-Exercise 3.a:');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('El resultado es: ', months[4], 'y', months[10]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

console.log('\n-Exercise 3.b:');

months.sort();

console.log('El resultado es: ', months);

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */

console.log('\n-Exercise 3.c:');

months.unshift('Principio');
months.push('Fin');

console.log('El resultado es: ', months);

/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop). */

console.log('\n-Exercise 3.d:');

months.shift();
months.pop();

console.log('El resultado es: ', months);

/* e. Invertir el orden del array (utilizar reverse).  */

console.log('\n-Exercise 3.e:');

months.reverse();

console.log('El resultado es: ', months);

/* f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join). */

console.log('\n-Exercise 3.f:');

var monthsString = months.join(' - ');

console.log('El resultado es: ', monthsString);

/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */

console.log('\n-Exercise 3.g:');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"].slice(4, 11);

console.log('El resultado es: ', months);