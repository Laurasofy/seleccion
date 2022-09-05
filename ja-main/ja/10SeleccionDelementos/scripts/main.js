'use strict';
function generoEvento(){
    alert('hizo click en el boton');
}
function eventoMouse(){
    console.log('Mouse');

}
//evento por propiedad

const btnPropiedad=document.getElementById('btnPropiedad');

btnPropiedad.onclick=function(){
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const promedio = document.getElementById('promedio').value;
    const tipo = document.getElementById('tipo').value;
    
if(isNaN(parseFloat(promedio))){

    console.log(promedio);
}


alert('click generado por propiedad');

}
//event por metodo addEventListener
const imputName = document.getElementById('nombre');
imputName.addEventListener('click',()=>{

    alert('click');
});
