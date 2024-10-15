//funciones 
/*function hello (){
console.log("hola js");
console.log("hola html");
console.log("hola css");
}

hello();*/
//retorno de una funcion*\

/*function hello (){
return "hola js"
}
 const result =hello();*/
 //hello();

 //

 /*function hello(){
return 20;
 }
 console.log(hello());*/
//retorna valor del objeto
/*function hello(){
    return{
        nombre:"eduardo"
    }
}
console.log(hello());*/
//funcion que retorna a otra funcion
/*function hello(){
    return function(){
        return "hola JS"
    }

}
console.log(hello()());*/
// ========================= USO DE PARAMETROS EN FUNCIONES =========

/*function pepeJS(name){
return "Eres un cara de cola " + name
}
console.log(pepeJS("valeria"));*/
//pasar mas de un parametro a la funcion 
//control de errores en parametros
/*function hellpconJS(x,y){
    if( y ==undefined)
    return x * y;
}
console.log(hellpconJS(10,20));*/
//==OBJETOS==
const user = {
    nombre: "valeria",
    apeelidoM: "velazquez",
    edad :16,
    edocivil:"virgen",
    domicilio : {
        ciudad : "CDMX",
        calle : "col del bosque",
        numero: 15
    },
    amigos:["charly,mafer,karel"],
    activo:true,
    sendMensaje: function(){
        return "enviando mensaje"
    }

}
alert(user.domicilio.calle+""+user.domicilio.ciudad+""+user.domicilio.numero)
alert(user.domicilio)
console.log(user.amigos)
alert(user.activo)
console.log(user.nombre)
console.log(user.apeelidoM)
console.log(user.edocivil)

// alert ciudad,calle , numero..
// consola los amigos 
//alert (activo o muerto )