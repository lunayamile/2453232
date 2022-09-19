const sumarpromedio=(arreglo1,arreglo2)=>{

var suma=0
var suma2=0

var tabla1=arreglo1.length
var tabla2=arreglo2.length


for (var i=0; i<tabla1;i++){
    suma =suma+arreglo1[i]


}
suma=suma/tabla1

for(var i=0; i<tabla2;i++){
    suma2=suma2+arreglo2[i]
}
suma2=suma2/tabla2

if(suma>suma2){
    console.log(`el vector con mayor promedio es el numero uno con ${suma}`)

}else if(suma<suma2){
    
    console.log(`el vector con mayor promedio es el numero uno con ${suma2}`)


}


}


sumarpromedio([2,3,4,5,3,2],[2,8,0,9])
