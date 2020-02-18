import '../src/css/style.css';
import Clientes from "./clientes";
import swal from 'sweetalert';
import { isNull } from 'util';
Clientes.getAll();
import TarjetaNoUser from './tarjetaNoUser';
TarjetaNoUser.getTjNouser();


let currentUserArray = Clientes.getAll();

const sr = ScrollReveal();


sr.reveal('.transiciones', {
    origin: 'top',
    duration: 2000,
    distance: '300px',
});


sr.reveal('.scroll-one', {
    origin: 'top',
    duration: 2000,
    distance: '300px',
});

sr.reveal('.scroll-two', {
    origin: 'top',
    duration: 2000,
    distance: '300px',
});

sr.reveal('.scroll-three', {
    origin: 'top',
    duration: 2000,
    distance: '300px',
});

sr.reveal('.sr-title', {
    origin: 'left',
    duration: 2000,
    distance: '200px',
});

sr.reveal('.sr-text', {
    origin: 'left',
    duration: 2000,
    distance: '200px',
});

sr.reveal('.sr-button', {
    origin: 'right',
    duration: 2000,
    distance: '100px',
});






let currentUser = document.getElementById('ingresarNavbar').addEventListener("click", function(){

 event.preventDefault();

     let inputDni = document.getElementById('currentDni').value;
     let inputPass = document.getElementById('currentPassword').value;

     var loggedUser = currentUserArray.find(function(item){
         return inputDni == item.dni  && inputPass == item.contraseña;
     })

      if(loggedUser){
        localStorage.setItem('currentUser', JSON.stringify(loggedUser));
        window.location.href = "homebanking.html";
      }else{
        swal("Usuario o contraseña incorrectos", "Los datos que estas ingresando son erroneos", "error");
   
      }


})


document.getElementById('box-content-one').onmouseenter = function(){
    document.getElementById('box-content-two').classList.remove('img-background-rgba');
    document.getElementById('box-content-two').classList.add('img-background-rgba-white');
    document.getElementById('title-color-text').classList.remove('text-white');
    document.getElementById('title-color-text').classList.add('text-color-title');
};

document.getElementById('box-content-one').onmouseleave = function(){
    document.getElementById('box-content-two').classList.remove('img-background-rgba-white');
    document.getElementById('box-content-two').classList.add('img-background-rgba');
    document.getElementById('title-color-text').classList.add('text-white');
    document.getElementById('title-color-text').classList.remove('text-color-title');
};

// Segunda imagen

document.getElementById('m-box-one').onmouseenter = function(){
    document.getElementById('m-box-two').classList.remove('img-background-rgba');
    document.getElementById('m-box-two').classList.add('img-background-rgba-white');
    document.getElementById('m-text-three').classList.remove('text-white');
    document.getElementById('m-text-three').classList.add('text-color-title');
};

document.getElementById('m-box-one').onmouseleave = function(){
    document.getElementById('m-box-two').classList.remove('img-background-rgba-white');
    document.getElementById('m-box-two').classList.add('img-background-rgba');
    document.getElementById('m-text-three').classList.add('text-white');
    document.getElementById('m-text-three').classList.remove('text-color-title');
};

// Tercera imagen

document.getElementById('l-box-one').onmouseenter = function(){
    document.getElementById('l-box-two').classList.remove('img-background-rgba');
    document.getElementById('l-box-two').classList.add('img-background-rgba-white');
    document.getElementById('l-box-three').classList.remove('text-white');
    document.getElementById('l-box-three').classList.add('text-color-title');
};

document.getElementById('l-box-one').onmouseleave = function(){
    document.getElementById('l-box-two').classList.remove('img-background-rgba-white');
    document.getElementById('l-box-two').classList.add('img-background-rgba');
    document.getElementById('l-box-three').classList.add('text-white');
    document.getElementById('l-box-three').classList.remove('text-color-title');
};






document.getElementById('card-div-seccion').addEventListener('mouseenter', function(){

  
     document.getElementById('btnTransicionOne').classList.add('btn-transicion-dos');
     document.getElementById('btnTransicionOne').classList.remove('btn-transicion');
     document.getElementById('btnTransicionOne').classList.remove('btn-transicion-tres');
 
    

     
})

document.getElementById('card-div-seccion').addEventListener('mouseleave', function(){


    document.getElementById('btnTransicionOne').classList.remove('btn-transicion');
    document.getElementById('btnTransicionOne').classList.remove('btn-transicion-dos');
    document.getElementById('btnTransicionOne').classList.add('btn-transicion-tres');
  

    

})


document.getElementById('card-div-seccion-dos').addEventListener('mouseenter', function(){

  
    document.getElementById('btnTransicionTwo').classList.add('btn-transicion-dos');
    document.getElementById('btnTransicionTwo').classList.remove('btn-transicion');
    document.getElementById('btnTransicionTwo').classList.remove('btn-transicion-tres');
 
   

    
})

