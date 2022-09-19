// FUNCIONES CONDICIONALES CLASICAS Y FLECHA: 


// (2. Escribe un programa que pida tres números y que escriba si son los tres
// iguales, si hay dos iguales o si son los tres distintos.)

function comparar(a,b,c){
    console.log(a,b,c)
    if (a==b && a==c && b==c) {
        console.log("Los tres numeros son iguales ") 
    } else if (a==b ||  b==c || a==c ) {
        console.log("Dos numeros son iguales ")
    } else if (a!=b && a!=c && b!=c) {
        console.log("Los tres numeros son distintos ")
    }
}
comparar(Math.round(Math.random()*100), Math.round(Math.random()*100),Math.round(Math.random()*100))


//-------------------------------- FLECHA: 

var comparando = (a,b,c)=> {
    if (a==b && a==c && b==c) {
        console.log("Los tres numeros son iguales ") 
    } else if (a==b ||  b==c || a==c ) {
        console.log("Dos numeros son iguales ")
    } else if (a!=b && a!=c && b!=c) {
        console.log("Los tres numeros son distintos ")
    }
    console.log(a,b,c)
}
comparando(Math.round(Math.random()*100), Math.round(Math.random()*100),Math.round(Math.random()*100))


//3: 

//(7. Un obrero necesita calcular su salario semanal): Si trabaja 40 horas  o menos se le paga $2600 por hora, Si trabaja más de 40 horas se le paga  $2600 por cada una de las primeras 40 horas y $5000 por cada hora extra

function salario(_horas){
    semanal = _horas * 2600;
    final = _horas - 48;
    semanal2  = 104000 + (final * 5000);
    if (_horas <= 40) {
        console.log(`Se le paga ${semanal} por las ${_horas} horas`)
    } else if (_horas > 40) {
        console.log(`Se le paga ${semanal2} por las ${_horas} horas`)
    }
}
salario(Math.round(Math.random()*100));


//-------------------------------- FLECHA: 

var calculo = _horas => { semanal = _horas * 2600; final = _horas - 40; semanal2  = 104000 + (final * 5000);
    if (_horas <= 40) {
        console.log(`Se le paga ${semanal} por las ${_horas} horas`)
    } else if (_horas > 40) {
        console.log(`Se le paga ${semanal2} por las ${_horas} horas`)
    }
}
calculo(Math.round(Math.random()*100))





// FUNCIONES CICLOS CLASICAS: 


//(1. Determinar los divisores de un número introducido por teclado)

function divisores(_numero, _final){
    contador = 0 
    while (contador < _final) {
        ++contador
        var divisor = _numero % contador;
        if (divisor == 0) {
            console.log(`${contador} es divisor de ${_numero}`)
        } else {
            console.log(`${contador} no es divisor de ${_numero}`)
        }
    }
}
divisores(Math.round(Math.random()*100), Math.round(Math.random()*50))


//-------------------------------- FLECHA: 

var divisible = (_numero, _final) => {contador = 0; 
    while (contador < _final) {++contador; var divisor = _numero % contador;
        if (divisor == 0) {
            console.log(`${contador} es divisor de ${_numero}`)
        } else {
            console.log(`${contador} no es divisor de ${_numero}`)
        }
    }
}
divisible(Math.round(Math.random()*100), Math.round(Math.random()*50))


//2: 

//(2. Determinar si un numero es o no es primo)

function primos(_num){
    var det = 1; 
    for (let i = 2; i < _num; i++) {
        if (_num % i == 0) {
            det = 2
        }
    }
    if (det == 1) {
        console.log(`${_num} es primo`)
    } else if (det == 2) {
        console.log(`${_num} no es primo`)
    }
}
primos(Math.round(Math.random()*100))


//-------------------------------- FLECHA: 

var numprimos = _num => {var det = 1;
    for (let i = 2; i < _num; i++) {
        if (_num % i == 0) {
            det = 2
        }
    }
    if (det == 1) {
        console.log(`${_num} es primo`)
    } else if (det == 2) {
        console.log(`${_num} no es primo`)
    }
}
numprimos(Math.round(Math.random()*100))



