// Sincrono
console.log("-----------------sincrono-------------")
console.log("Inicio")
console.log(1)
console.log(2)
console.log(3)
console.log("fin")

// Asíncrono : Mecanismo de ejecucion no secuencial de JS
console.log("-----------------asincrono-------------")
console.log("Inicio")
     setTimeout(function(){
          console.log(1)
     },2000)
     setTimeout(function(){
          console.log(2)
     },1000)
console.log("fin")
