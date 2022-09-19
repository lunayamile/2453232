class Producto{
    constructor(nombre, precio){
        this._nombre=nombre;
        this._precio=precio;
    }    
    get nombre(){
        return this._nombre;
    }    

    set nombre(nombre){
        this._nombre=nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio=precio;
    }
}

let producto = new Producto('PC', 2000000);
console.log(producto._nombre,producto._precio)

//INSTANCIACION DE OBJETOS - operador new
//let x=10; similar a declarar variables
let prod1=new Producto('computador',2000000);
console.log(prod1.nombre);
prod1.nombre="computador portatil";
console.log(prod1.nombre);


// let prod2=new Producto('Celular',221300);
// console.log(prod1);
// console.log(typeof(prod1));
// console.log(prod2);
// console.log(typeof(prod2));

class Aprendiz{
    constructor(nombre, tipo_id, numero_id, numero_ficha){
        this._nombre = nombre;
        this._tipo_id = tipo_id;
        this._numero_id = numero_id; 
        this._numero_ficha = numero_ficha;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get tipo_id(){
        return this._tipo_id;
    }
    set tipo_id(tipo_id){
        this._tipo_id = tipo_id;
    }

    get numero_id(){
        return this._numero_id;
    }
    set numero_id(numero_id){
        this._numero_id = numero_id;
    }

    get numero_ficha(){
        return this._numero_id;
    }
    set numero_ficha(numero_ficha){
        this._numero_ficha = numero_ficha;
    }
}

let aprendiz1 = new Aprendiz('Luna yamile pinzon ramirez', 'Cedula de Ciudadania', 1016712556, 2453232);

console.log(aprendiz1._nombre, aprendiz1._tipo_id, aprendiz1._numero_id, aprendiz1._numero_ficha);