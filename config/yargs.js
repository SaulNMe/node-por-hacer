const descripcion = {
    demand: true,
    alias: "d",
    desc: "Descripción de una tarea por hacer"
};

const completado = {
    completado: {
        alias: 'c',
        default: true,
        desc: "Marca como completado o pentiente"
    }
};

const argv = require('yargs')
    .command('crear', "Crea una tarea por hacer", { descripcion })
    .command('actualizar', "Actualiza una tarea", {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}