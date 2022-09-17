console.log('--EXERCISE 2: STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres 
y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

console.log('\n-Exercise 2.a:');

var longWord1 = 'estrepitosamente'.toUpperCase();

console.log('El resultado es: ', longWord1);

/* b. Crear una variable de tipo string con al menos 10 caracteres 
y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('\n-Exercise 2.b:');

var longWord2 = 'pintoresco';
var subLongWord1 = longWord2.substring(0,5);

console.log('El resultado es: ', subLongWord1);

/* c. Crear una variable de tipo string con al menos 10 caracteres 
y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log('\n-Exercise 2.c:');

var longWord3 = 'cachivache';
var subLongWord2 = longWord3.substring(7,10);

console.log('El resultado es: ', subLongWord2);

/*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula 
y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */

console.log('\n-Exercise 2.d:');

var longWord4 = 'parafernalia';
var longWordWierd1 = longWord4.substring(0, 1).toUpperCase() + longWord4.substring(1, 12).toLowerCase();

console.log('El resultado es: ', longWordWierd1);

/* d. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log('\n-Exercise 2.e:');

var longWord5 = 'paupe rrimo';
var longWordWhiteSpace = longWord5.indexOf(' ');

console.log('El resultado es: ', longWordWhiteSpace );

/* e. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula 
y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

console.log('\n-Exercise 2.f:');

var longWord6 = 'bioluminiscencia hemaglutinante';
var longWordWierd2 = longWord6.substring(longWord6.indexOf('b'), 1).toUpperCase() + longWord6.substring(longWord6.indexOf('i', 1), 16).toLowerCase() + longWord6.substring(longWord6.indexOf(' '), 17) + longWord6.substring(longWord6.indexOf('h'), 18).toUpperCase() + longWord6.substring(longWord6.indexOf('e', 18), 31);

console.log('El resultado es: ', longWordWierd2);