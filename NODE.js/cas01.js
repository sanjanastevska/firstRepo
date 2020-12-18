const firstName = "Toni";
let isValid = false;

// indefined
let lastName;

console.log(isValid); //false
isValid = true;
console.log(isValid); //true

console.log(lastName); //undefined
lastName = "Parker";
console.log(lastName); //Parker

lastName = 2546;
console.log(lastName); //2546

lastName = null;
console.log(lastName); // 0 ja brise vrednosta i zatoa dava 0

console.log("Heloo");  //1 se pecati

setTimeout(() =>{
    console.log('there');  //3
},0)

setTimeout(() =>{
    console.log('2021'); //4 ---- there i 2020 se zacuvuvaat vo callbacks queue i cekaat da se pecatat vo call stack
},1000)

console.log("NodeJS"); //2 po red se pecati

//hoisting - var e housting i isto ima i na funkciii
console.log(age) //22 iako e deklarirano pokasno ke bide odnesena(hoistet) na vrvot na samata programa, nad site dr deklrarirani promenlivi
var age = 22;

console.log(age) //error-  nema da pristamime pred da bide deklarirana i so const isto
let year = '2020'

printName()
function printName(){
   console.log('John Bon') ;  //ke se ispecati
}

// regular expressiot nema da mozi da se ispecati
const print = function(){

}


//scope

function operation (type){
    const number = 5;
    const x=5;
    const y=7;
    let result;
    if(type === 'add'){
        const z= 10;
        result=x+y;
        return result;
        // block scope

    }else if(type==="sub"){
        result = x-y;
        return result;
    }else if(type==="mul"){
        result = x*y
        return result;
    }
    else{
        return "Unknown"
    }
    console.log(z) //undefined
}

operation("add")



   


