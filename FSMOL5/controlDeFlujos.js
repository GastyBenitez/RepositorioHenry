function viajar (destino){                                  
    if (destino === "Brasil"){                              
        console.log('gire a la izqierda');
    }else if (destino === 'Argentina'){
        console.log('gire a la derecha');
    }else{
        console.log('Nos perdimos');
    }
}
viajar('Argentin');


function puedeManejar (edad) {
    if(edad >= 18) {
        console.log(true);
    }else {
        console.log(false);
    }
}

puedeManejar(2);