import {Estudiante} from "./Estudiante";
import { recorrerEstudiante } from "./Recorrerestudiantes";
import { insertarEstudiante,
    actualizarEstudiante,
    borrarEstudiante } from "./operaciones";

const estudiante1: Estudiante = {
    nombre : "Karen",
    apellido : "Peña",
    edad : 17,
    tipoIdentificacion: "Tarjeta de identidad",
    numeroIdentificacion : 1028680208
}

const estudiante2: Estudiante = {
    nombre : "Wilson ",
    apellido : "Mendoza",
    edad : 19,
    tipoIdentificacion: "Cédula de Ciudadania",
    numeroIdentificacion :102937485
}


const estudiante3: Estudiante = {
    nombre : "Laura",
    apellido : "Galvis",
    tipoIdentificacion: "Cedula",
    numeroIdentificacion : 1025459383
}
console.log ("_________________________________________________________________")
console.log ("Cargando...")

const listaEstudiante : Estudiante[] = [estudiante1, estudiante2,estudiante3]
recorrerEstudiante (listaEstudiante);

//Operaciones con arreglos
console.log ("_________________________")
console.log ("Antes de insertar")
console.log (listaEstudiante)


insertarEstudiante(estudiante1, listaEstudiante)
console.log("____________________")
console.log("Después de insertar")
console.log  (listaEstudiante)



actualizarEstudiante(1, listaEstudiante,
    "martin",
"portera")


console.log ("_________________________")
console.log ("Antes de Borrar")
console.log (listaEstudiante)
borrarEstudiante(3, listaEstudiante);
console.log ("_________________________")
console.log ("Despues de borrar")
console.log(listaEstudiante);