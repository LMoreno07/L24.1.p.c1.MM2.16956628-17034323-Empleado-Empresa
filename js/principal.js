/**9. EMPLEADOS EMPRESA
Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino
(F)emenino), edad. Se desea que determine e imprima: promedio de edad de los hombres y la
mayor edad entre las mujeres procesadas y quien la tiene.
Se dispone de los siguientes datos de varios empleados: (nombre, sexo, edad)
(Mary, ‘F’, 43), (José, ‘M’, 40), (Carlos, ‘M’, 30), (Pedro, ‘M’, 50), (Mery, ‘F’, 45), (Liz, ‘F’, 50)
Promedio de edad de los hombres: 36,66
Mayor edad entre las mujeres es: 50 y la tiene Liz
 * 
 */

import Cl_empresa from "./Cl_empresa.js";
import Cl_dato from "./Cl_dato.js";

let dato1=new Cl_dato("Mary","F",43);
let dato2=new Cl_dato("Jose","M",40);
let dato3=new Cl_dato("carlos","M",30);
let dato4=new Cl_dato("Pedro","M",50);
let dato5=new Cl_dato("Mery","F",45);
let dato6=new Cl_dato("liz","F",50);

let empresa=new Cl_empresa();

empresa.procesarDato(dato1);
empresa.procesarDato(dato2);
empresa.procesarDato(dato3);
empresa.procesarDato(dato4);
empresa.procesarDato(dato5);
empresa.procesarDato(dato6);


let salida=document.getElementById("salida");

salida.innerHTML+="<br>  Promedio de edad de los hombres: " +empresa.promEdad();
salida.innerHTML+="<br>  Mayor edad entre las mujeres es: "+empresa.devMayorEM() ; 
salida.innerHTML+=" y la tiene " +empresa.devNombre();
