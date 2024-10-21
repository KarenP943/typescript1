import { Estudiante } from "./Estudiante"
export const insertarEstudiante =
            function (estudiante:Estudiante , 
                     arregloEstudiante: Estudiante[])
            {
                arregloEstudiante.push(estudiante)
                //intrucciones para 
                //agregar(Create) el estudiante 
                // metodo array en js insertar
                //un elemento al arreglo?
            }
export const actualizarEstudiante = function ( indice: number ,
                                   listaEstudiante:Estudiante[] ,
                                   nombre:string ,
                                   apellido:string) {
        //instrucciones para actualizar 
        //el estudiante que se encuentre
        // en el indice en el 
        //parametro    
}



export const borrarEstudiante = function(indice: number, estudiantes: Estudiante[]) {
    // Verifica si el índice es válido (mayor o igual a 0 y menor que la longitud del arreglo)
    if (indice >= 0 && indice < estudiantes.length) {
      // Si el índice es válido, utiliza el método splice para eliminar el estudiante en la posición especificada
      // El método splice recibe dos parámetros: el índice donde se iniciará la eliminación y la cantidad de elementos a eliminar
      estudiantes.splice(indice, 1);
    } else {
      // Si el índice no es válido, muestra un mensaje de error en la consola
      // El mensaje de error incluye el índice que se intentó utilizar
      console.error(`Índice fuera de rango: ${indice}`);
    }
  };