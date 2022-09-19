console.log("--EXERCISE 6: FUNCTIONS");

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
 Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

console.log("\n-Exercise 6.a:");

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(1, 2));

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
  de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

console.log("\n-Exercise 6.b:");

function sum(num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {
    alert("Uno de los parámetros tiene error");
    return NaN;
  } else {
    return num1 + num2;
  }
}

console.log(sum(1, "juan"));

/* c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero. */

console.log("\n-Exercise 6.c:");

function validateInteger(num) {
  if (Number.isInteger(num)) {
    return true;
  } else {
    return false;
  }
}

console.log(validateInteger(3));

/* d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c.
 y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error 
 y retornar el número convertido a entero (redondeado). */

console.log("\n-Exercise 6.d:");

function sum(num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {
    alert("Uno de los parámetros tiene error");
    return NaN;
  } else if (validateInteger(num1) || validateInteger(num2)) {
    alert("Uno de los parámetros no es entero");
    return Math.round(num1 + num2);
  }
}

console.log(sum(1, 3.2));

/* e. Convertir la validación del ejercicio 6d) en una función separada 
y llamarla dentro de la función suma probando que todo siga funcionando igual. */

console.log("\n-Exercise 6.e:");

function validation(num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {
    alert("Uno de los parámetros tiene error");
    return NaN;
  } else if (validateInteger(num1) || validateInteger(num2)) {
    alert("Uno de los parámetros no es entero");
    return Math.round(num1 + num2);
  }
}

function sum(num1, num2) {
  return validation(num1, num2);
}

console.log(sum(1, 3.5));
