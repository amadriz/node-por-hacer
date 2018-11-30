// Para incluir yargs
const argv = require('./config/yargs').argv;
// Incluir porHacer.js
const porHacer = require('./por-hacer/por-hacer');
//Para darle color y formato a los mensajes en consola
const colors = require('colors');

//Lista de tareas por hacer
let comando = argv._[0];

switch (comando) {
    //Control "Crear"
    case 'crear':
        //Incluyo funcion por hacer
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        //Igualar variable listado con porHacer
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('=======Por Hacer======='.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('========================'.green);
        }
        break;
    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);

        break;

        // PARA BORRAR DATOS

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('comando no es reconocido');
}

module.exports

//**COMANDOS PARA EL SISTEMA**/
//node app crear -d "Pasear al perro"
//node app listar
//node app actualizar -d "Pasear al perro" -c tru   e