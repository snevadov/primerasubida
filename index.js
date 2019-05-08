//Ejemplo para repositorio.
//Ejecuta con:
// >node index.js promedio --n='juan' --m=1 --i=1 --p=5
//Requerimos Yargs >npm i yargs
const {obtenerPromedio, argv} = require('./datos.js');

console.log(argv);
if(argv._[0]=='promedio'){
	console.log('El promedio de ' + argv.n + ' es ' + obtenerPromedio(argv.m,argv.i,argv.p));
}
else {
	console.log('Promedio no calculado');
}