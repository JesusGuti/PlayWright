let prompt = require('prompt-sync')();

var num = prompt('ingrese un numero: ')

if(num % 2 == 0){
     console.log('numero par')
}else{
     console.log('numero impar')
}