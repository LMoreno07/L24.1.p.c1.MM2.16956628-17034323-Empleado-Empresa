export default class Cl_dato{
    constructor(nombre,sexo,edad){
      this._nombre=nombre;  
      this._edad=edad;
      this._sexo=sexo;
     }

     setNombre(n){
      this._nombre=+n;
   }

     getNombre(){
      return this._nombre;
   }

     setEdad(e){
        this._edad=+e;
     }

     getEdad(){
        return this._edad;
     }
     setSexo(s){
      this._sexo=+s;
   }

     getSexo(){
      return this._sexo;
   }

}