document.getElementById('card-div-seccion-dos').addEventListener('mouseleave', function(){


   document.getElementById('btnTransicionTwo').classList.remove('btn-transicion');
   document.getElementById('btnTransicionTwo').classList.remove('btn-transicion-dos');
   document.getElementById('btnTransicionTwo').classList.add('btn-transicion-tres');



   

})

document.getElementById('card-div-seccion-tres').addEventListener('mouseenter', function(){

  
    document.getElementById('btnTransicionThree').classList.add('btn-transicion-dos');
    document.getElementById('btnTransicionThree').classList.remove('btn-transicion');
    document.getElementById('btnTransicionThree').classList.remove('btn-transicion-tres');

   
   

    
})

document.getElementById('card-div-seccion-tres').addEventListener('mouseleave', function(){


   document.getElementById('btnTransicionThree').classList.remove('btn-transicion');
   document.getElementById('btnTransicionThree').classList.remove('btn-transicion-dos');
   document.getElementById('btnTransicionThree').classList.add('btn-transicion-tres');
  


})


// =========== contacto ============



let inputEmail = document.getElementById('inputEmail');
let inputNumero = document.getElementById('inputNumero');
let inputMensaje = document.getElementById('inputMensaje');
let btnEnviarContacto = document.getElementById('btnEnviarContacto');

btnEnviarContacto.addEventListener('click', function(){

if(inputEmail.value != '' && inputNumero.value == ''){
    swal ( "Enviado" ,  "Su mensaje fue enviado con Exito!" ,  "success" )
    return
    }else if(inputEmail.value == '' && inputNumero.value != ''){
        swal ( "Enviado" ,  "Su mensaje fue enviado con Exito!" ,  "success" )
        return
    }else if(inputEmail.value == '' && inputNumero.value == '' && inputMensaje.value == ''){
        swal ( "Falta Completar" ,  "Por favor complete los campos para poder enviar su mensaje" ,  "error" )
        return;
    }else if(inputEmail.value != '' && inputNumero.value != '' && inputMensaje.value != ''){
        swal ( "Enviado" ,  "Su mensaje fue enviado con Exito!" ,  "success" )
        return;
    }else if(inputEmail.value == '' && inputNumero.value == '' && inputMensaje.value != ''){
        swal ( "Falta Completar" ,  "Por favor complete los campos para poder enviar su mensaje" ,  "error" )
        return;
    }
});


document.getElementById('solicitarTarjetaSlider').addEventListener("click", agregarPedido);

function agregarPedido(){
    
   
    let nombreModal = document.getElementById('nombreModal').value;
    let apellidoModal = document.getElementById('apellidoModal').value;
    let generoModal = document.getElementById('generoModal').value;
    let dniModal = document.getElementById('dniModal').value;
    let correoModal = document.getElementById('correoModal').value;
    let direccionModal = document.getElementById('direccionModal').value;
    let celularModal = document.getElementById('celularModal').value;
    let estadocivilModal = document.getElementById('estadocivilModal').value;

    let tcNoUser = new TarjetaNoUser(nombreModal, apellidoModal,generoModal, dniModal, correoModal, direccionModal, celularModal, estadocivilModal);
    
    document.getElementById('nombreModal').value = '';
    document.getElementById('apellidoModal').value = '';
    document.getElementById('generoModal').value = '';
    document.getElementById('dniModal').value = '';
    document.getElementById('correoModal').value = '';
    document.getElementById('direccionModal').value = '';
    document.getElementById('celularModal').value = '';
    document.getElementById('estadocivilModal').value = '';
    
    if (tcNoUser.nombreModal == ''){
        swal ( "Nombre necesarios" ,  "Por favor completa los datos para continuar" ,  "error" )
        return;
    }else if (tcNoUser.apellidoModal == ''){
        swal ( "Apellido necesarios" ,  "Por favor completa los datos para continuar" ,  "error" )
        return;
    }else if (tcNoUser.dniModal == ''){
        swal ( "Dni necesarios" ,  "Por favor completa los datos para continuar" ,  "error" )
        return;
    }else if(tcNoUser.correoModal == ''){
        swal ( "Correo necesarios" ,  "Por favor completa los datos para continuar" ,  "error" )
        return;
    }else if (tcNoUser.direccionModal == ''){
        swal ( "Direccion necesarios" ,  "Por favor completa los datos para continuar" ,  "error" )
        return;
    }else if (tcNoUser.celularModal == ''){
        swal ( "Numero de telefono necesarios" ,  "Por favor completa los datos para continuar" ,  "error" )
        return;
    }


    msje();
    tcNoUser.solicitarTjNoUser();
    // TarjetaNoUser.ListarTjNoUser();
 

}

function msje() {
    
    swal({
    title: "Solicitud enviada",
    text: "Tu pedido de tarjeta fue enviado con éxito",
    icon: "success",
    button: false,
    });
   
    
  }