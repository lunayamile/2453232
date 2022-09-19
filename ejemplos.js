//---------------------------
function saySomething (x) {
    return new  Promise (resolve => {
        setTimeout(() => {
           resolve("something" + x); 
        }, 2000);
    });
}

async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
}
talk(2);
talk(4);
talk(8);


//-------------------------
const Promise= new promise((resolve,reject) => {
    resolve("success!");
})

.then(value => {
console.log(value);
return "we";
})
.then(value => {
console.log(value);
return "can";
})

.then(value => {
    console.log(value);
    return "chain";
 })   

.then(value => {
console.log(value);
return "promises";
})

.then(value => {
console.log(value);
})
.catch(value => {
console.log(value);
})



//---------------------------------
let Promesa = new Promise (function(resolve, reject) {
    let suma = 2 + 20;
    if (suma === 8){
        resolve("correcto");
    } else{
        reject("error");
    }
});

Promesa.then(function (mensaje) {
    console.log(mensaje);
}).catch(function (error){
    console.log(error);
});




//ejercicio numero de 1 a 1

const Ejemplo = new promise(function(resolve,reject) {
    if (true) {
        let x=1;
        setTimeout(() => {
        resolve (x);
        }, 1000);
}
else {
    if (false)
    reject("Fail");
    });  
Ejemplo
.then(x => {
console.log(x);
return x++;
})

.then(x => {
console.log(x);
return x++;
})

.then(x => {
console.log(x);
return x++;
})   

.then(x => {
console.log(x);
return x++;
})

.catch(x => {
console.log(x) ++;
})
//-----------------------------

