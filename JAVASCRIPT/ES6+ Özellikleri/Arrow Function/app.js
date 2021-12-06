const merhaba = function(){
    console.log("Merhaba");

}

merhaba();

// Arrow Function

const merhaba = () => {
    console.log("Merhaba");

}
merhaba();


const merhaba = (firstName,lastName) => console.log("Merhaba",firstName,lastName);


merhaba("Sezen","Aksu");

const cube = function(x){
    return x * x* x;
}
console.log(cube(4));


const cube = x => x * x* x;


console.log(cube(4));