//(8. Determinar cuales son los múltiplos de 5 comprendidos entre
//1 y N.)

function multiplos(_number){
    console.log(`Los multiplos del numero 5 comprendidos entre 1 y ${_number} son: `)
    for (let i = 1; i <= _number; i++) {
        operacion = i * 5;
        console.log(`${operacion}`)
    }
}
multiplos(Math.round(Math.random()*100))


//-------------------------------- FLECHA:

var multiplo = _number => {console.log(`Los multiplos del numero 5 comprendidos entre 1 y ${_number} son: `); 
    for (let i = 1; i <= _number; i++) {
        operacion = i * 5;
        console.log(`${operacion}`)
    } 
}
multiplo(Math.round(Math.random()*50))


//5:


//(//9. Calcular la operación x n sin utilizar la función pow)

function potencia(_base, _exponente){
    console.log(`Base: ${_base}, Exponente: ${_exponente}`)
    mult = 1; 
    for (let i = 1; i <= _exponente ; i++) { 
        for (let i = _base; i <= _base; i++) {
            mult = mult * i
        }
    }
    console.log(mult) 
}
potencia(Math.round(Math.random()*10),Math.round(Math.random()*10))


//-------------------------------- FLECHA:

var elevar = (_base, _exponente) => {console.log(`Base: ${_base}, Exponente: ${_exponente}`);mult = 1; 
    for (let i = 1; i <= _exponente ; i++) { 
        for (let i = _base; i <= _base; i++) {
            mult = mult * i
        }
    }
    console.log(mult)    
}
elevar(Math.round(Math.random()*10), Math.round(Math.random()*10))




// MEDIANA FUNCIONES 

//CLASICA: 

function mediana(vector){
    for (let i = 0; i < 20 ; i++) {
        vector[i]=Math.round((Math.random())*100);
    }
    console.log(vector)
    var aux=0;
    for (let i = 0; i < vector.length-1; i++) {
       for (let j = i+1; j < vector.length ; j++) {
        if (vector[i] > vector[j]) {
            aux=vector[j];
            vector[j]=vector[i];
            vector[i]=aux;
        }
       }        
    }
    console.log(vector);
    for (let i = 0; i < vector.length; i++) {
        var mdn = vector.length+1
        var mediana = mdn/2
        var medianaf =  Math.round(mediana)
        var posicion = vector[medianaf-1] 
    } if (mdn % 2 == 0) {
        console.log(`la mediana es: ${mediana}`)  
        console.log(`la mediana redondeada es: ${medianaf}`) 
        console.log(`la posicion es: ${posicion}`)  
    } else {
        p2 = vector[medianaf-2]
        console.log(`la mediana es: ${mediana}`)  
        console.log(`la mediana redondeada es: ${medianaf}`) 
        console.log(`la posicion 1 es: ${posicion}`) 
        console.log(`la posicion 2 es: ${p2}`) 
    }
}

mediana([])


//-------------------------------- FLECHA:

var medianaEstadistica = vector =>{
    for (let i = 0; i < 20 ; i++) {
        vector[i]=Math.round((Math.random())*100);
    } console.log(vector); var aux=0;
    for (let i = 0; i < vector.length-1; i++) {
        for (let j = i+1; j < vector.length ; j++) {
         if (vector[i] > vector[j]) {
             aux=vector[j];
             vector[j]=vector[i];
             vector[i]=aux;
         }}} console.log(vector);
         for (let i = 0; i < vector.length; i++) {var mdn = vector.length+1; var mediana = mdn/2; ;var medianaf =  Math.round(mediana); var posicion = vector[medianaf-1];
        } if (mdn % 2 == 0) {console.log(`la mediana es: ${mediana}`); console.log(`la mediana redondeada es: ${medianaf}`); console.log(`la posicion es: ${posicion}`)  
        } else { p2 = vector[medianaf-2]; console.log(`la mediana es: ${mediana}`); console.log(`la mediana redondeada es: ${medianaf}`) ; console.log(`la posicion 1 es: ${posicion}`); console.log(`la posicion 2 es: ${p2}`) 
        }
}
medianaEstadistica([])
