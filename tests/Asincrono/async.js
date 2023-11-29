/* // Sincrono
console.log("-----------------sincrono-------------")
console.log("Inicio")
console.log(1)
console.log(2)
console.log(3)
console.log("fin")

// Asíncrono : Mecanismo de ejecucion no secuencial de JS
console.log("-----------------asincrono-------------")
console.log("Inicio")
setTimeout(function () {
     console.log(1)
}, 2000)
setTimeout(function () {
     console.log(2)
}, 1000)
console.log("fin") */

//Promesas
// Estado pendiente | resuelto | error
const promesa = new Promise(function(resolve,reject){
     //const seCumplio = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
     const seCumplio = false
     if(seCumplio){
          //Resolve devuelve un valor
          resolve("salio todo correcto")
     }else{

          reject("salio mal")
     }     
})

/**Es como un try catch**/
promesa.then(function(value){
     console.log(value)
}).catch(function(reason){
     console.log(reason)
})