// Arreglo 1 - Números
const numeros = [1, 2, 3, 4, 5];

// Arreglo 2 - Nombres
const nombres = ["Ana", "Juan", "María", "Pedro", "Laura"];

// Arreglo 3 - Edades
const edades = [25, 18, 40, 35, 50];

// Arreglo 4 - Precios
const precios = [100, 200, 300, 400, 500];

// Métodos aplicados a cada arreglo

// 1.1 .reduce() - Números
const sumaNumeros = numeros.reduce((acumulador, actual) => acumulador + actual, 0);
console.log("Suma de números:", sumaNumeros);

// 1.2 .reduce() - Nombres (unir en una cadena)
const nombresUnidos = nombres.reduce((acumulador, actual) => `${acumulador}, ${actual}`);
console.log("Nombres unidos:", nombresUnidos);

// 1.3 .reduce() - Edades (encontrar la mayor)
const mayorEdad = edades.reduce((max, actual) => actual > max ? actual : max, 0);
console.log("Mayor edad:", mayorEdad);

// 1.4 .reduce() - Precios (total)
const totalPrecios = precios.reduce((acumulador, actual) => acumulador + actual, 0);
console.log("Total precios:", totalPrecios);

// 2.1 .filter() - Números (mayores que 3)
const numerosMayoresQue3 = numeros.filter(num => num > 3);
console.log("Números mayores que 3:", numerosMayoresQue3);

// 2.2 .filter() - Nombres (los que comienzan con 'M')
const nombresConM = nombres.filter(nombre => nombre.startsWith("M"));
console.log("Nombres que comienzan con 'M':", nombresConM);

// 2.3 .filter() - Edades (mayores de 30)
const edadesMayores30 = edades.filter(edad => edad > 30);
console.log("Edades mayores de 30:", edadesMayores30);

// 2.4 .filter() - Precios (menores de 400)
const preciosMenores400 = precios.filter(precio => precio < 400);
console.log("Precios menores de 400:", preciosMenores400);

// 3.1 .map() - Números (multiplicar por 2)
const numerosMultiplicados = numeros.map(num => num * 2);
console.log("Números multiplicados por 2:", numerosMultiplicados);

// 3.2 .map() - Nombres (longitud de los nombres)
const longitudNombres = nombres.map(nombre => nombre.length);
console.log("Longitud de los nombres:", longitudNombres);

// 3.3 .map() - Edades (sumar 5 a cada edad)
const edadesAumentadas = edades.map(edad => edad + 5);
console.log("Edades +5:", edadesAumentadas);

// 3.4 .map() - Precios (con 10% de descuento)
const preciosDescuento = precios.map(precio => precio * 0.9);
console.log("Precios con 10% de descuento:", preciosDescuento);

// 4.1 .forEach() - Números (imprimir cada número)
console.log("Números:");
numeros.forEach(num => console.log(num));

// 4.2 .forEach() - Nombres (imprimir cada nombre)
console.log("Nombres:");
nombres.forEach(nombre => console.log(nombre));

// 4.3 .forEach() - Edades (imprimir cada edad)
console.log("Edades:");
edades.forEach(edad => console.log(edad));

// 4.4 .forEach() - Precios (imprimir cada precio)
console.log("Precios:");
precios.forEach(precio => console.log(precio));


// Función flecha con cero parámetros
const saludo = () => console.log("Hola, ¿cómo estás?");
saludo();  // "Hola, ¿cómo estás?"

// Función flecha con un parámetro
const cuadrado = num => num * num;
console.log(cuadrado(4));  // 16

// Función flecha con dos parámetros
const suma = (a, b) => a + b;
console.log(suma(5, 10));  // 15

// Función flecha con tres parámetros
const promedio = (x, y, z) => (x + y + z) / 3;
console.log(promedio(10, 20, 30));  // 20

// Función flecha con un array como parámetro
const dobles = arr => arr.map(x => x * 2);
console.log(dobles([1, 2, 3]));  // [2, 4, 6]
