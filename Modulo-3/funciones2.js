function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}

function otraFuncion() {
    return (
        "El nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " + cuidadoConElConsoleLog('camilo')
    );
}


function cuidadoConElReturn(nombre) { //DEBAJO DEL RETURN NO SE EJECUTA
    return nombre;
    console.log(nombre);
}
