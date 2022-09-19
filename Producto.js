const Categoria = require("./Categoria");

class Producto extends Categoria{
    constructor(codigocategoria, codigoproducto, precio, nombreproducto, caracteristicas, proveedor, imagen, especificaciones, descripcion){
        super(codigocategoria);
        this._codigoproducto = codigoproducto;
        this._precio = precio;
        this._nombreproducto = nombreproducto;
        this._caracteristicas = caracteristicas;
        this._proveedor = proveedor;
        this._imagen = imagen;
        this._especificaciones = especificaciones;
        this._descripcion = descripcion;
    }

    set codigoproducto(codigoproducto){
        this._codigoproducto = codigoproducto;
    }
    set precio(precio){
        this._precio = precio;
    }
    set nombreproducto(nombreproducto){
        this._nombreproducto = nombreproducto;
    }
    set caracteristicas(caracteristicas){
        this._caracteristicas = caracteristicas;
    }
    set proveedor(proveedor){
        this._proveedor = proveedor;
    }
    set imagen(imagen){
        this._imagen = imagen;
    }
    set especificaciones(especificaciones){
        this._especificaciones = especificaciones;
    }
    set descripcion(descripcion){
        this._descripcion = descripcion;
    }

    get codigoproducto(){
        return this._codigoproducto;
    }
    get precio(){
        return this._precio;
    }
    get nombreproducto(){
        return this._nombreproducto;
    }
    get proveedor(){
        return this._proveedor;
    }
    get imagen(){
        return this._imagen;
    }
    get especificaciones(){
        return this._especificaciones;
    }
    get descripcion(){
        return this._descripcion;
    }
}
module.exports = Producto;
