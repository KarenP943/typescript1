"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Recorrerestudiantes_1 = require("./Recorrerestudiantes");
const operaciones_1 = require("./operaciones");
const estudiante1 = {
    nombre: "Karen",
    apellido: "Peña",
    edad: 17,
    tipoIdentificacion: "Tarjeta de identidad",
    numeroIdentificacion: 1028680208
};
const estudiante2 = {
    nombre: "Wilson ",
    apellido: "Mendoza",
    edad: 19,
    tipoIdentificacion: "Cédula de Ciudadania",
    numeroIdentificacion: 102937485
};
const estudiante3 = {
    nombre: "Laura",
    apellido: "Galvis",
    tipoIdentificacion: "Cedula",
    numeroIdentificacion: 1025459383
};
console.log("_________________________________________________________________");
console.log("Cargando...");
const listaEstudiante = [estudiante1, estudiante2, estudiante3];
(0, Recorrerestudiantes_1.recorrerEstudiante)(listaEstudiante);
//Operaciones con arreglos
console.log("_________________________");
console.log("Antes de insertar");
console.log(listaEstudiante);
(0, operaciones_1.insertarEstudiante)(estudiante1, listaEstudiante);
console.log("____________________");
console.log("Después de insertar");
console.log(listaEstudiante);
(0, operaciones_1.actualizarEstudiante)(1, listaEstudiante, "martin", "portera");
console.log("_________________________");
console.log("Antes de Borrar");
console.log(listaEstudiante);
(0, operaciones_1.borrarEstudiante)(3, listaEstudiante);
console.log("_________________________");
console.log("Despues de borrar");
console.log(listaEstudiante);
