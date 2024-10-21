// Recorrerestudiantes.ts
import { Estudiante } from "./Estudiante";

export function recorrerEstudiante(arregloEstudiante: (Estudiante | string)[]) {
  arregloEstudiante.forEach(function(elemento) {
    console.log(elemento);
    console.log("*___________________________________________________*");
  });
}