function receivesAFunction(something){
    something();
} 
function  returnsANamedFunction(){
    return function myFunction(){
    console.log("mFunction")
    }
}
function returnsAnAnonymousFunction(){
    return function(){}
}