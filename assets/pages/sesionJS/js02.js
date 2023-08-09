console.log("Sesion JS02 uso de funciones")

/*
Funciones Declaradas 
(function declaration, function statement)
Una caracteristica de las funciones declaradas es que tienen hoisting
Hoisting = comportamiento en JS que permite a las declaracion de variables
o funciones se eleven al comienzo de su ambito antes que se ejecute el codigo
*/

function multiplica (a, b) { 
    return a * b;
}
console.log(multiplica(4,3)); 

/*
funciones expresadas(function expressions)
Son funciones declaradas dentro de la asignacion de una variable
Estas funciones pueden ser anonimas (No tienen nombre). 
Las funciones expresadas no tienen hoisting porque no se cargan en 
memoria hasta que se utilice

sintaxis 
const nombreVariable = function nombreFuncion (parametros){
    instrucciones;
}
*/

/* const sum = function sumatoria(a ,b ){
    return a + b; 
}
console.log (`El resultado de 4 + 2 es: ${ sum (4, 2)}`);

let saludo; 
const localidad = "Tlaxcala"; 

if (localidad == "Buenos Aires") {
    saludo = function (name) {return `Holis ${name}`}
} 
else {
    saludo = function (name ) {return `Buenos dias ${name}`}
}

console.log( saludo ("Daniel")); */


/* 
Self invoking functions 
funciones que se autoinvocan
sintaxis 
(function (parametros) {} ) (argumentos )
*/

(function (name) {
    console.log(`Me llamo ${name} y me autoinvoco`)
} ) ( "Daniel Leon" ); 

/*
Arrow Functions 
funciones similares a las funciones expresadas pero no requiere la palabra 
reservada function 
en caso de solo ser un instruccion no requiere las llaves
Si la instruccion es el mismos retorno no requiere return

sintaxis 
const nombreVariable = (parametros) => instruccion; 

const nombreVariable = (parametros) => {
    instruccion; 
    return expresion; 
}
*/

/**
 * 
 * @param {number} base del triangulo
 * @param {number} altura del triangulo
 * @returns {number} base * altura / 2
 */

const areaRectangulo = (base, altura) => base * altura; 
console.log(`El area es : ${areaRectangulo(3, 9)} m2`)

const areaTriangulo = (base, altura) => ((base * altura)/2 )
console.log(`El area del triangulo es : ${areaTriangulo(12, 20)} m2.`)
console.log( (1000).toString(16));

/*
Rest parameters
Permite representar una serie de valores indefinidos en los argumentos
Esta serie de valores se presentan como un Array
Rest parameters debe estar al final de la lista de parametros
Sintaxis

*/ 

const sumatoriaMultiplesNumeros = (a, b, ...rest) => {
    let suma = a + b;
    for (let i = 0; i < rest.length; i ++){
        suma += rest[i];
    }
    return suma;    
} 
console.log(`Sumatoria de multiples numeros: ${sumatoriaMultiplesNumeros(2,5)}`)
console.log(`Multiples numeros: ${sumatoriaMultiplesNumeros(2, 5, 10, 9, 20, 10)}`)

/*
Funciones de Callback
es una funcion() que se pasa a otra funcion como argumento
Se pasa en el argumento como referencia (Sin parentesis.)
*/

function saludoALosPokemon () {
    return " Yo te elijo"; 
}

function saludoSquirtle (nombre) {
    return "vamo a calmarno" + nombre;
}

function elegiendoPokebola(saludo, nombre){
    console.log("hola estas en la liga pokenon?")
    console.log("Elige a tu mejor pokemon");
    console.log(saludo (nombre) );

}
elegiendoPokebola(saludoALosPokemon); 
elegiendoPokebola(saludoSquirtle);
elegiendoPokebola(function(nombre){return "quiii soy " + nombre}, "Cubone" );
elegiendoPokebola(nombre => `quiiii soy ${nombre}` , "Charizard" )


// Resolviendo ciclos anidados con filter e include // 

/* function getCommonCoursesWithFilter( student1Courses, student2Courses ){
    return student1Courses.filter( course => student2Courses.includes(course));
}
console.log(`Cursos en comun usando filter : ${getCommonCoursesWithFilter (student1Courses, student2Courses)}`)
 */


// contar la cantida de caracteres de una frase 
/*
"pepe pecas pica papas con un pico y una pala con un pico pica papas pepe pecas"
Motrar la cantidad de 'p'
usar funciones flecha
*/

const phasePP = "Peso Pluma pica papas con un pico y una pala con un pico pica papas Peso Pluma";
const counterCharacter = ( phase, character ) => phase.split(character).length-1;

const counterCharacterUnsensitive = ( phase, character ) => phase.toLowerCase().split(character).length-1;

console.log(`Cantidad de letras 'p' : ${ counterCharacter(phasePP, "p") } `); 
console.log(`Cantidad de letras 'p' : ${ counterCharacter(phasePP, "p") + counterCharacter(phasePP, "P") } `);
console.log(`Cantidad de letras 'p' : ${ counterCharacterUnsensitive(phasePP, "p") } `); 

const frase = "peso pluma pica papas con un pico y una pala con un pico pica papas peso pluma";
const contarLetrasP = (frase) => {
  const letrasP = frase.split('').filter(letra => letra === 'p' || letra === 'P');
  return letrasP.length;
}

// Recursividad 
/*
Una funcion recursiva es una funcion que se llama asi misma durante su ejecucion 

Se utiliza en algoritmos y soluciones que se basan en la division y conquista como calculos 
matematicos recorrido estructura de datos y algoritmos de busqueda y ordenamiento

patron: 
function nombreFuncionRecursiva (parametro) {
    if (condicionParo)
}
else{
    // llamada recursiva
    nombreFuncion( nuevo parametro);
}
*/

//  calculo del factorial de un numero usando el ciclo for 

function factorialConCicloFor (numero) {    
    let factorial = 1;
    for (let i = numero; i > 0; i--) {
        console.log(`factorial: ${factorial} * ${i} = ${factorial*i}`)
        factorial *= i; 
    }
}
console.log(`El factorial de 5 es: ${factorialConCicloFor(5)}`)


// Calculo del factorial de un numero usando recursividad 

function factorialConRecursividad( numero ){
    if ( numero === 1 ) {
        return 1;
    } else {
        console.log(`${numero} * ${numero-1}`);
        return numero * factorialConRecursividad( numero -1 );
    }
}

console.log(`El factorial recursivo de 5 es: ${factorialConRecursividad(5)}`);

/* Generar una funcion recursiva que muestre en consola un saludo donde se indique 
donde se indique el numero de saludo deseado 

Saludo 1 
Saludo 2 
Saludo 3 
Saludo 4 
Saludo 5
*/

function saludo (numeroSaludo) {
if (numeroSaludo > 1) {
    saludo (numeroSaludo -1)
}
console.log(`El numero de saludo es: ${numeroSaludo}`)
}

saludo(10);