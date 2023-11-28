/**Prompt sirve para poder ingresar valores desde consola**/
let prompt = require('prompt-sync')()
 
let edad = prompt('Ingrese una edad: ')
edad = parseInt(edad)

if(edad >= 18){
     console.log('eres mayor de edad')
}else{
     console.log('eres menor de edad')
}