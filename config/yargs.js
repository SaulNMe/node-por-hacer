const descripcion = (demand = true) => {
    return {
        demand,
        alias: 'd',
        desc: 'Descripción de una tarea por hacer'
    }
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pentiente'
};


const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { descripcion: descripcion() })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion: descripcion(),
        completado
    })
    .command('listar', 'Lista dependiendo de los parámetros', {
        descripcion: descripcion(false),
        completado
    })
    .command('borrar', 'Borrar tarea', { descripcion: descripcion() })
    .help()
    .argv;

module.exports = {
    argv
};