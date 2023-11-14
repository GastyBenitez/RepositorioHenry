function viajar (destino){
    if (destino === 'brasil'){
        console.log('gire a la izqueirda');
    }else if(destino === 'Argentina'){
        console.log('Gire a la derecha');
    }else{
        console.log('Nos perdimos');
    }
}

viajar('peru');

function puedeManejar (edad){
    if(edad >= 18) {
        console.log(true);
    }else{
        console.log(false);
    }
}

puedeManejar(20);