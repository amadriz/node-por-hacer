// Yargs es un paquete que nos ayuda a crear comandos para la consola

const argv = require('yargs')

//Comando para agregar una tarea
.command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            // demand es para hacer requerido meter la tarea (node app crear -d "Pasear a macha")
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    //Comando para actualizar una tarea
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        compleatado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    // Comando para borrar una tarea
    .command('borrar', 'Borra una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        compleatado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })

.help()
    .argv;
// Para exportrar los comandos de yargs
module.exports = {
    argv
}

/* comando crear 'Crear un elemento por hacer'
    --descripcion - d

comando actualizar 'Actualiza '
    --descripcion - d
    --completado - c true

--help */