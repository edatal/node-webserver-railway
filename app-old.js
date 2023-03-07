const http = require('http');

http.createServer( (req, res) => {

    //Ejemplo para descargar archivo CSV
    //res.setHeader('Content-Disposition', 'attachment; filename=listaNode.csv');
    //res.writeHead(200, {'Content-Type': 'application/csv'} );
    //res.write('id, nombre\n');
    //res.write('1, Eduardo\n');
    //res.write('2, Maria\n');
    //res.write('3, Paula\n');

    res.write('Hola Mundo!');
    res.end();

})
.listen( 8080 );

console.log("Escuchando puerto:", 8080); 