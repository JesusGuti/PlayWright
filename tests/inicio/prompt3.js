let prompt = require('prompt-sync')()

let num = prompt('ingrese un num: ')
num = parseInt(num)

switch(num){
     case 1:   console.log('lunes')
               break;
     case 2:   console.log('martes')
               break;
     default:  console.log('seleccione')
               break;
}