const loggingModule = require('./loggingModule'); 
//destrukcija 
const {add,div,sub,mul} = require('./calculator'); 


loggingModule.info('Node.js started');

const sum = add(4,5); //povikuvanje na funkcija
console.log('Sum is: ', sum);

// const {id, firstName, lastName, gender} = users; destruction na objekt za edna linija