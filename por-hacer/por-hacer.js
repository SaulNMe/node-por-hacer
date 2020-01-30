const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile("db/data.json", data, (err) => {
        if (err) {
            throw new Error("No se pudo guardar la tarea");
        }
    });
};

const cargarDB = () => {
    try {
        listadoPorHacer = require("../db/data.json");

    } catch (error) {
        listadoPorHacer = [];
    }

};

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        //id: "_" + Math.random().toString(36).substr(2, 9),
        id: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }),
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

};

const getListado = (des = "", comp = false) => {
    console.log(typeof comp);
    cargarDB();
    let newList = [];
    listadoPorHacer.forEach((tarea) => {
        console.log(tarea.completado, comp);
        if ((des.length > 0 && tarea.descripcion.indexOf(des, 0) >= 0) || tarea.completado == Boolean(comp)) {
            newList.push(tarea)
        };
    });
    return newList;
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter((tarea) => tarea.descripcion != descripcion);
    if (nuevoListado.length != listadoPorHacer.length) {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    } else {
        return false;
    }


}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};