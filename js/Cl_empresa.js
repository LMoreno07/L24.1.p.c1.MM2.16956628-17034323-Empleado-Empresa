export default class Cl_empresa{
    constructor(){
        this.acumE=0;
        this.acumEH=0;
        this.cantP=0;
        this.cantM=0;
        this.mayorEM=0;
        this.nombre=" ";
    }

    procesarDato(dat){
        this.acumE+=dat.getEdad();
        //this.cantP++;
        if(dat.getSexo()=="F"){
            this.cantM++;
            if(dat.getEdad()>this.mayorEM){
                this.mayorEM=dat.getEdad();
                this.nombre=dat.getNombre();
            }
        } else {
            this.acumEH+=dat.getEdad();
            this.cantP++;
            }
    }
    devMayorEM(){
        return this.mayorEM;
    }

    devNombre(){
        return this.nombre;
    }

    promEdad(){
        return this.acumEH/this.cantP;
    }
}