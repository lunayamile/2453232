class Persona{
    constructor(nombre, documento){
        this._nombre = nombre;
        this._documento = documento;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set documento(documento){
        this._documento = documento;
    }

    get nombre(){
        return this._nombre;
    }

    get documento(){
        return this._documento;
    }
    datosCompletos(){
        return `${this._nombre}  ${this._documento}`
    }
}
const ob = new Persona(); 
console.log(typeof(ob));

class Aprendiz extends Persona{
    constructor(nombre,documento, ficha, programa){
        super(nombre, documento);
        this._ficha = ficha; 
        this._programa = programa;
    }
    set ficha(ficha){
        this._ficha = ficha;
    }

    set programa(programa){
        this._programa = programa;
    }

    get ficha(){
        return this._ficha;
    }

    get programa(){
        return this._programa;
    }

    datosCompletos(){
        return `${this._ficha} ${this._programa}
                ${this._nombre} ${this._documento}`
    }
}

const ap1 = new Aprendiz('Juan Florez', 54321, 2453232, 'ADSI');
console.log(ap1._nombre);
console.log(ap1.programa);
console.log(ap1.datosCompletos());



//----- TAREA -----



//       1: 

class Poligono{
    constructor(numeroLados, cantidadAngulos, vertices, angulos, longitudLados){
        this._numeroLados = numeroLados;
        this._cantidadAngulos = cantidadAngulos; 
        this._vertices = vertices; 
        this._angulos = angulos; 
        this._longitudLados = longitudLados;
    }

    get numeroLados(){
        return this._numeroLados;
    }
    get cantidadAngulos(){
        return this._cantidadAngulos;
    } 
    get vertices(){
        return this._vertices;
    }
    get angulos(){
        return this._angulos;
    }
    get longitudLados(){
        return this._longitudLados;
    }

    set numeroLados(numeroLados){
        this._numeroLados = numeroLados;
    }
    set cantidadAngulos(cantidadAngulos){
        this._cantidadAngulos = cantidadAngulos;
    }
    set vertices(vertices){
        this._vertices = vertices;
    }
    set angulos(angulos){
        this._angulos = angulos;
    }
    set longitudLados(longitudLados){
        this._longitudLados = longitudLados;  
    }

    //funciones: 
    perimetroCuad(_longitudLados){
        return `Perimetro del cuadrado: `+ 4 * `${this._longitudLados}`
    }

    areaCuad(_longitudLados){
        return `Area del cuadrado: ` + Math.pow(this._longitudLados, 2)
    }

    perimetroTrian(_longitudLados){
        return `Perimetro del triangulo: `+ (this._longitudLados + this._longitudLados + this._longitudLados)
    }

    alturaTrian(_longitudLados){
        return `Altura triangulo: `+ (Math.sqrt(3*this._longitudLados)/2)
    }

    areaTrian(_longitudLados){
        return `Area del triangulo: `+ (this._longitudLados * (Math.sqrt(3*this._longitudLados)/2) /2) 
    }

    perimetroRect(_longitudLados){
        return `Perimetro del rectangulo: `+ (2*this._longitudLados[0] + 2*this._longitudLados[1])
    }

    areaRect(_longitudLados){
        return `Area del rectangulo: `+ (this._longitudLados[0]*this._longitudLados[1])
    }


}

class Cuadrado extends Poligono {
    constructor(numeroLados, cantidadAngulos, vertices, angulos, longitudLados){
        super(numeroLados, cantidadAngulos, vertices, angulos, longitudLados);
    }

    get numeroLados(){
        return this._numeroLados;
    }
    get cantidadAngulos(){
        return this._cantidadAngulos;
    } 
    get vertices(){
        return this._vertices;
    }
    get angulos(){
        return this._angulos;
    }
    get longitudLados(){
        return this._longitudLados;
    }

    set numeroLados(numeroLados){
        this._numeroLados = numeroLados;
    }
    set cantidadAngulos(cantidadAngulos){
        this._cantidadAngulos = cantidadAngulos;
    }
    set vertices(vertices){
        this._vertices = vertices;
    }
    set angulos(angulos){
        this._angulos = angulos;
    }
    set longitudLados(longitudLados){
        this._longitudLados = longitudLados;  
    }

}

class Triangulo extends Poligono {
    constructor(numeroLados, cantidadAngulos, vertices, angulos, longitudLados){
        super(numeroLados, cantidadAngulos, vertices, angulos, longitudLados);
    }

    get numeroLados(){
        return this._numeroLados;
    }
    get cantidadAngulos(){
        return this._cantidadAngulos;
    } 
    get vertices(){
        return this._vertices;
    }
    get angulos(){
        return this._angulos;
    }
    get longitudLados(){
        return this._longitudLados;
    }

    set numeroLados(numeroLados){
        this._numeroLados = numeroLados;
    }
    set cantidadAngulos(cantidadAngulos){
        this._cantidadAngulos = cantidadAngulos;
    }
    set vertices(vertices){
        this._vertices = vertices;
    }
    set angulos(angulos){
        this._angulos = angulos;
    }
    set longitudLados(longitudLados){
        this._longitudLados = longitudLados;  
    }
}

class Rectangulo extends Poligono {
    constructor(numeroLados, cantidadAngulos, vertices, angulos, longitudLados){
        super(numeroLados, cantidadAngulos, vertices, angulos, longitudLados);
    }

    get numeroLados(){
        return this._numeroLados;
    }
    get cantidadAngulos(){
        return this._cantidadAngulos;
    } 
    get vertices(){
        return this._vertices;
    }
    get angulos(){
        return this._angulos;
    }
    get longitudLados(){
        return this._longitudLados;
    }

    set numeroLados(numeroLados){
        this._numeroLados = numeroLados;
    }
    set cantidadAngulos(cantidadAngulos){
        this._cantidadAngulos = cantidadAngulos;
    }
    set vertices(vertices){
        this._vertices = vertices;
    }
    set angulos(angulos){
        this._angulos = angulos;
    }
    set longitudLados(longitudLados){
        this._longitudLados = longitudLados;  
    }

    
}


let cuadrado1 = new Cuadrado(4, 4, 4, [90,90,90,90], 5);
console.log(cuadrado1);


let triangulo1 = new Triangulo(3, 3, 3, [60,60,60], 8)
console.log(triangulo1);

let rectangulo1 = new Rectangulo(4, 4, 4, [90,90,90,90], [6, 7])
console.log(rectangulo1);

console.log(cuadrado1.perimetroCuad())
console.log(cuadrado1.areaCuad())

console.log(triangulo1.perimetroTrian())
console.log(triangulo1.alturaTrian())
console.log(triangulo1.areaTrian())

console.log(rectangulo1.perimetroRect())
console.log(rectangulo1.areaRect())



//       2: 


class Cuenta{
    constructor (nombreTitular, numeroCuenta, saldo, banco, clave){
        this._nombreTitular = nombreTitular;
        this._numeroCuenta = numeroCuenta; 
        this._saldo = saldo;
        this._banco = banco;
        this._clave = clave; 
    }

    get nombreTitular(){
        return this._nombreTitular;
    }
    get numeroCuenta(){
        return this._numeroCuenta;
    }
    get saldo(){
        return this._saldo;
    }
    get banco(){
        return this._banco;
    }
    get clave(){
        return this._clave; 
    }

    set nombreTitular(nombreTitular){
        this._nombreTitular = nombreTitular;
    }
    set numeroCuenta(numeroCuenta){
        this._numeroCuenta = numeroCuenta;
    }
    set saldo(saldo){
        this._saldo = saldo;
    }
    set banco(banco){
        this._banco = banco;
    }
    set clave(clave){
        this._clave = clave; 
    }
}

class CuentaAhorros extends Cuenta { 
    constructor(nombreTitular, numeroCuenta, saldo, banco, clave, pagoInteres){
        super(nombreTitular, numeroCuenta, saldo, banco, clave); 
        this._pagoInteres = pagoInteres;
    }

    get nombreTitular(){
        return this._nombreTitular;
    }
    get numeroCuenta(){
        return this._numeroCuenta;
    }
    get saldo(){
        return this._saldo;
    }
    get banco(){
        return this._banco;
    }
    get clave(){
        return this._clave; 
    }
    get pagoInteres(){
        return this._pagoInteres;
    }

    set nombreTitular(nombreTitular){
        this._nombreTitular = nombreTitular;
    }
    set numeroCuenta(numeroCuenta){
        this._numeroCuenta = numeroCuenta;
    }
    set saldo(saldo){
        this._saldo = saldo;
    }
    set banco(banco){
        this._banco = banco;
    }
    set clave(clave){
        this._clave = clave; 
    }
    set pagoInteres(pagoInteres){
        this._pagoInteres = pagoInteres;
    }
}

class CuentaCorriente extends Cuenta {
    constructor(nombreTitular, numeroCuenta, saldo, banco, clave, ingresos){
        super(nombreTitular, numeroCuenta, saldo, banco, clave); 
        this._ingresos = ingresos;
    }

    get nombreTitular(){
        return this._nombreTitular;
    }
    get numeroCuenta(){
        return this._numeroCuenta;
    }
    get saldo(){
        return this._saldo;
    }
    get banco(){
        return this._banco;
    }
    get clave(){
        return this._clave; 
    }
    get ingresos(){
        return this._ingresos;
    }

    set nombreTitular(nombreTitular){
        this._nombreTitular = nombreTitular;
    }
    set numeroCuenta(numeroCuenta){
        this._numeroCuenta = numeroCuenta;
    }
    set saldo(saldo){
        this._saldo = saldo;
    }
    set banco(banco){
        this._banco = banco;
    }
    set clave(clave){
        this._clave = clave; 
    }
    set ingresos(ingresos){
        this._ingresos = ingresos;
    }
}