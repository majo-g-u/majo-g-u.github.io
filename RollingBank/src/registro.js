import '../src/css/style.css';
import swal from 'sweetalert';
import Clientes from "./clientes";
Clientes.getAll();
let valorArray = Clientes.getAll();





document.getElementById('evento').addEventListener("click", agregar);
// document.getElementById('evento').addEventListener("click", msj);
document.getElementById('dni').addEventListener("blur", function(){
  let valorInput = document.getElementById('dni').value;

    var a =  valorArray.find(function(item) { 
      return item.dni ==  valorInput;
    })

    if(a) {
       document.getElementById('dni').classList.add('is-invalid');  
       document.getElementById('alertDanger').classList.add('d-block');
     }else{
      document.getElementById('alertDanger').classList.remove('d-block');
      document.getElementById('alertDanger').classList.add('d-none');
      document.getElementById('dni').classList.remove('is-invalid');
     }
      
     if(a !== valorInput){
      document.getElementById('dni').classList.add('is-valid');
     }

     if(valorInput == ''){
      document.getElementById('dni').classList.remove('is-valid');
     }
  });

 // segundo find para inputs del formulario de registro

 document.getElementById('nombreusuario').addEventListener("blur", function(){
  let valorInputDos = document.getElementById('nombreusuario').value;
debugger
    var a =  valorArray.find(function(item) { 
      return item.nombreusuario ==  valorInputDos;
    })
  
    if(a) {
       document.getElementById('nombreusuario').classList.add('is-invalid');  
       document.getElementById('alertDangerDos').classList.add('d-block');
     }else{
      document.getElementById('alertDangerDos').classList.remove('d-block');
      document.getElementById('alertDangerDos').classList.add('d-none');
      document.getElementById('nombreusuario').classList.remove('is-invalid');
     }
      
     if(a !== valorInputDos){
      document.getElementById('nombreusuario').classList.add('is-valid');
     }

     if(valorInputDos == ''){
      document.getElementById('nombreusuario').classList.remove('is-valid');
     }

    });

    // tercer find para inputs del formulario de registro


    document.getElementById('correo').addEventListener("blur", function(){
      let valorInputTres = document.getElementById('correo').value;
    
        var a =  valorArray.find(function(item) { 
          return item.correo ==  valorInputTres;
        })
    
        if(a) {
           document.getElementById('correo').classList.add('is-invalid');  
           document.getElementById('alertDangerTres').classList.add('d-block');
         }else{
          document.getElementById('alertDangerTres').classList.remove('d-block');
          document.getElementById('alertDangerTres').classList.add('d-none');
          document.getElementById('correo').classList.remove('is-invalid');
         }
          
         if(a !== valorInputTres){
          document.getElementById('correo').classList.add('is-valid');
         }
    
         if(valorInputTres == ''){
          document.getElementById('correo').classList.remove('is-valid');
         }
    
        });



// cuarto find para inputs del formulario de registro


function agregar(){

  
  
     let nombre = document.getElementById('nombre').value;
     document.getElementById('nombre').value = '';
     let apellido = document.getElementById('apellido').value;
     document.getElementById('apellido').value = '';
     let genero = document.getElementById('genero').value;
     document.getElementById('genero').value = '';
     let dni = document.getElementById('dni').value;
     document.getElementById('dni').value = '';
     let nombreusuario = document.getElementById('nombreusuario').value;
     document.getElementById('nombreusuario').value = '';
     let correo = document.getElementById('correo').value;
     document.getElementById('correo').value = '';
     let contraseña = document.getElementById('contraseña').value;
     document.getElementById('contraseña').value = '';
     let repetir = document.getElementById('repetir').value;
     document.getElementById('repetir').value = '';
     let direccion = document.getElementById('direccion').value;
     document.getElementById('direccion').value = '';
     let celular = document.getElementById('celular').value;
     document.getElementById('celular').value = '';
     let estadocivil = document.getElementById('estadocivil').value;
     document.getElementById('estadocivil').value = '';

     let agregarUsuario = new Clientes(nombre, apellido, genero, dni, nombreusuario, correo, contraseña, repetir, direccion, celular, estadocivil);

     if(agregarUsuario.contraseña != agregarUsuario.repetir){
      swal ( "Las contraseñas no coinciden" ,  "Verifica esos datos para continuar" ,  "error" )
      return;
    }

    if (agregarUsuario.nombre == ''){
      swal ( "Datos necesarios" ,  "Por favor completa los datos para continuar" ,  "error" )
      return;
    }

    if (agregarUsuario.correo == ''){
      swal ( "Datos necesarios" ,  "Por favor completa los datos para continuar" ,  "error" )
      return;
    }

    if (agregarUsuario.contraseña == ''){
      swal ( "Datos necesarios" ,  "Por favor completa los datos para continuar" ,  "error" )
      return;
    }

    if (contraseña.length < 6 ){
      swal ( "Contraseña menor a 6 digitos" ,  "La contraseña no puede ser menor a 6 dígitos" ,  "error" )
      return;
    }

    
    if (agregarUsuario.repetir == ''){
      swal ( "Datos necesarios" ,  "Por favor completa los datos para continuar" ,  "error" )
      return;
    }

  
    msj();
  
   agregarUsuario.save();
   Clientes.listAll();
   
  }

  function msj() {
    
    swal({
    title: "Solicitud enviada",
    text: "Su solicitud de registro fue enviada con éxito",
    icon: "success",
    button: false,
    });
   
    setTimeout(function(){window.location.href = "index.html";}, 1000); 
    
  }


  document.getElementById('eventVolver').addEventListener('click', function(){

    window.location.href = "index.html";
  })

     