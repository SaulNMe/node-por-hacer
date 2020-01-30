const argv = require("./config/yargs").argv;
const Colors = require("colors/safe");
const { crear, getListado, actualizar, borrar } = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = getListado(argv.descripcion, argv.completado);
        if (listado.length == 0) {
            console.log(Colors.magenta("Aún no tienes tareas por hacer"));
        } else {

            for (const tarea of listado) {
                console.log(Colors.green("======== Por hacer ======="));
                console.log(Colors.cyan("id: "), Colors.yellow(tarea.id));
                console.log(Colors.cyan("Tarea: "), Colors.yellow(tarea.descripcion));
                console.log(Colors.cyan("Estado: "), Colors.yellow(tarea.completado));
                console.log(Colors.green("==========================\n"));
            }
        }
        break;

    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);

        break;

    default:
        console.log("Comando no reconocido");
        break;
};