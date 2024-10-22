//FUNCION FLECHA
//1.-(((((((((((((((((())))))))))))))))))
function mifuncion(a,b){
return a+b;

}
//2.-
console.log(mifuncion(2,3));

//estructura de funcion flecha 
let saludos = () => {};
//3.-888888888888888888888888888888888888888888888888
let salu2 = (nombre) =>{
    return "saludos " +nombre;
}
console.log(salu2("eduardo"));
/////4.-/////////////////////////////////////////////////

let saludar = nombre => "Saludos " + nombre;
console.log( saludar ("lalo"));

//5.-///////pasar multiples parametros//////////////////////////
let suma = (a,b) => a+b;
console.log(suma(9,10));

//6.-////////////////crear objeto en funcion flecha//////////////////
let obj = () => ({nombre:"emiliano",edad:17})

//llamamos al objeto y accedemos a la propiedad

let persona = obj().nombre;
console.log(obj().nombre);

//7.- arreglos
//accediendo al array
let arrFunc = () => [1,2,3,4];
console.log(arrFunc());
//accediedno L ARREGLO
console.log(arrFunc()[4]);
//8.-