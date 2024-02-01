// var listaDeCompras = [];

// listaDeCompras[3] = 'Tomates';
// listaDeCompras[1] = 'Lechuga';

// console.log(listaDeCompras.length);
// // listaDeCompras[1];
// // var elementoDelArray = listaDeCompras[1];
// // console.log(elementoDelArray);


// var colores = ['amarillo', 'azul'];
// colores.push('rojo'); //push AGREGA elemntos al FINAL del array
// colores.unshift('verde'); //unshift AGREGA elementos al COMIENZO del array
// colores.pop(); //pop ELIMINA el ULTIMO elemento del array
// colores.shift(); //shift ELIMINA el PRIMER elemento del array
// console.log(colores);


// var pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali'];
// var incluyeDali = pintores.includes('Monet'); //includes REVISA si el ELEMENTO que especifiquemos se encuentra dentro del arreglo
// console.log(incluyeDali);


// var numeros = [10,6,8,9];
// var cumplenCondicion = numeros.every(num => {  //every nos permite saber si TODOS los ELEMENTOS de un arreglo cumplen una condicion.
//     return num > 5;
// }); 
// console.log(cumplenCondicion);

// var palabra = 'Henri';
// var palabraSeparada = palabra.split(''); //split SEPARA la palabra por caracteres
// palabraSeparada.pop();
// palabraSeparada.push('y');
// // console.log(palabraSeparada);
// var palabraArreglada = palabraSeparada.join(''); //join UNE los caracteres
// console.log(palabraArreglada);


var numeros = [1,2,3,4];
// numeros.forEach((num) => console.log(num));
// numeros.forEach(num => {
//     if(num === 3){
//         console.log(num);
//     }
// })

var masUno = numeros.map((num) =>{
    return num + 1;
});
console.log(masUno);