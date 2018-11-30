//Logica para el sistema de tareas

//File system
const fs = require('fs');

//PARA GUARDAR EN DB FUNCION
const guardarDB = () => {
    //Json.stringify para convertir la data a JSON valido
    let data = JSON.stringify(listadoPorHacer);

    // crear archivo en DB
    fs.writeFile('DB/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

}


//Almacenar notas en un arreglo

let listadoPorHacer = [];

const cargarDB = () => {
        try {

            listadoPorHacer = require('../DB/data.json');

        } catch (error) {

            let listadoPorHacer = [];

        }

    }
    //Funcion para tareas por hacer
const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false

    };
    //.push registro de la tarea la tarea
    listadoPorHacer.push(porHacer);

    //Guardar a DB
    guardarDB();

    return porHacer;
}

//Funcion para OBTENER LISTADO DESDE DB

const getListado = () => {
    cargarDB();
    return listadoPorHacer
}


// Funcion para actualizar tareas o ponerles completado

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    // .findIndex es de js
    let index = listadoPorHacer.findIndex(tarea => {
        // Buscar la tarea para ver si es igual a la que la persona envia
        return tarea.descripcion === descripcion;

    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

// Funcion para borrar un registro

const borrar = (descripcion) => {

    cargarDB();
    // .filter es de JS y permite y crea un nuevo arreglo
    let nuevoListado = listadoPorHacer.filter(tarea => {
        //funcion recibir tarea diferente de la que existe para obtener nuevo listado
        return tarea.descripcion !== descripcion
    });
    // Si el listado por hacer es exactamente igual al nuevo listado quiere decir que no lo borro
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
        //si lo borro guardar en DB
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}



//Exportar funciones para utilizar en app
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}