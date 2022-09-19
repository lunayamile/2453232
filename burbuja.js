//Método de la burbuja
var vector=[];
for (let i = 0; i < 10 ; i++) {
vector[i]=Math.round((Math.random())*100);
}
//var suma=0,cont=0;
//[suma,cont]=[0,0];//declarar varias variables en una línea, usa arreglos
console.log(vector);
var aux=0;
    for (let i = 0; i < vector.length-1; i++) {
       for (let j = i+1; j < vector.length ; j++) {
        if (vector[i]<vector[j]) {
            aux=vector[j];
            vector[j]=vector[i];
            vector[i]=aux;
        }
        
       }        
    }
console.log(vector);