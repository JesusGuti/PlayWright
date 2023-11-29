// // Sincrono
// // console.log("-----------------sincrono-------------")
// // console.log("Inicio")
// // console.log(1)
// // console.log(2)
// // console.log(3)
// // console.log("fin")

// // // Asíncrono : Mecanismo de ejecucion no secuencial de JS
// // console.log("-----------------asincrono-------------")
// // console.log("Inicio")
// // setTimeout(function () {
// //      console.log(1)
// // }, 2000)
// // setTimeout(function () {
// //      console.log(2)
// // }, 1000)
// // console.log("fin") 


// //Promesas
// // Estado pendiente | resuelto | error
// const promesa = new Promise(function(resolve,reject){
//      //const seCumplio = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//      const seCumplio = false
//      if(seCumplio){
//           //Resolve devuelve un valor
//           resolve("salio todo correcto")
//      }else{

//           reject("salio mal")
//      }     
// })

// //Es como un try catch
// promesa.then(function(value){
//      console.log(value)
// }).catch(function(reason){
//      console.log(reason)
// // })

// /**--------------------------------------------------------------------------------------
//  * Esta es un peticion de datos y asu vez una promesa
//  * No se si la peticion se va a cumplir: En caso de que se cumpla convierto en json, caso contrario muestro el error
// **/
// fetch("https://pokeapi.co/api/v2/pokemon/ditto").
// then(function(response){
//      response.json().then(function(data){
//           console.log(data)
//      })
// }).
// catch(function(error){
//      console.log(error)
// })

/**ASYNC/AWAIT*
async function getDitto(){
   try{
     const response = await fetch("https://pokeapi.co/api/v2/pokemon/")   
     const data = await response.json()
     console.log(data) 
   }catch(error){
     console.log(error)
   }
}

getDitto()*/

function timeout(fn,ms){
  return new Promise(function(resolve){
    return setTimeout(function(){
      fn()
      resolve()
    },ms)
  })
}

async function test(){
  console.log('Inicio')
  await timeout(function(){
    console.log('Uno')
  },2000)
  await timeout(function(){
    console.log('Dos')
  },1000)
  console.log('Fin')
}

test()