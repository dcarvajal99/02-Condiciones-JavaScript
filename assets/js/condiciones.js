
/* parte uno */
const modifyButtom = () => {
    /* alert('hola')  */
    const imagen = document.querySelector('#fotouno');
    if (imagen.style.border === '2px solid red'){
        imagen.style.border = '0px';
    }else{
        imagen.style.border = '2px solid red';
    }
}
document.querySelector('#botonuno').addEventListener('click',modifyButtom);

/* parte dos */
const cantidades = () => {
    const valoruno = document.querySelector('#cantidaduno').value;
    const valordos = document.querySelector('#cantidaddos').value;
    const valortres = document.querySelector('#cantidadtres').value;
    
    suma = parseInt(valoruno) + parseInt(valordos) + parseInt(valortres);

    respuesta = document.querySelector('#respuesta')
    if( valoruno != 0 && valordos != 0 && valortres != 0 ){
        if(suma <= 10){
            respuesta.innerHTML = "LLevas " + suma + " stickers";
        }else{
            respuesta.innerHTML = "LLevas demaciados stickers XD";
        }
        

    }else{
        alert('falta agregar un valor');
    }
    
}
document.querySelector('#botondos').addEventListener('click',cantidades);

/* parte tres */
const clave = () => {
    const numerouno = document.querySelector('#numerouno').value;
    const numerodos = document.querySelector('#numerodos').value;
    const numerotres = document.querySelector('#numerotres').value;
    concatenar = numerouno + numerodos + numerotres;
    respuesta = document.querySelector('#respuestados')
    if(concatenar === '911'){
        respuesta.innerHTML = 'Password 1 correcto'
    }else if(concatenar === '714'){
        respuesta.innerHTML = 'Password 2 correcto'
    }else{
        respuesta.innerHTML = 'Password incorrecto'
    }
}
document.querySelector('#botontres').addEventListener('click',clave);