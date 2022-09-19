class Usuario{
    constructor(id, nombre, edad){
        this._id = id;
        this._nombre = nombre;
        this._edad = edad;
    }
}

class Estudiante extends Usuario{
    constructor(id, nombre, edad, ficha, programa){
        super(id, nombre, edad);
        this._ficha = ficha;
        this._programa = programa;
    }
}

var e1 = new Estudiante(111, "Juan Perez", 18, 2237756, "ADSI");
var e2 = new Estudiante(112, "Ana Herrera", 18, 2237756, "ADSI");

class Moto {
    constructor(placa, estudiante){
        this._placa = placa;
        this._estudiante = estudiante;
        //const objetoInterno = new Estudiante();
    }
}
// relacion TIENE - UN formato sencillo 
var m1 = new Moto("se-123", e1);
console.log(m1);

//Relacion TIENE - UN formato compuesto
class Grupo{
    constructor(codGrupo, estudiantes){
        this._codGrupo = codGrupo;
        this._estudiantes = estudiantes;
        //const objetoInterno = new Estudiante();
    }
    incorporarEstudiante(estudiante){
        this._estudiantes.push(estudiante);
    }
}

var g1=[];
var grupo1 = new Grupo(909, g1);
console.log(grupo1);
grupo1.incorporarEstudiante(e1);
grupo1.incorporarEstudiante(e2);
console.log(grupo1); 

//Relacion de COMPOSICION: 
class Grupo2{
    constructor(codGrupo){
        this._codGrupo = codGrupo;
        this._estudiante = new Estudiante (2,"Maria",20,22377756,"ADSI") ;
    }
}

var grupo2 = new Grupo2(2)
console.log(grupo2);
