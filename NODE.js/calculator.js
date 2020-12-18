function add(x,y){
    console.log(x,y)
    return x+y;
}

function div(x,y){
    return x/y;
}

function sub(x,y){
    return x-y;
}

function mul(x,y){
    return x*y;
}

//module vrakja objekt
module.exports = {
    add,
    div,
    sub,
    mul
};